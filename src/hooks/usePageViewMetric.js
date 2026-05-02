import { useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";

const PROJECT = "Portfolio_Website";

// Generate UUID without external library
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getReferrer() {
  if (typeof document !== "undefined") {
    return document.referrer || null;
  }
  return null;
}

export default function usePageViewMetric(page) {
  const visitIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasUpdatedRef = useRef(false);

  useEffect(() => {
    const visitId = generateUUID();
    const referrer = getReferrer();
    const startTime = Date.now();
    
    visitIdRef.current = visitId;
    startTimeRef.current = startTime;
    hasUpdatedRef.current = false;

    // Insert view on mount
    supabase.from("Views").insert([
      {
        project: PROJECT,
        page,
        views: 1,
        visit_id: visitId,
        referrer,
        time_on_page: null,
      },
    ]).then(() => {});

    // Update time spent - called from multiple events for reliability
    const updateTimeOnPage = async () => {
      if (hasUpdatedRef.current) return; // Prevent duplicate updates
      hasUpdatedRef.current = true;
      
      const timeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
      
      try {
        await supabase.from("Views")
          .update({ time_on_page: timeOnPage })
          .eq("visit_id", visitIdRef.current);
      } catch (error) {
        console.error("Failed to update time_on_page:", error);
      }
    };

    // Use visibilitychange for better reliability (fires when tab is hidden)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        updateTimeOnPage();
      }
    };

    // Fallback to beforeunload for page close
    const handleBeforeUnload = () => {
      updateTimeOnPage();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);
    
    // Cleanup on component unmount (for SPA navigation)
    return () => {
      updateTimeOnPage();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [page]);
}


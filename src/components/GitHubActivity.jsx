import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const GitHubActivity = ({ username = "EricAzayev" }) => {
  const [contributionData, setContributionData] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const cacheKey = `gh_events_${username}_calendar`;
        const cached = sessionStorage.getItem(cacheKey);
        let dataArray = [];
        let total = 0;

        if (cached) {
          const { data, sum, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 3600000) {
            dataArray = data;
            total = sum;
          }
        }

        if (dataArray.length === 0) {
          const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
          if (!response.ok) throw new Error('Failed to fetch GitHub data');

          const json = await response.json();
          total = json.totalContributions || 0;

          // Flatten the weeks array into a single days array
          const allDays = (json.contributions || []).flat().map(day => ({
            date: day.date,
            count: day.contributionCount
          }));

          // Take last 90 days for the UI
          dataArray = allDays.slice(-90);

          sessionStorage.setItem(cacheKey, JSON.stringify({
            data: dataArray,
            sum: total,
            timestamp: Date.now()
          }));
        }

        setContributionData(dataArray);
        setTotalContributions(total);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-slate-900';
    if (count < 3) return 'bg-blue-900';
    if (count < 6) return 'bg-blue-700';
    if (count < 9) return 'bg-blue-500';
    return 'bg-blue-400';
  };

  // Group data by weeks
  const weeks = [];
  for (let i = 0; i < contributionData.length; i += 7) {
    weeks.push(contributionData.slice(i, i + 7));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-950 rounded-2xl p-8 shadow-lg border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3">
          <Github className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-wide">
            {loading ? 'LOADING...' : `${totalContributions}+ COMMITS`}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="text-slate-400 font-mono text-sm">Loading contributions...</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="inline-flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-6 text-xs font-mono text-slate-400">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-slate-900" />
              <div className="w-3 h-3 rounded-sm bg-blue-900" />
              <div className="w-3 h-3 rounded-sm bg-blue-700" />
              <div className="w-3 h-3 rounded-sm bg-blue-500" />
              <div className="w-3 h-3 rounded-sm bg-blue-400" />
            </div>
            <span>More</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GitHubActivity;

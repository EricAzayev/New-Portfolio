import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Trophy, Target, TrendingUp } from "lucide-react";
import { useProfileStats } from "../hooks/useProfileStats";

const AnimatedProgressBar = ({ value, max, label, color = "blue", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-mono text-slate-300 uppercase tracking-wide">{label}</span>
        <span className="text-sm font-bold text-white">{value}</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400 rounded-full`}
        />
      </div>
    </div>
  );
};

const LeetCodeStats = ({ username = "EricAzayev" }) => {
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(`https://leetcode-stats.tashif.codes/${username}`);
        const data = await response.json();

        if (data.status !== "success") {
          throw new Error("Failed to fetch LeetCode data");
        }

        setLeetcodeData({
          totalSolved: data.totalSolved || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          ranking: data.ranking || 0,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setLeetcodeData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLeetCodeData();
  }, [username]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-950 rounded-2xl p-8 shadow-lg border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg p-3">
          <Code2 className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">LeetCode Stats</h3>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-wide">
            {leetcodeData.ranking > 0 && `RANK: ${leetcodeData.ranking.toLocaleString()}`}
          </p>
        </div>
      </div>

      {leetcodeData.loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="text-slate-400 font-mono">Loading stats...</div>
        </div>
      ) : (
        <div>
          {/* Total Solved - Large Display */}
          <div className="mb-8 text-center">
            <div className="text-6xl font-bold text-white mb-2">
              {leetcodeData.totalSolved}
            </div>
            <div className="text-slate-400 font-mono text-sm uppercase tracking-wide">
              Problems Solved
            </div>
          </div>

          {/* Progress Bars by Difficulty */}
          <AnimatedProgressBar
            value={leetcodeData.easySolved}
            max={leetcodeData.totalSolved || 1}
            label="Easy"
            color="green"
            delay={0.1}
          />
          <AnimatedProgressBar
            value={leetcodeData.mediumSolved}
            max={leetcodeData.totalSolved || 1}
            label="Medium"
            color="yellow"
            delay={0.2}
          />
          <AnimatedProgressBar
            value={leetcodeData.hardSolved}
            max={leetcodeData.totalSolved || 1}
            label="Hard"
            color="red"
            delay={0.3}
          />

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">{leetcodeData.easySolved}</div>
              <div className="text-xs text-slate-500 font-mono">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-yellow-400">{leetcodeData.mediumSolved}</div>
              <div className="text-xs text-slate-500 font-mono">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-400">{leetcodeData.hardSolved}</div>
              <div className="text-xs text-slate-500 font-mono">Hard</div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LeetCodeStats;

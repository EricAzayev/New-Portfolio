import { useState, useEffect } from 'react';

export const useProfileStats = (githubUsername, leetcodeUsername) => {
  const [stats, setStats] = useState({
    githubCommits: 0,
    leetcodeSolved: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubCommits = async () => {
      try {
        const cacheKey = `gh_events_${githubUsername}`;
        const cached = sessionStorage.getItem(cacheKey);

        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 3600000) {
            return data;
          }
        }

        const response = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}.json`);

        if (!response.ok) throw new Error('GitHub API request failed');
        const json = await response.json();

        const totalCommits = json.totalContributions || 0;

        sessionStorage.setItem(cacheKey, JSON.stringify({
          data: totalCommits,
          timestamp: Date.now()
        }));

        return totalCommits;
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return 0;
      }
    };

    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`);
        if (!response.ok) throw new Error('LeetCode API request failed');

        const data = await response.json();
        return data.solvedProblem || 0;
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        return 0;
      }
    };

    const fetchAllStats = async () => {
      // Execute fetches independently so one slow/failing API doesn't block the other
      fetchGitHubCommits().then(commits => {
        setStats(prev => ({
          ...prev,
          githubCommits: commits,
          loading: prev.leetcodeSolved === 0 ? prev.loading : false // only finish loading if leetcode is not 0 (or we can just keep loading until both resolve, we'll track individually)
        }));
      });

      fetchLeetCodeStats().then(leetcode => {
        setStats(prev => ({
          ...prev,
          leetcodeSolved: leetcode,
          loading: false // we can just set loading to false here or handle properly
        }));
      });

      // Let's ensure loading resolves to false after both complete regardless
      Promise.allSettled([fetchGitHubCommits(), fetchLeetCodeStats()]).then(() => {
        setStats(prev => ({ ...prev, loading: false }));
      });
    };

    fetchAllStats();
  }, [githubUsername, leetcodeUsername]);

  return stats;
};

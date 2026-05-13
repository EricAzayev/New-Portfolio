import React from "react";
import usePageViewMetric from "../../hooks/usePageViewMetric";

function GroupWisdom() {
  usePageViewMetric("Data/GroupWisdom");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">GroupWisdom Bot</h1>
        <p className="text-lg text-slate-600 mb-6 italic">
          A Discord digital-twin experiment built to learn how well models can capture the voice of a community.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <img
              src="/photos/Projects/GroupWisdom/hallucinationsExample.png"
              alt="GroupWisdom hallucination example"
              className="w-full aspect-video object-contain bg-slate-100"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-600 mb-4">
              GroupWisdom, also referred to as WisdomBot or Parry, explores whether a model fine-tuned on Discord server history can reproduce a participant's communication style with high fidelity.
            </p>
            <p className="text-slate-600 mb-4">
              The project combines real-time Discord data ingestion, automated cleaning, and Unsloth-accelerated fine-tuning to turn raw conversation history into a context-aware digital twin.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Unsloth", "Discord.py", "LLM Inference", "Fine-Tuning", "Context Windows"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-100 text-cyan-700 border border-cyan-200 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Training & Response Flow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Server Data Ingestion</h3>
                <p className="text-sm text-slate-600">
                  Discord conversations are collected and cleaned so the model can learn from message history without relying on manually curated transcripts.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Digital Twin Training</h3>
                <p className="text-sm text-slate-600">
                  Unsloth fine-tuning is used to model the tone, phrasing, and response patterns of a selected community member.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Context-Aware Replies</h3>
                <p className="text-sm text-slate-600">
                  Once forged, the bot responds using the last several messages as context, creating a private invocation flow that feels native to the server's conversation rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupWisdom;
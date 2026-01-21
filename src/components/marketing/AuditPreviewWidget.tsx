"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, Gauge } from "lucide-react";

const auditItems = [
  { label: "Performance", score: 45, status: "warning", target: 90 },
  { label: "Mobile Friendly", score: 32, status: "error", target: 100 },
  { label: "SEO", score: 58, status: "warning", target: 90 },
  { label: "Security (SSL)", score: 0, status: "error", target: 100 },
  { label: "Accessibility", score: 67, status: "warning", target: 85 },
];

const recommendations = [
  { priority: "high", text: "Add SSL certificate immediately", effort: "1 day" },
  { priority: "high", text: "Optimize images for web (save 2.4MB)", effort: "2 hours" },
  { priority: "medium", text: "Add mobile viewport meta tag", effort: "30 mins" },
  { priority: "medium", text: "Implement lazy loading for images", effort: "2 hours" },
  { priority: "low", text: "Add structured data for local SEO", effort: "1 hour" },
];

export function AuditPreviewWidget() {
  return (
    <div className="rounded-2xl border bg-card shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-primary" />
            <span className="font-semibold">Website Audit Report</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
            Needs Attention
          </span>
        </div>
        <p className="text-sm text-slate-400">example-business.co.zw</p>
      </div>

      {/* Scores */}
      <div className="p-6 border-b">
        <h4 className="font-medium mb-4">Performance Scores</h4>
        <div className="space-y-3">
          {auditItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              {item.status === "error" ? (
                <XCircle className="h-5 w-5 text-red-500" />
              ) : item.status === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              <span className="flex-1 text-sm">{item.label}</span>
              <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`h-full rounded-full ${
                    item.status === "error"
                      ? "bg-red-500"
                      : item.status === "warning"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                />
              </div>
              <span className="text-sm font-mono w-12 text-right">
                {item.score}/{item.target}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6">
        <h4 className="font-medium mb-4">Top Recommendations</h4>
        <div className="space-y-2">
          {recommendations.slice(0, 3).map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
            >
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${
                  rec.priority === "high"
                    ? "bg-red-100 text-red-700"
                    : rec.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {rec.priority}
              </span>
              <div className="flex-1">
                <p className="text-sm">{rec.text}</p>
                <p className="text-xs text-muted-foreground">Est. effort: {rec.effort}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          This is a preview. Get your full report free →
        </p>
      </div>
    </div>
  );
}

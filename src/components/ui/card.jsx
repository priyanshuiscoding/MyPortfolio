import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-lg border border-gray-800 bg-slate-900 text-white shadow-sm ${className}`.trim()}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 ${className}`.trim()} {...props} />;
}

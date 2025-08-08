// src/components/SymbolCard.tsx
"use client";
import { useState } from 'react';

interface SymbolCardProps {
  char: string;      // ★
  name: string;      // 黑色星号
  unicode: string;   // U+2605
}

export default function SymbolCard({ char, name, unicode }: SymbolCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(char);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 秒后隐藏提示
    } catch {
      alert('复制失败，请手动复制');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full sm:w-60 rounded-lg border p-4 text-center
                 transition hover:bg-gray-50 active:scale-95">
      <span className="text-5xl sm:text-6xl">{char}</span>

      <div className="mt-2 text-lg font-medium">{name}</div>
      <div className="text-sm text-gray-600">{unicode}</div>

      {copied && (
        <div className="mt-2 rounded bg-green-100 py-1 text-sm text-green-700">
          已复制!
        </div>
      )}
    </button>
  );
}
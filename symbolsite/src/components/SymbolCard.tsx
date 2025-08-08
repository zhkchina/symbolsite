// src/components/SymbolCard.tsx
"use client";
import { useState } from 'react';

interface SymbolCardProps {
  char: string;      // ★
  name: string;      // 黑色星号
}

export default function SymbolCard({ char, name }: SymbolCardProps) {
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
      className="relative w-full aspect-square overflow-hidden rounded-lg border text-center transition hover:bg-gray-50 active:scale-95"
    >
      {/* 中间居中显示符号 */}
      <div className="absolute inset-x-0 top-0 bottom-5 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{char}</span>
      </div>

      {/* 底部固定一行显示名称（不省略号，缩小字体） */}
      <div className="absolute bottom-1 left-1 right-1 text-[10px] sm:text-[11px] md:text-xs leading-tight whitespace-nowrap overflow-hidden text-clip">
        {name}
      </div>

      {copied && (
        <div className="absolute inset-x-2 bottom-6 rounded bg-green-100 py-1 text-sm text-green-700">
          已复制!
        </div>
      )}
    </button>
  );
}
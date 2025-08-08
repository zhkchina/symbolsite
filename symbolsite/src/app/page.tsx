import SymbolCard from '@/components/SymbolCard';
import { symbols } from '@/symbols';

export default function Page() {
  return (
    <>
      <section className="mb-4">
        <h2 className="text-base font-medium">常用符号（点击卡片复制）</h2>
        <p className="mt-1 text-sm text-gray-600">
          本页收录星号、爱心等常用符号。点击任意卡片即可复制到剪贴板。
        </p>
      </section>

      <section aria-label="符号列表" className="flex flex-wrap gap-4">
        {symbols.map((s) => (
          <SymbolCard key={s.char} {...s} />
        ))}
      </section>
    </>
  );
}
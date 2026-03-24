interface Props {
  text: string;
  source: string;
}

export function WisdomQuote({ text, source }: Props) {
  return (
    <blockquote className="zen-slide-up my-8 px-4 py-6 bg-parchment/60 rounded-2xl border border-ink/5">
      <p className="font-brush text-xl leading-relaxed text-charcoal/80 text-center">
        &ldquo;{text}&rdquo;
      </p>
      <footer className="mt-3 text-center text-sm text-ink font-light italic">
        — {source}
      </footer>
    </blockquote>
  );
}

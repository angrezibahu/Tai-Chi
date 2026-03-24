import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function PageWrapper({ children, title, subtitle }: Props) {
  return (
    <main className="min-h-screen pb-24 px-5 pt-6 max-w-lg mx-auto zen-fade-in">
      {title && (
        <header className="mb-6">
          <h1 className="text-2xl font-serif text-charcoal">{title}</h1>
          {subtitle && <p className="text-sm text-ink mt-1 font-light">{subtitle}</p>}
        </header>
      )}
      {children}
    </main>
  );
}

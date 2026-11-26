import type { ReactNode } from 'react';

export function Container({
  as: Tag = 'div',
  className = '',
  children,
}: {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}

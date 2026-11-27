'use client';

import { useEffect, useRef } from 'react';

type ParsedScript = { code: string; src: string | null; type: string | null };

/**
 * Renders a self-contained WordPress html-block page (inline <style> applies via
 * innerHTML). React does NOT execute <script> tags inserted as HTML, so we strip
 * them from the static markup and re-inject each as a real <script> element after
 * mount — in order, each isolated so one failing script can't block the rest.
 * Used for the three interactive pages (checklists / professional overview).
 */
function splitScripts(html: string): { cleaned: string; scripts: ParsedScript[] } {
  const scripts: ParsedScript[] = [];
  const cleaned = html.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (_m, attrs: string, code: string) => {
      const srcMatch = /src\s*=\s*["']([^"']+)["']/i.exec(attrs);
      const typeMatch = /type\s*=\s*["']([^"']+)["']/i.exec(attrs);
      scripts.push({
        code,
        src: srcMatch ? srcMatch[1] : null,
        type: typeMatch ? typeMatch[1] : null,
      });
      return '';
    },
  );
  return { cleaned, scripts };
}

export function RawHtml({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);
  const { cleaned, scripts } = splitScripts(html);

  useEffect(() => {
    if (ran.current) return; // guard dev StrictMode double-invoke
    ran.current = true;
    for (const s of scripts) {
      const el = document.createElement('script');
      if (s.type) el.type = s.type;
      if (s.src) el.src = s.src;
      else el.textContent = s.code;
      el.dataset.ethosInjected = 'true';
      document.body.appendChild(el);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: cleaned }} />;
}

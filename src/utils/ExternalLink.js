import React from "react";

export default function ExternalLink({ href, children, className, ariaLabel }) {
  if (!href) return <>{children}</>;

  const label = ariaLabel
    ? `${ariaLabel} (opens in a new tab)`
    : undefined;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
      {label ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

type SocialIconProps = {
  platform: string;
  className?: string;
};

export default function SocialIcon({ platform, className = "h-4 w-4" }: SocialIconProps) {
  const key = platform.toLowerCase();

  if (key.includes("instagram")) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (key.includes("facebook")) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="currentColor"
      >
        <path d="M14.2 8.6V7.1c0-.8.5-1 1.1-1h1.4V3.4c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v1.1H7.2v3.1H10v8.9h3.4v-8.9h2.8l.5-3.1h-3Z" />
      </svg>
    );
  }

  return (
    <span aria-hidden="true" className="font-sub text-xs font-extrabold">
      {platform[0]}
    </span>
  );
}

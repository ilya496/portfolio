import React, { useRef, useState } from "react";

export type tatus = "online" | "offline" | "updating" | "degraded";

export interface etric {
  label: string; // e.g., "Storage", "Players", "Streams", "Port"
  value: string; // e.g., "12.4 / 16 TB", "4/20", "2 Direct", "8096"
}

export interface CardProps {
  name: string;
  category: string; // e.g., "Media", "Storage", "Gaming", "Web"
  description: string;
  status: tatus;
  url: string; // e.g., "http://192.168.1.150:8096" or "https://jellyfin.local"
  localIpOrDomain: string; // e.g., "192.168.1.150" or "jellyfin.home"
  imageUrl: string; // Logo or UI screenshot
  metrics?: etric[]; // Up to 3 custom stats
  interactive?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  category,
  description,
  status,
  url,
  localIpOrDomain,
  imageUrl,
  metrics = [],
  interactive = true,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCopyIp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(localIpOrDomain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card ${interactive ? "card--interactive" : ""} ${className}`.trim()}
    >
      <div className="card__glow" />

      <div className="card__media">
        <img src={imageUrl} alt={`${name} logo`} className="card__image" />
        <div className="card__badges">
          <span className="card__category">{category}</span>
          <span className={`card__status card__status--${status}`}>
            {status}
          </span>
        </div>
      </div>

      <div className="card__content">
        <div className="card__title-row">
          <h3 className="card__title">{name}</h3>

          <button
            type="button"
            className="card__ip-btn"
            onClick={handleCopyIp}
            title="Click to copy host IP/Domain"
          >
            {copied ? "Copied!" : localIpOrDomain}
          </button>
        </div>

        <p className="card__description">{description}</p>

        {metrics.length > 0 && (
          <div className="card__metrics">
            {metrics.map((m, idx) => (
              <div key={idx} className="card__metric">
                <span className="card__metric-label">{m.label}</span>
                <span className="card__metric-value">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card__action-btn"
          >
            Open App
            <svg
              className="card__icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

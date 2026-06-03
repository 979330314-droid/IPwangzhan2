const leftBars = [
  { x: 168, y: 102, w: 58, color: "#26f4ff" },
  { x: 130, y: 146, w: 88, color: "#ff2bd6" },
  { x: 92, y: 190, w: 118, color: "#f7c644" },
  { x: 118, y: 236, w: 94, color: "#ff6b35" },
  { x: 68, y: 288, w: 132, color: "#20e37b" },
  { x: 112, y: 340, w: 88, color: "#20c8ff" },
  { x: 158, y: 392, w: 66, color: "#fb35ff" },
  { x: 198, y: 450, w: 44, color: "#f5f5f5" }
];

const rightBars = [
  { x: 566, y: 88, w: 72, color: "#ff2bd6" },
  { x: 582, y: 138, w: 112, color: "#f7c644" },
  { x: 594, y: 188, w: 158, color: "#26f4ff" },
  { x: 584, y: 246, w: 128, color: "#20e37b" },
  { x: 604, y: 306, w: 104, color: "#ff6b35" },
  { x: 584, y: 366, w: 146, color: "#20c8ff" },
  { x: 552, y: 430, w: 92, color: "#fb35ff" },
  { x: 520, y: 488, w: 60, color: "#f5f5f5" }
];

const codeText = [
  { x: 186, y: 164, text: "flow.ai()", color: "#26f4ff", rotate: -12 },
  { x: 104, y: 250, text: "{prompt}", color: "#ff2bd6", rotate: -9 },
  { x: 86, y: 332, text: "IP_DATA", color: "#f7c644", rotate: -5 },
  { x: 224, y: 402, text: "agent", color: "#20e37b", rotate: 14 },
  { x: 548, y: 148, text: "chain++", color: "#ff6b35", rotate: 10 },
  { x: 604, y: 226, text: "business", color: "#26f4ff", rotate: 9 },
  { x: 596, y: 326, text: "table.sync", color: "#fb35ff", rotate: 5 },
  { x: 514, y: 434, text: "content()", color: "#f7c644", rotate: -13 }
];

export function CodeButterfly() {
  return (
    <div className="butterfly-stage" aria-hidden="true">
      <svg className="butterfly-svg" viewBox="0 0 820 620" role="img">
        <defs>
          <linearGradient id="leftWing" x1="0" x2="1">
            <stop offset="0%" stopColor="#20c8ff" />
            <stop offset="52%" stopColor="#fb35ff" />
            <stop offset="100%" stopColor="#f7c644" />
          </linearGradient>
          <linearGradient id="rightWing" x1="0" x2="1">
            <stop offset="0%" stopColor="#f7c644" />
            <stop offset="42%" stopColor="#26f4ff" />
            <stop offset="100%" stopColor="#ff2bd6" />
          </linearGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="wing wing-left"
          d="M394 330C304 260 252 78 80 70C42 160 74 282 184 350C94 404 76 510 150 564C260 548 338 444 396 356"
          fill="url(#leftWing)"
        />
        <path
          className="wing wing-right"
          d="M426 330C516 250 566 62 760 72C794 170 748 292 628 356C732 414 742 528 656 570C548 544 474 444 424 356"
          fill="url(#rightWing)"
        />
        <path
          className="body-line"
          d="M410 196C384 256 382 366 410 520C440 366 438 256 410 196Z"
          fill="#20c8ff"
        />
        <path className="antenna" d="M402 220C358 144 304 108 236 94" />
        <path className="antenna" d="M418 220C466 142 536 108 676 96" />
        <g filter="url(#neonGlow)">
          {leftBars.map((bar, index) => (
            <rect
              className="code-bar"
              key={`l-${bar.x}-${bar.y}`}
              x={bar.x}
              y={bar.y}
              width={bar.w}
              height={8}
              rx={2}
              fill={bar.color}
              style={{ animationDelay: `${index * 120}ms` }}
            />
          ))}
          {rightBars.map((bar, index) => (
            <rect
              className="code-bar"
              key={`r-${bar.x}-${bar.y}`}
              x={bar.x}
              y={bar.y}
              width={bar.w}
              height={8}
              rx={2}
              fill={bar.color}
              style={{ animationDelay: `${index * 140}ms` }}
            />
          ))}
          {codeText.map((item) => (
            <text
              className="code-text"
              fill={item.color}
              fontSize="19"
              key={item.text}
              transform={`rotate(${item.rotate} ${item.x} ${item.y})`}
              x={item.x}
              y={item.y}
            >
              {item.text}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}

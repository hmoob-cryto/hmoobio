interface FlagIconProps {
  code: "en" | "hmn" | "th";
  className?: string;
}

const flags: Record<string, JSX.Element> = {
  en: (
    <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path fill="#bd3d44" d="M0 0h640v37h-640zm0 74h640v37h-640zm0 148h640v37h-640zm0 74h640v37h-640zm0-296h640v37h-640zm0 148h640v37h-640zm0 148h640v37h-640zm0 74h640v37h-640zm0-370h640v37h-640zm0 222h640v37h-640zm0 148h640v37h-640zm0-296h640v37h-640zm0 148h640v37h-640z"/>
          <path fill="#fff" d="M0 37h640v37h-640zm0 148h640v37h-640zm0 74h640v37h-640zm0-148h640v37h-640zm0 222h640v37h-640zm0 74h640v37h-640z"/>
        </g>
        <path fill="#192f5d" d="M0 0h256v259H0z"/>
      </g>
    </svg>
  ),
  hmn: (
    <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
      <defs><clipPath id="lao"><path fillOpacity=".7" d="M0 0h640v480H0z"/></clipPath></defs>
      <g clipPath="url(#lao)">
        <path fill="#ce1126" d="M0 0h640v480H0z"/>
        <path fill="#002868" d="M0 120h640v240H0z"/>
        <circle cx="320" cy="240" r="80" fill="#fff"/>
      </g>
    </svg>
  ),
  th: (
    <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-sm">
      <path fill="#a51931" d="M0 0h640v480H0z"/>
      <path fill="#f4f5f8" d="M0 80h640v320H0z"/>
      <path fill="#2d2a4a" d="M0 160h640v160H0z"/>
    </svg>
  ),
};

export default function FlagIcon({ code, className }: FlagIconProps) {
  return <span className={`inline-flex items-center ${className ?? ""}`}>{flags[code]}</span>;
}

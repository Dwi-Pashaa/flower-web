import React from 'react';

export default function WrappedBouquet({ className = '' }) {
  return (
    <svg
      viewBox="0 0 240 280"
      className={className}
      style={{ filter: 'drop-shadow(0 12px 24px rgba(232, 62, 140, 0.2))' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="wrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F5F5F7" />
          <stop offset="100%" stopColor="#E2E2E8" />
        </linearGradient>

        <linearGradient id="roseRed1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4B72" />
          <stop offset="100%" stopColor="#D90429" />
        </linearGradient>

        <linearGradient id="roseRed2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2E63" />
          <stop offset="100%" stopColor="#B30026" />
        </linearGradient>

        <linearGradient id="yellowFlower" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#F77F00" />
        </linearGradient>

        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="100%" stopColor="#C9184A" />
        </linearGradient>

        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient shadow */}
      <ellipse cx="120" cy="265" rx="45" ry="8" fill="rgba(0,0,0,0.06)" />

      {/* Wrapping Paper Cone (Back Layer) */}
      <polygon
        points="70,140 170,140 145,250 95,250"
        fill="url(#wrapGrad)"
        stroke="#4A4E69"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Green Foliage / Leaves */}
      <g>
        <path d="M90 120 C 70 100, 65 110, 85 130 Z" fill="#52B788" stroke="#2D6A4F" strokeWidth="1.2" />
        <path d="M150 120 C 170 100, 175 110, 155 130 Z" fill="#52B788" stroke="#2D6A4F" strokeWidth="1.2" />
        <path d="M120 90 C 110 70, 130 70, 120 95 Z" fill="#74C69D" stroke="#2D6A4F" strokeWidth="1.2" />
        <path d="M100 105 C 90 85, 110 85, 105 110 Z" fill="#52B788" stroke="#2D6A4F" strokeWidth="1.2" />
        <path d="M140 105 C 150 85, 130 85, 135 110 Z" fill="#74C69D" stroke="#2D6A4F" strokeWidth="1.2" />
      </g>

      {/* Lavender Sprigs */}
      <g fill="#9D4EDD">
        <circle cx="75" cy="115" r="3.5" />
        <circle cx="78" cy="110" r="3" />
        <circle cx="73" cy="106" r="3" />
        <circle cx="77" cy="100" r="2.5" />

        <circle cx="165" cy="115" r="3.5" />
        <circle cx="162" cy="110" r="3" />
        <circle cx="167" cy="106" r="3" />
        <circle cx="163" cy="100" r="2.5" />
      </g>

      {/* Yellow Blossom Top Center */}
      <g transform="translate(120, 95)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-11"
            rx="4.5"
            ry="9"
            fill="url(#yellowFlower)"
            stroke="#D97706"
            strokeWidth="0.8"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="7" fill="#78350F" />
        <circle cx="0" cy="0" r="4.5" fill="#451A03" />
      </g>

      {/* Red Rose Left */}
      <g transform="translate(98, 118)">
        <circle cx="0" cy="0" r="14" fill="url(#roseRed1)" stroke="#800020" strokeWidth="1.2" />
        <path d="M-6 -6 C -2 -12, 6 -12, 8 -6 C 10 2, -2 8, -6 6 Z" fill="url(#roseRed2)" stroke="#800020" strokeWidth="1" />
        <circle cx="-1" cy="0" r="5" fill="#FFE5EC" opacity="0.3" />
        <circle cx="-1" cy="0" r="3" fill="#800020" />
      </g>

      {/* Red Rose Right */}
      <g transform="translate(142, 118)">
        <circle cx="0" cy="0" r="14" fill="url(#roseRed1)" stroke="#800020" strokeWidth="1.2" />
        <path d="M-6 -6 C -2 -12, 6 -12, 8 -6 C 10 2, -2 8, -6 6 Z" fill="url(#roseRed2)" stroke="#800020" strokeWidth="1" />
        <circle cx="-1" cy="0" r="5" fill="#FFE5EC" opacity="0.3" />
        <circle cx="-1" cy="0" r="3" fill="#800020" />
      </g>

      {/* Small Tulip Accent (Top Right) */}
      <g transform="translate(138, 92) rotate(15)">
        <path d="M-6 0 C -8 -14, 0 -16, 0 -6 C 0 -16, 8 -14, 6 0 Z" fill="#F72585" stroke="#7209B7" strokeWidth="1" />
      </g>

      {/* Wrapping Paper Cone (Front Layer & Creases) */}
      <path
        d="M60 142 L120 152 L180 142 L148 248 L120 252 L92 248 Z"
        fill="url(#wrapGrad)"
        stroke="#4A4E69"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Wrapper Folds/Shading Lines */}
      <path d="M85 146 L108 249" stroke="#CCD2E3" strokeWidth="1.2" />
      <path d="M155 146 L132 249" stroke="#CCD2E3" strokeWidth="1.2" />

      {/* Tied Ribbon Around Bouquet */}
      <g>
        <path
          d="M95 190 Q120 196 145 190 Q120 200 95 190"
          fill="url(#ribbonGrad)"
          stroke="#800020"
          strokeWidth="1.2"
        />
        {/* Left bow loop */}
        <path
          d="M120 193 C 105 180, 95 200, 118 195 Z"
          fill="url(#ribbonGrad)"
          stroke="#800020"
          strokeWidth="1.2"
        />
        {/* Right bow loop */}
        <path
          d="M120 193 C 135 180, 145 200, 122 195 Z"
          fill="url(#ribbonGrad)"
          stroke="#800020"
          strokeWidth="1.2"
        />
        {/* Ribbon knot */}
        <circle cx="120" cy="194" r="4" fill="#C9184A" stroke="#800020" strokeWidth="1" />
        {/* Ribbon tails */}
        <path d="M118 196 Q 112 215 106 226" stroke="url(#ribbonGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M122 196 Q 128 215 134 226" stroke="url(#ribbonGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* "To: You" Gift Envelope (Pinned to bouquet as in Image 1) */}
      <g transform="translate(150, 172) rotate(18)">
        {/* Envelope Body */}
        <rect
          x="-18"
          y="-12"
          width="36"
          height="24"
          rx="2"
          fill="#FFFFFF"
          stroke="#2B2D42"
          strokeWidth="1.2"
        />
        {/* Envelope Flap Lines */}
        <path d="M-18 -12 L0 0 L18 -12" fill="none" stroke="#2B2D42" strokeWidth="1" />
        <path d="M-18 12 L-4 0" fill="none" stroke="#E2E2E8" strokeWidth="0.8" />
        <path d="M18 12 L4 0" fill="none" stroke="#E2E2E8" strokeWidth="0.8" />
        {/* Red Heart Seal */}
        <path
          d="M0 -1 C -1.5 -3.5 -4 -2.5 -4 -0.5 C -4 1.2 0 3.5 0 4 C 0 3.5 4 1.2 4 -0.5 C 4 -2.5 1.5 -3.5 0 -1 Z"
          fill="#E63946"
        />
        {/* "To: You" text */}
        <text
          x="0"
          y="7.5"
          textAnchor="middle"
          fontSize="5"
          fontFamily="var(--font-outfit), sans-serif"
          fontWeight="bold"
          fill="#333333"
        >
          To: You
        </text>
      </g>

      {/* Little magical sparkles */}
      <g fill="#FFD166" opacity="0.85">
        <circle cx="58" cy="110" r="1.8" />
        <circle cx="182" cy="130" r="2.2" />
        <circle cx="120" cy="65" r="2" />
        <path d="M52 95 L54 100 L59 102 L54 104 L52 109 L50 104 L45 102 L50 100 Z" fill="#FFC300" transform="scale(0.7) translate(20, 40)" />
        <path d="M190 90 L191.5 94 L195 95 L191.5 96 L190 100 L188.5 96 L185 95 L188.5 94 Z" fill="#FFC300" transform="scale(0.8) translate(40, 20)" />
      </g>
    </svg>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function SunflowerBouquet({
  onCardClick,
  onRingClick,
  onFlowerClick,
  className = ''
}) {
  return (
    <div className={`bouquet-stage ${className}`}>
      




      {/* 💐 MAIN BOUQUET SVG */}
      <motion.div
        className="bouquet-svg-wrap"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onFlowerClick}
        title="Klik bunga untuk melihat keajaibannya!"
      >
        <svg
          viewBox="0 0 500 580"
          className="bouquet-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sunflower Petal Gradient */}
            <linearGradient id="sunflowerPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF176" />
              <stop offset="35%" stopColor="#FFD54F" />
              <stop offset="80%" stopColor="#FFB300" />
              <stop offset="100%" stopColor="#FB8C00" />
            </linearGradient>

            {/* Sunflower Center Seed Head */}
            <radialGradient id="sunflowerCenterGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3E2723" />
              <stop offset="60%" stopColor="#4E342E" />
              <stop offset="85%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#2A1810" />
            </radialGradient>

            {/* Pink Hibiscus Gradients */}
            <radialGradient id="hibiscusCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C2185B" />
              <stop offset="45%" stopColor="#E91E63" />
              <stop offset="75%" stopColor="#F48FB1" />
              <stop offset="100%" stopColor="#F8BBD0" />
            </radialGradient>

            {/* Pink Wrapping Paper Gradients */}
            <linearGradient id="wrapOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCE4EC" />
              <stop offset="40%" stopColor="#F8BBD0" />
              <stop offset="100%" stopColor="#F48FB1" />
            </linearGradient>

            <linearGradient id="wrapInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F06292" />
              <stop offset="100%" stopColor="#EC407A" />
            </linearGradient>

            {/* Magenta Ribbon Gradient */}
            <linearGradient id="magentaRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E93" />
              <stop offset="50%" stopColor="#D81B60" />
              <stop offset="100%" stopColor="#AD1457" />
            </linearGradient>

            {/* Lily Petals Gradient */}
            <linearGradient id="lilyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F9FBF9" />
              <stop offset="100%" stopColor="#E8F5E9" />
            </linearGradient>
          </defs>

          {/* Ambient Ground Shadow */}
          <ellipse cx="250" cy="545" rx="100" ry="16" fill="rgba(216, 27, 96, 0.12)" filter="blur(8px)" />

          {/* ========================================================= */}
          {/* 1. BACK WRAPPER PAPER LAYER */}
          {/* ========================================================= */}
          <g>
            {/* Darker Pink Inner Collar Folds */}
            <polygon
              points="155,270 250,330 140,300"
              fill="url(#wrapInnerGrad)"
              opacity="0.95"
            />
            <polygon
              points="345,270 250,330 360,300"
              fill="url(#wrapInnerGrad)"
              opacity="0.95"
            />
            {/* Broad Paper Fan Behind Flowers */}
            <path
              d="M135 285 L165 210 L250 200 L335 210 L365 285 L250 350 Z"
              fill="#FCE4EC"
              opacity="0.6"
            />
          </g>

          {/* ========================================================= */}
          {/* 2. TOP BACKGROUND FLOWERS: SUNFLOWERS & WHITE LILIES */}
          {/* ========================================================= */}

          {/* Green Foliage Backdrop */}
          <g fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5">
            <path d="M190 220 Q 150 170 170 150 Q 200 180 190 220 Z" fill="#66BB6A" />
            <path d="M310 220 Q 350 170 330 150 Q 300 180 310 220 Z" fill="#66BB6A" />
            <path d="M250 200 Q 250 140 260 135 Q 270 160 250 200 Z" fill="#81C784" />
          </g>

          {/* 🌻 THREE SUNFLOWERS (Top Row - Centered as in Image 2) */}
          {/* Left Sunflower */}
          <g transform="translate(195, 215)">
            {/* 16 Golden Petals */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
              <path
                key={i}
                d="M0 0 C -7 -18, -10 -36, 0 -48 C 10 -36, 7 -18, 0 0 Z"
                fill="url(#sunflowerPetalGrad)"
                stroke="#E65100"
                strokeWidth="0.8"
                transform={`rotate(${angle})`}
              />
            ))}
            {/* Sunflower Center Disc */}
            <circle cx="0" cy="0" r="22" fill="url(#sunflowerCenterGrad)" stroke="#271202" strokeWidth="2" />
            <circle cx="0" cy="0" r="16" fill="none" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="0" cy="0" r="10" fill="#2E1C0C" />
            <circle cx="0" cy="0" r="5" fill="#1A0F07" />
          </g>

          {/* Center Sunflower */}
          <g transform="translate(260, 222)">
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
              <path
                key={i}
                d="M0 0 C -7 -18, -10 -36, 0 -48 C 10 -36, 7 -18, 0 0 Z"
                fill="url(#sunflowerPetalGrad)"
                stroke="#E65100"
                strokeWidth="0.8"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="22" fill="url(#sunflowerCenterGrad)" stroke="#271202" strokeWidth="2" />
            <circle cx="0" cy="0" r="16" fill="none" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="0" cy="0" r="10" fill="#2E1C0C" />
            <circle cx="0" cy="0" r="5" fill="#1A0F07" />
          </g>

          {/* Right Sunflower */}
          <g transform="translate(325, 225)">
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
              <path
                key={i}
                d="M0 0 C -7 -18, -10 -36, 0 -48 C 10 -36, 7 -18, 0 0 Z"
                fill="url(#sunflowerPetalGrad)"
                stroke="#E65100"
                strokeWidth="0.8"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="21" fill="url(#sunflowerCenterGrad)" stroke="#271202" strokeWidth="2" />
            <circle cx="0" cy="0" r="15" fill="none" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="0" cy="0" r="9" fill="#2E1C0C" />
          </g>

          {/* 🤍 ELEGANT WHITE LILIES (Left and Right Flanks) */}
          {/* Left Lily */}
          <g transform="translate(172, 225) rotate(-15)">
            {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
              <path
                key={idx}
                d="M0 0 C -6 -12, -7 -25, 0 -36 C 7 -25, 6 -12, 0 0 Z"
                fill="url(#lilyGrad)"
                stroke="#D8E2DC"
                strokeWidth="1.2"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="5.5" fill="#A7C957" />
            <path d="M-1 -1 L -3 -12 M1 -1 L 3 -12 M0 1 L 0 10" stroke="#6A994E" strokeWidth="1.2" />
            <circle cx="-3" cy="-12" r="1.5" fill="#FFB703" />
            <circle cx="3" cy="-12" r="1.5" fill="#FFB703" />
          </g>

          {/* Right Lily */}
          <g transform="translate(365, 228) rotate(18)">
            {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
              <path
                key={idx}
                d="M0 0 C -6 -12, -7 -25, 0 -36 C 7 -25, 6 -12, 0 0 Z"
                fill="url(#lilyGrad)"
                stroke="#D8E2DC"
                strokeWidth="1.2"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="5.5" fill="#A7C957" />
            <path d="M-1 -1 L -3 -12 M1 -1 L 3 -12 M0 1 L 0 10" stroke="#6A994E" strokeWidth="1.2" />
            <circle cx="-3" cy="-12" r="1.5" fill="#FFB703" />
            <circle cx="3" cy="-12" r="1.5" fill="#FFB703" />
          </g>

          {/* ========================================================= */}
          {/* 3. MID LAYER: TULIPS & LAVENDER BRANCHES */}
          {/* ========================================================= */}

          {/* Left Tulip */}
          <g transform="translate(160, 260) rotate(-22)">
            <path
              d="M0 0 C -18 -15 -18 -38 0 -45 C 18 -38 18 -15 0 0 Z"
              fill="#FF4081"
              stroke="#C2185B"
              strokeWidth="1.5"
            />
            <path
              d="M-10 -15 C -22 -30 -12 -42 -2 -44 C -6 -30 -4 -20 -10 -15 Z"
              fill="#E91E63"
            />
            <path
              d="M10 -15 C 22 -30 12 -42 2 -44 C 6 -30 4 -20 10 -15 Z"
              fill="#F50057"
            />
          </g>

          {/* Right Tulip */}
          <g transform="translate(372, 265) rotate(22)">
            <path
              d="M0 0 C -18 -15 -18 -38 0 -45 C 18 -38 18 -15 0 0 Z"
              fill="#FF4081"
              stroke="#C2185B"
              strokeWidth="1.5"
            />
            <path
              d="M-10 -15 C -22 -30 -12 -42 -2 -44 C -6 -30 -4 -20 -10 -15 Z"
              fill="#E91E63"
            />
            <path
              d="M10 -15 C 22 -30 12 -42 2 -44 C 6 -30 4 -20 10 -15 Z"
              fill="#F50057"
            />
          </g>

          {/* Lavender Sprigs */}
          <g>
            {/* Left Lavender */}
            <g transform="translate(202, 280) rotate(-10)">
              <line x1="0" y1="0" x2="0" y2="-75" stroke="#4A7C59" strokeWidth="2.5" />
              {[-15, -25, -35, -45, -55, -65, -73].map((y, idx) => (
                <g key={idx}>
                  <ellipse cx="-4.5" cy={y} rx="4.5" ry="3.5" fill="#9C27B0" transform={`rotate(-20 -4.5 ${y})`} />
                  <ellipse cx="4.5" cy={y} rx="4.5" ry="3.5" fill="#BA68C8" transform={`rotate(20 4.5 ${y})`} />
                  <ellipse cx="0" cy={y - 2} rx="3" ry="3.5" fill="#7B1FA2" />
                </g>
              ))}
            </g>

            {/* Right Lavender */}
            <g transform="translate(325, 282) rotate(10)">
              <line x1="0" y1="0" x2="0" y2="-75" stroke="#4A7C59" strokeWidth="2.5" />
              {[-15, -25, -35, -45, -55, -65, -73].map((y, idx) => (
                <g key={idx}>
                  <ellipse cx="-4.5" cy={y} rx="4.5" ry="3.5" fill="#9C27B0" transform={`rotate(-20 -4.5 ${y})`} />
                  <ellipse cx="4.5" cy={y} rx="4.5" ry="3.5" fill="#BA68C8" transform={`rotate(20 4.5 ${y})`} />
                  <ellipse cx="0" cy={y - 2} rx="3" ry="3.5" fill="#7B1FA2" />
                </g>
              ))}
            </g>
          </g>

          {/* ========================================================= */}
          {/* 4. CENTERPIECE: BIG BEAUTIFUL PINK HIBISCUS */}
          {/* ========================================================= */}
          <g transform="translate(262, 290)">
            {/* 5 Petals of Pink Hibiscus */}
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <path
                key={idx}
                d="M0 0 C -25 -20 -38 -55 0 -68 C 38 -55 25 -20 0 0 Z"
                fill="url(#hibiscusCenter)"
                stroke="#C2185B"
                strokeWidth="1.2"
                transform={`rotate(${angle})`}
              />
            ))}
            {/* Inner Petal Veins */}
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <path
                key={`vein-${idx}`}
                d="M0 0 Q -8 -30 0 -52 M0 0 Q 8 -30 0 -52"
                stroke="#AD1457"
                strokeWidth="0.8"
                opacity="0.6"
                fill="none"
                transform={`rotate(${angle})`}
              />
            ))}

            {/* Center Eye */}
            <circle cx="0" cy="0" r="16" fill="#880E4F" />
            <circle cx="0" cy="0" r="11" fill="#AD1457" />

            {/* Hibiscus Stamen */}
            <path
              d="M0 0 Q 14 -22 8 -42"
              fill="none"
              stroke="#FF80AB"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Stamen Pollen */}
            <circle cx="8" cy="-42" r="3.5" fill="#FFD600" stroke="#FF6D00" strokeWidth="0.8" />
            <circle cx="12" cy="-35" r="2.2" fill="#FFEA00" />
            <circle cx="5" cy="-31" r="2.2" fill="#FFEA00" />
            <circle cx="10" cy="-24" r="2" fill="#FFEA00" />
          </g>

          {/* Side Blossoms */}
          <g transform="translate(178, 315) rotate(-28)">
            {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
              <ellipse
                key={idx}
                cx="0"
                cy="-20"
                rx="7"
                ry="18"
                fill="#FF80AB"
                stroke="#C2185B"
                strokeWidth="0.8"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="6" fill="#880E4F" />
          </g>

          <g transform="translate(345, 318) rotate(28)">
            {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
              <ellipse
                key={idx}
                cx="0"
                cy="-20"
                rx="7"
                ry="18"
                fill="#FF80AB"
                stroke="#C2185B"
                strokeWidth="0.8"
                transform={`rotate(${angle})`}
              />
            ))}
            <circle cx="0" cy="0" r="6" fill="#880E4F" />
          </g>

          {/* ========================================================= */}
          {/* 5. LOWER FLORAL CLUSTERS: BLUE FORGET-ME-NOTS & CHERRY BLOSSOMS */}
          {/* ========================================================= */}

          {/* Blue Forget-Me-Nots */}
          <g fill="#2979FF" stroke="#1565C0" strokeWidth="0.8">
            {[
              { x: 215, y: 325 }, { x: 232, y: 320 }, { x: 248, y: 328 },
              { x: 265, y: 322 }, { x: 282, y: 326 }, { x: 298, y: 321 }
            ].map((pos, idx) => (
              <g key={`blue-${idx}`} transform={`translate(${pos.x}, ${pos.y})`}>
                {[0, 72, 144, 216, 288].map((a, k) => (
                  <circle
                    key={k}
                    cx="0"
                    cy="-6"
                    r="4"
                    fill="#40C4FF"
                    stroke="#0091EA"
                    strokeWidth="0.6"
                    transform={`rotate(${a})`}
                  />
                ))}
                <circle cx="0" cy="0" r="2.8" fill="#FFD600" stroke="#FF6D00" strokeWidth="0.5" />
              </g>
            ))}
          </g>

          {/* Cute Pink Petal Flowers */}
          <g>
            {[
              { x: 210, y: 345, s: 1 },
              { x: 238, y: 350, s: 1.1 },
              { x: 268, y: 348, s: 1.1 },
              { x: 295, y: 350, s: 1 },
              { x: 320, y: 344, s: 0.95 }
            ].map((item, idx) => (
              <g key={`pinkf-${idx}`} transform={`translate(${item.x}, ${item.y}) scale(${item.s})`}>
                {[0, 72, 144, 216, 288].map((a, k) => (
                  <ellipse
                    key={k}
                    cx="0"
                    cy="-8"
                    rx="5"
                    ry="8"
                    fill="#FCE4EC"
                    stroke="#F48FB1"
                    strokeWidth="0.8"
                    transform={`rotate(${a})`}
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="#FF80AB" />
                <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
              </g>
            ))}
          </g>

          {/* ========================================================= */}
          {/* 6. FRONT BOUQUET WRAPPER & MAGENTA RIBBON */}
          {/* ========================================================= */}

          {/* Outer Wrapping Paper Cone */}
          <g>
            {/* Main Cone Body */}
            <path
              d="M170 348 L220 520 L280 520 L330 348 Z"
              fill="url(#wrapOuterGrad)"
              stroke="#F48FB1"
              strokeWidth="2"
            />
            <path d="M210 360 L235 520" stroke="#F06292" strokeWidth="1.5" opacity="0.6" />
            <path d="M290 360 L265 520" stroke="#F06292" strokeWidth="1.5" opacity="0.6" />

            {/* Folded Top Triangular Flaps */}
            <polygon
              points="155,342 250,380 185,395"
              fill="url(#wrapOuterGrad)"
              stroke="#F06292"
              strokeWidth="1.5"
            />
            <polygon
              points="345,342 250,380 315,395"
              fill="url(#wrapOuterGrad)"
              stroke="#F06292"
              strokeWidth="1.5"
            />
            <polygon
              points="185,395 250,380 315,395 250,420"
              fill="#F8BBD0"
              stroke="#F06292"
              strokeWidth="1.5"
            />

            {/* White Daisy Brooch */}
            <g transform="translate(198, 382)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, k) => (
                <circle
                  key={k}
                  cx="0"
                  cy="-7"
                  r="3.5"
                  fill="#FFFFFF"
                  stroke="#E0E0E0"
                  strokeWidth="0.6"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="4.2" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="0.8" />
            </g>
          </g>

          {/* Ribbon Band & Double Bow Knot */}
          <g id="bouquetRibbon">
            <path
              d="M195 408 Q 250 422 305 408"
              fill="none"
              stroke="url(#magentaRibbon)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Left Bow Loop */}
            <path
              d="M250 412 C 215 390 195 410 230 424 Z"
              fill="url(#magentaRibbon)"
              stroke="#880E4F"
              strokeWidth="1.2"
            />
            <path
              d="M245 413 C 225 400 215 412 235 419 Z"
              fill="#F06292"
              opacity="0.4"
            />

            {/* Right Bow Loop */}
            <path
              d="M250 412 C 285 390 305 410 270 424 Z"
              fill="url(#magentaRibbon)"
              stroke="#880E4F"
              strokeWidth="1.2"
            />
            <path
              d="M255 413 C 275 400 285 412 265 419 Z"
              fill="#F06292"
              opacity="0.4"
            />

            {/* Central Ribbon Knot */}
            <circle cx="250" cy="416" r="7.5" fill="#C2185B" stroke="#880E4F" strokeWidth="1.5" />
            <circle cx="248.5" cy="414.5" r="2.5" fill="#FF80AB" opacity="0.6" />

            {/* Flowing Ribbon Tails */}
            <path
              d="M246 422 Q 235 460 215 515"
              fill="none"
              stroke="url(#magentaRibbon)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M254 422 Q 265 460 285 515"
              fill="none"
              stroke="url(#magentaRibbon)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Golden Sparkles */}
          <g fill="#FFD700">
            <circle cx="130" cy="200" r="2.5" opacity="0.8" />
            <circle cx="380" cy="190" r="3" opacity="0.75" />
            <circle cx="250" cy="165" r="2" opacity="0.9" />
            <polygon points="140,240 142,246 148,248 142,250 140,256 138,250 132,248 138,246" fill="#FFCA28" opacity="0.8" />
            <polygon points="360,250 362,255 367,257 362,259 360,264 358,259 353,257 358,255" fill="#FFCA28" opacity="0.8" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

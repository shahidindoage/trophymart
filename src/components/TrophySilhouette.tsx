import React from 'react';

interface TrophySilhouetteProps {
  silhouetteType: 'obelisk' | 'cup' | 'plaque' | 'flame' | 'star' | 'medal';
  primaryColor?: string;
  recipientName?: string;
  awardTitle?: string;
  organization?: string;
  plateFinish?: string;
  className?: string;
}

export const TrophySilhouette: React.FC<TrophySilhouetteProps> = ({
  silhouetteType,
  recipientName,
  awardTitle,
  organization,
  plateFinish = 'gold',
  className = 'w-full h-full'
}) => {
  // Plate finish styling
  const getPlateGradient = () => {
    switch (plateFinish) {
      case 'chrome':
        return {
          fill: 'url(#silverPlateGrad)',
          textFill: '#0E233E',
          border: '#D1D5DB'
        };
      case 'rose-gold':
        return {
          fill: 'url(#roseGoldPlateGrad)',
          textFill: '#4C1D24',
          border: '#F43F5E'
        };
      case 'matte-black':
        return {
          fill: '#18181B',
          textFill: '#F4F1EA',
          border: '#3F3F46'
        };
      case 'gold':
      default:
        return {
          fill: 'url(#goldPlateGrad)',
          textFill: '#2E1E05',
          border: '#C59B27'
        };
    }
  };

  const plateStyle = getPlateGradient();

  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 480"
        className="w-full h-full max-h-[460px] drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Crystal gradients */}
          <linearGradient id="crystalFacetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#E2E8F0" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#CBD5E1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="crystalFacetGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="crystalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
          </linearGradient>

          {/* Gold metallic gradients */}
          <linearGradient id="goldPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="25%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FEF3C7" />
            <stop offset="75%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="goldCupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="18%" stopColor="#FDE68A" />
            <stop offset="42%" stopColor="#FFFBEB" />
            <stop offset="68%" stopColor="#F59E0B" />
            <stop offset="90%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Silver metallic gradient */}
          <linearGradient id="silverPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="35%" stopColor="#CBD5E1" />
            <stop offset="60%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Rose Gold gradient */}
          <linearGradient id="roseGoldPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE4E6" />
            <stop offset="35%" stopColor="#FDA4AF" />
            <stop offset="65%" stopColor="#FFF1F2" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>

          {/* Obsidian Base Gradient */}
          <linearGradient id="obsidianGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B131F" />
            <stop offset="30%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Walnut wood gradient */}
          <linearGradient id="walnutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="45%" stopColor="#78350F" />
            <stop offset="70%" stopColor="#3E1906" />
            <stop offset="100%" stopColor="#270F04" />
          </linearGradient>
        </defs>

        {/* Ambient shadow underneath plinth */}
        <ellipse cx="200" cy="450" rx="140" ry="12" fill="#0E233E" fillOpacity="0.16" filter="blur(6px)" />

        {/* Dynamic Trophy Silhouette Renderings */}
        {silhouetteType === 'obelisk' && (
          <g id="crystal-obelisk">
            {/* Base */}
            <path d="M110 395 L290 395 L275 435 L125 435 Z" fill="url(#obsidianGrad)" />
            <rect x="120" y="435" width="160" height="15" rx="2" fill="#020617" />
            <line x1="125" y1="396" x2="275" y2="396" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />

            {/* Faceted Crystal Obelisk */}
            {/* Left facet */}
            <path d="M200 45 L130 395 L200 395 Z" fill="url(#crystalFacetGrad1)" stroke="#CBD5E1" strokeWidth="1" />
            {/* Right facet */}
            <path d="M200 45 L270 395 L200 395 Z" fill="url(#crystalFacetGrad2)" stroke="#CBD5E1" strokeWidth="1" />
            {/* Center diamond spine reflection */}
            <path d="M200 45 L175 220 L200 395 L225 220 Z" fill="#FFFFFF" fillOpacity="0.25" />
            <line x1="200" y1="45" x2="200" y2="395" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* Prismatic edge highlight */}
            <path d="M198 48 L133 392" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.9" />
          </g>
        )}

        {silhouetteType === 'cup' && (
          <g id="championship-cup">
            {/* Multi-tiered stepped plinth */}
            <rect x="135" y="420" width="130" height="24" rx="2" fill="url(#obsidianGrad)" />
            <rect x="145" y="398" width="110" height="22" rx="1" fill="#1E293B" stroke="#0E233E" strokeWidth="1" />
            <rect x="155" y="378" width="90" height="20" rx="1" fill="url(#goldCupGrad)" />

            {/* Cup stem & knop */}
            <path d="M190 320 C190 350 178 370 178 378 L222 378 C222 370 210 350 210 320 Z" fill="url(#goldCupGrad)" />
            <ellipse cx="200" cy="342" rx="18" ry="6" fill="#FDE68A" />

            {/* Grand Handles */}
            <path
              d="M135 150 C80 160 70 260 145 285 C130 255 125 180 150 165 Z"
              fill="url(#goldCupGrad)"
              stroke="#B45309"
              strokeWidth="1.5"
            />
            <path
              d="M265 150 C320 160 330 260 255 285 C270 255 275 180 250 165 Z"
              fill="url(#goldCupGrad)"
              stroke="#B45309"
              strokeWidth="1.5"
            />

            {/* Chalice Bowl */}
            <path
              d="M135 130 C135 290 265 290 265 130 Z"
              fill="url(#goldCupGrad)"
              stroke="#92400E"
              strokeWidth="1"
            />
            {/* Top rim ellipse */}
            <ellipse cx="200" cy="130" rx="65" ry="16" fill="url(#goldPlateGrad)" stroke="#B45309" strokeWidth="1.5" />
            <ellipse cx="200" cy="130" rx="58" ry="12" fill="#78350F" />
            
            {/* Embossed filigree band */}
            <path d="M142 165 C165 180 235 180 258 165 L255 180 C235 195 165 195 145 180 Z" fill="#FEF3C7" fillOpacity="0.7" />
            {/* Mirror light specular */}
            <path d="M185 140 C185 240 195 270 198 270 C194 270 175 240 175 140 Z" fill="#FFFFFF" fillOpacity="0.4" />
          </g>
        )}

        {silhouetteType === 'plaque' && (
          <g id="executive-plaque">
            {/* Lacquered Walnut Wood Backplate */}
            <rect x="80" y="50" width="240" height="340" rx="8" fill="url(#walnutGrad)" stroke="#270F04" strokeWidth="2" />
            <rect x="90" y="60" width="220" height="320" rx="6" fill="#2E1307" stroke="#78350F" strokeWidth="1" />

            {/* Floating Glass Plate suspended on Stand-offs */}
            <rect x="105" y="75" width="190" height="290" rx="4" fill="url(#crystalFacetGrad1)" fillOpacity="0.65" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* 4 Architectural Brass Standoff Screws */}
            <circle cx="118" cy="88" r="6" fill="url(#goldPlateGrad)" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="282" cy="88" r="6" fill="url(#goldPlateGrad)" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="118" cy="352" r="6" fill="url(#goldPlateGrad)" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="282" cy="352" r="6" fill="url(#goldPlateGrad)" stroke="#78350F" strokeWidth="0.8" />

            {/* Embedded inner gold foil heraldic crest border */}
            <rect x="122" y="105" width="156" height="230" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="1" strokeDasharray="6 3" />
            {/* Plaque display stand feet */}
            <path d="M120 390 L130 435 L170 435 L160 390 Z" fill="url(#goldCupGrad)" />
            <path d="M280 390 L270 435 L230 435 L240 390 Z" fill="url(#goldCupGrad)" />
          </g>
        )}

        {silhouetteType === 'star' && (
          <g id="star-excellence">
            {/* Base Pedestal */}
            <path d="M125 400 L275 400 L260 440 L140 440 Z" fill="url(#obsidianGrad)" />
            {/* Crystal Prism Column */}
            <path d="M165 240 L235 240 L245 400 L155 400 Z" fill="url(#crystalFacetGrad1)" stroke="#CBD5E1" strokeWidth="1" />
            {/* Red dichroic reflection slice (signature Trophy Mart brand red) */}
            <path d="M165 240 L200 400 L155 400 Z" fill="#C5222A" fillOpacity="0.35" />

            {/* Majestic Soaring 5-Point Star */}
            <g transform="translate(200, 150)">
              {/* Star facets */}
              <polygon points="0,-85 24,-26 85,-26 36,11 55,70 0,33 -55,70 -36,11 -85,-26 -24,-26" fill="url(#goldCupGrad)" stroke="#B45309" strokeWidth="1.5" />
              {/* Internal faceted dimensional lines */}
              <line x1="0" y1="-85" x2="0" y2="33" stroke="#FEF3C7" strokeWidth="1.5" />
              <line x1="85" y1="-26" x2="-36" y2="11" stroke="#D97706" strokeWidth="1" strokeOpacity="0.7" />
              <line x1="-85" y1="-26" x2="36" y2="11" stroke="#FEF3C7" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="55" y1="70" x2="-24" y2="-26" stroke="#D97706" strokeWidth="1" />
              <line x1="-55" y1="70" x2="24" y2="-26" stroke="#FEF3C7" strokeWidth="1" />
            </g>
          </g>
        )}

        {silhouetteType === 'flame' && (
          <g id="sculptural-flame">
            {/* Dark midnight tiered pedestal */}
            <rect x="120" y="415" width="160" height="25" rx="2" fill="url(#obsidianGrad)" />
            <path d="M140 375 L260 375 L250 415 L150 415 Z" fill="#1E293B" stroke="#0E233E" strokeWidth="1" />

            {/* Smoked glass cylinder */}
            <rect x="165" y="310" width="70" height="65" rx="3" fill="url(#crystalFacetGrad2)" stroke="#94A3B8" strokeWidth="1" />
            <line x1="200" y1="310" x2="200" y2="375" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1.5" />

            {/* Spiraling Eternal Flame */}
            <path
              d="M200 40 C170 120 125 170 135 230 C145 280 200 310 200 310 C200 310 255 280 265 230 C275 170 230 120 200 40 Z"
              fill="url(#goldCupGrad)"
              stroke="#B45309"
              strokeWidth="1.5"
            />
            {/* Inner flame swirl */}
            <path
              d="M200 95 C185 150 160 190 170 240 C178 275 200 290 200 290 C200 290 222 275 230 240 C240 190 215 150 200 95 Z"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="1"
            />
            <path d="M195 120 C185 160 180 200 185 240" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.75" />
          </g>
        )}

        {silhouetteType === 'medal' && (
          <g id="crown-medallion">
            {/* Neck Ribbon with Trophy Mart Signature Blue and Red Stripe */}
            <path d="M145 20 L185 220 L200 220 L165 20 Z" fill="#0E233E" />
            <path d="M165 20 L195 220 L205 220 L175 20 Z" fill="#C5222A" />
            <path d="M175 20 L205 220 L215 220 L185 20 Z" fill="#FAF9F5" />
            <path d="M255 20 L215 220 L200 220 L235 20 Z" fill="#0E233E" />
            <path d="M235 20 L205 220 L195 220 L225 20 Z" fill="#C5222A" />

            {/* Ribbon suspension jump-ring */}
            <rect x="188" y="215" width="24" height="12" rx="3" fill="url(#goldCupGrad)" stroke="#78350F" strokeWidth="1" />

            {/* Medallion Body */}
            <circle cx="200" cy="310" r="95" fill="url(#goldCupGrad)" stroke="#92400E" strokeWidth="3" />
            {/* Outer Laurel border ring */}
            <circle cx="200" cy="310" r="82" fill="none" stroke="#FEF3C7" strokeWidth="2.5" strokeDasharray="8 4" />
            {/* Recessed medal center */}
            <circle cx="200" cy="310" r="68" fill="url(#goldPlateGrad)" stroke="#B45309" strokeWidth="1.5" />
            {/* 3D Crest Star in Center */}
            <polygon points="200,270 208,295 235,295 213,311 221,335 200,320 179,335 187,311 165,295 192,295" fill="#FEF3C7" stroke="#78350F" strokeWidth="1" />
          </g>
        )}

        {/* Dynamic Engraving Plaque (Mounted at Base or Center) */}
        {silhouetteType !== 'medal' && (
          <g id="engraved-plaque" className="transition-all duration-300">
            {/* Plaque Metallic Plate */}
            <rect
              x={silhouetteType === 'plaque' ? 120 : 135}
              y={silhouetteType === 'plaque' ? 175 : 405}
              width={silhouetteType === 'plaque' ? 160 : 130}
              height={silhouetteType === 'plaque' ? 95 : 32}
              rx="2"
              fill={plateStyle.fill}
              stroke={plateStyle.border}
              strokeWidth="1"
            />

            {/* Simulated Plaque Corner Screws */}
            <circle cx={silhouetteType === 'plaque' ? 126 : 141} cy={silhouetteType === 'plaque' ? 181 : 410} r="1.5" fill="#000000" fillOpacity="0.4" />
            <circle cx={silhouetteType === 'plaque' ? 274 : 259} cy={silhouetteType === 'plaque' ? 181 : 410} r="1.5" fill="#000000" fillOpacity="0.4" />
            <circle cx={silhouetteType === 'plaque' ? 126 : 141} cy={silhouetteType === 'plaque' ? 264 : 432} r="1.5" fill="#000000" fillOpacity="0.4" />
            <circle cx={silhouetteType === 'plaque' ? 274 : 259} cy={silhouetteType === 'plaque' ? 264 : 432} r="1.5" fill="#000000" fillOpacity="0.4" />

            {/* Laser Engraved Typography on Plaque */}
            {silhouetteType === 'plaque' ? (
              <g className="text-center">
                <text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="8.5"
                  letterSpacing="1.2"
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="700"
                >
                  {organization ? organization.toUpperCase() : 'TROPHY MART HONOURS'}
                </text>
                <text
                  x="200"
                  y="222"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="13"
                  fontFamily="'Cormorant Garamond', serif"
                  fontWeight="700"
                >
                  {recipientName || 'Recipient Name'}
                </text>
                <text
                  x="200"
                  y="240"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="8"
                  letterSpacing="0.8"
                  fontFamily="'Manrope', sans-serif"
                >
                  {awardTitle || 'Corporate Excellence & Leadership'}
                </text>
                <line x1="150" y1="248" x2="250" y2="248" stroke={plateStyle.textFill} strokeOpacity="0.4" strokeWidth="0.5" />
                <text
                  x="200"
                  y="258"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="7"
                  fontFamily="'Manrope', sans-serif"
                  opacity="0.85"
                >
                  ANNUAL CITATION 2026
                </text>
              </g>
            ) : (
              <g>
                <text
                  x="200"
                  y="417"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="7"
                  letterSpacing="0.6"
                  fontFamily="'Manrope', sans-serif"
                  fontWeight="700"
                >
                  {recipientName ? recipientName.slice(0, 18) : 'RECIPIENT NAME'}
                </text>
                <text
                  x="200"
                  y="428"
                  textAnchor="middle"
                  fill={plateStyle.textFill}
                  fontSize="5.5"
                  letterSpacing="0.4"
                  fontFamily="'Manrope', sans-serif"
                >
                  {awardTitle ? awardTitle.slice(0, 22) : 'AWARD OF EXCELLENCE'}
                </text>
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};

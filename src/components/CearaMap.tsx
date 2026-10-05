import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/utils';
import { MapPin, ArrowRight } from 'lucide-react';

interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  labelAlign: 'left' | 'right';
  labelOffset: { x: number; y: number };
  region: string;
  path: string; // Bezier curve from Fortaleza (280, 115) to this city
  delay: string; // Animation delay for the traveling pulse
  duration: string; // Duration of pulse animation
}

const CITIES: City[] = [
  {
    id: 'sobral',
    name: 'Sobral',
    x: 165,
    y: 115,
    labelAlign: 'right',
    labelOffset: { x: 12, y: 4 },
    region: 'Região Norte • Sobral & Ibiapaba',
    path: 'M 280,115 Q 215,95 165,115',
    delay: '0s',
    duration: '2.4s'
  },
  {
    id: 'crateus',
    name: 'Crateús',
    x: 145,
    y: 222,
    labelAlign: 'right',
    labelOffset: { x: 12, y: 4 },
    region: 'Sertão de Crateús • Inhamuns',
    path: 'M 280,115 Q 190,145 145,222',
    delay: '0.6s',
    duration: '2.8s'
  },
  {
    id: 'quixada',
    name: 'Quixadá',
    x: 252,
    y: 206,
    labelAlign: 'left',
    labelOffset: { x: -12, y: 4 },
    region: 'Sertão Central • Monólitos',
    path: 'M 280,115 Q 275,160 252,206',
    delay: '1.2s',
    duration: '2.2s'
  },
  {
    id: 'limoeiro',
    name: 'Limoeiro do Norte',
    x: 312,
    y: 218,
    labelAlign: 'right',
    labelOffset: { x: 12, y: 4 },
    region: 'Vale do Jaguaribe & Litoral Leste',
    path: 'M 280,115 Q 312,165 312,218',
    delay: '1.8s',
    duration: '2.5s'
  },
  {
    id: 'iguatu',
    name: 'Iguatu',
    x: 235,
    y: 306,
    labelAlign: 'right',
    labelOffset: { x: 12, y: 4 },
    region: 'Centro-Sul Cearense',
    path: 'M 280,115 Q 285,210 235,306',
    delay: '0.3s',
    duration: '3.0s'
  },
  {
    id: 'juazeiro',
    name: 'Juazeiro do Norte',
    x: 235,
    y: 368,
    labelAlign: 'right',
    labelOffset: { x: 12, y: 4 },
    region: 'Região do Cariri • Sul Cearense',
    path: 'M 280,115 Q 295,245 235,368',
    delay: '0.9s',
    duration: '3.2s'
  }
];

export const CearaMap: React.FC = () => {
  const [activeCity, setActiveCity] = useState<City | null>(null);

  // Fortaleza Hub Coordinates
  const HUB = { x: 280, y: 115, name: 'Fortaleza' };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none">
      {/* Subtle background ambient glow behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />

      {/* SVG Interactive Map (Without Card Borders or Container Box) */}
      <div className="relative w-full aspect-square max-h-[460px] flex items-center justify-center">
        <svg
          viewBox="0 0 500 480"
          className="w-full h-full overflow-visible select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          aria-label="Mapa do Ceará com rotas de atendimento"
        >
            <defs>
              {/* Outer Glow filter for glowing dots and rings */}
              <filter id="ceara-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Intense particle blur */}
              <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Map background fill gradient */}
              <radialGradient id="ceara-fill" cx="56%" cy="24%" r="65%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.10" />
                <stop offset="60%" stopColor="#14141B" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0B0B0E" stopOpacity="0.80" />
              </radialGradient>
            </defs>

            {/* Stylized Polygon Outline of the State of Ceará */}
            <path
              d="M 94,65 L 152,52 L 218,72 L 280,115 L 330,155 L 362,188 L 398,235 L 335,315 L 280,375 L 252,414 L 185,385 L 155,355 L 120,252 L 94,102 Z"
              fill="url(#ceara-fill)"
              stroke="#C5A059"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              className="transition-all duration-300"
            />

            {/* Subtle inner accent glow lines inside Ceará */}
            <path
              d="M 152,52 L 218,72 L 280,115 L 330,155 L 362,188"
              fill="none"
              stroke="#ECC880"
              strokeWidth="1.8"
              strokeOpacity="0.4"
            />

            {/* Connection Arcs from Fortaleza to each city */}
            {CITIES.map((city) => {
              const isSelected = activeCity?.id === city.id;
              return (
                <g key={`arc-${city.id}`}>
                  {/* Base Curved Arc */}
                  <path
                    d={city.path}
                    fill="none"
                    stroke={isSelected ? '#F8E7BE' : '#C5A059'}
                    strokeWidth={isSelected ? '2' : '1'}
                    strokeOpacity={isSelected ? '0.95' : '0.45'}
                    className="transition-all duration-300"
                  />

                  {/* Traveling Light Pulse (Glowing Packet) */}
                  <circle r="3" fill="#FFFFFF" filter="url(#particle-glow)">
                    <animateMotion
                      path={city.path}
                      dur={city.duration}
                      begin={city.delay}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="5" fill="#E6C878" opacity="0.6" filter="url(#particle-glow)">
                    <animateMotion
                      path={city.path}
                      dur={city.duration}
                      begin={city.delay}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* Destination Cities Nodes */}
            {CITIES.map((city) => {
              const isSelected = activeCity?.id === city.id;
              return (
                <g
                  key={`city-${city.id}`}
                  className="cursor-pointer group/node"
                  onMouseEnter={() => setActiveCity(city)}
                  onMouseLeave={() => setActiveCity(null)}
                  onClick={() => {
                    const url = getWhatsAppUrl(
                      `Olá, Dra. Samara e Dra. Maria! Moro em ${city.name} (ou região) no Ceará e gostaria de uma orientação jurídica sobre o meu caso.`
                    );
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {/* Concentric Radar Ping Ring */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="9"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="1"
                    strokeOpacity={isSelected ? '0.9' : '0.6'}
                  >
                    <animate
                      attributeName="r"
                      from="8"
                      to="16"
                      dur="2.5s"
                      begin={city.delay}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.8"
                      to="0"
                      dur="2.5s"
                      begin={city.delay}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Static Outer Target Ring */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isSelected ? 10 : 8.5}
                    fill="none"
                    stroke={isSelected ? '#F8E7BE' : '#C5A059'}
                    strokeWidth={isSelected ? 1.5 : 1}
                    strokeOpacity={isSelected ? 1 : 0.8}
                    className="transition-all duration-300"
                  />

                  {/* Center Golden Dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isSelected ? 4 : 3.2}
                    fill={isSelected ? '#FFFFFF' : '#E6C878'}
                    filter="url(#ceara-glow)"
                    className="transition-all duration-300"
                  />

                  {/* City Label */}
                  <text
                    x={city.x + city.labelOffset.x}
                    y={city.y + city.labelOffset.y}
                    textAnchor={city.labelAlign === 'left' ? 'end' : 'start'}
                    fill={isSelected ? '#FFFFFF' : '#E5E7EB'}
                    fontSize="11"
                    fontWeight={isSelected ? '700' : '600'}
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    className="tracking-tight transition-all duration-200 select-none drop-shadow-md"
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}

            {/* Fortaleza Hub (Headquarters) */}
            <g
              className="cursor-pointer group/hub"
              onMouseEnter={() =>
                setActiveCity({
                  id: 'fortaleza',
                  name: 'Fortaleza',
                  x: HUB.x,
                  y: HUB.y,
                  labelAlign: 'right',
                  labelOffset: { x: 22, y: 4 },
                  region: 'Sede Própria na Parquelândia • Atendimento Central',
                  path: '',
                  delay: '0s',
                  duration: '0s'
                })
              }
              onMouseLeave={() => setActiveCity(null)}
              onClick={() => {
                const url = getWhatsAppUrl(
                  'Olá, Dra. Samara e Dra. Maria! Gostaria de agendar um atendimento na sede de Fortaleza ou tirar dúvidas sobre meu caso.'
                );
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
            >
              {/* Radar Wave Ping from Fortaleza */}
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r="18"
                fill="none"
                stroke="#C5A059"
                strokeWidth="1.2"
              >
                <animate
                  attributeName="r"
                  from="16"
                  to="30"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.75"
                  to="0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Large Static Concentric Ring */}
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r="18"
                fill="rgba(197, 160, 89, 0.12)"
                stroke="#C5A059"
                strokeWidth="1.5"
                filter="url(#ceara-glow)"
              />

              {/* Diamond Center Icon (◆ Rotated 45deg) */}
              <rect
                x={HUB.x - 6}
                y={HUB.y - 6}
                width="12"
                height="12"
                transform={`rotate(45, ${HUB.x}, ${HUB.y})`}
                fill="#E6C878"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                filter="url(#ceara-glow)"
              />

              {/* Fortaleza Label */}
              <text
                x={HUB.x + 24}
                y={HUB.y + 4}
                fill="#FFFFFF"
                fontSize="12.5"
                fontWeight="800"
                fontFamily="Plus Jakarta Sans, sans-serif"
                className="tracking-tight select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              >
                Fortaleza
              </text>
            </g>
          </svg>
      </div>

      {/* Dynamic Interactive City Information Toast (Subtle pill, only when city active or clean hint) */}
      <div className="mt-3 min-h-[30px] flex items-center justify-center text-center">
        {activeCity && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16161D]/90 border border-gold-500/40 text-gold-300 text-xs font-semibold animate-fade-in-up shadow-lg backdrop-blur-md">
            <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
            <span>{activeCity.name}: {activeCity.region}</span>
            <ArrowRight className="w-3 h-3 text-gold-400 shrink-0 ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};

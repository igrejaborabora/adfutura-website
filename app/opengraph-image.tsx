import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'adFutura | Intelligence for the AI Age';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#030812',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Glow Effects (Simulating the DynamicBackground) */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            background: 'rgba(30, 111, 217, 0.4)',
            filter: 'blur(150px)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            left: -200,
            width: 800,
            height: 800,
            background: 'rgba(0, 200, 255, 0.2)',
            filter: 'blur(150px)',
            borderRadius: '50%',
          }}
        />

        {/* Core Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {/* Mock Logo in pure Flexbox because SVG tags inside ImageResponse sometimes behave differently depending on the font/shapes */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.05em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ad<span style={{ color: '#1E6FD9' }}>Futura</span>
          </div>

          <div
            style={{
              fontSize: 40,
              color: '#888888',
              marginTop: 20,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Intelligence for the AI Age
          </div>
        </div>

        {/* Decorative Grid or Tech Element */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            fontSize: 20,
            color: '#00C8FF',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Protocol v2.0
        </div>
      </div>
    ),
    { ...size }
  );
}

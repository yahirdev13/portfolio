import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          borderRadius: 8,
          background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
          color: 'white',
          fontSize: 16,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
        }}
      >
        YD
      </div>
    ),
    { width: 32, height: 32 }
  );
}

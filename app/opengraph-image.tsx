import { ImageResponse } from 'next/og'
import { Person } from '@/config/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 96,
          background: '#0c0c0f',
          color: '#ececef',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#2dd4bf', fontSize: 28, letterSpacing: 4 }}>
          {Person.alias.toUpperCase()}
        </span>
        <span style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>
          {Person.name}
        </span>
        <span style={{ fontSize: 32, color: '#8b8b9a', marginTop: 16 }}>
          {Person.role} &middot; {Person.tagline}
        </span>
      </div>
    ),
    { ...size }
  )
}

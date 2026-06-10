'use client'

export default function Home() {
  if (typeof window !== 'undefined') {
    window.location.href = '/combined.html'
  }
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Malgun Gothic, Apple SD Gothic Neo, sans-serif'
    }}>
      <div>페이지를 로드하는 중...</div>
    </div>
  )
}

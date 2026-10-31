import React from 'react'

const BRAND = 'Maria Rivera'

// Misma paleta de helados que el Main y el Header
const colors = {
  vanilla: '#fff8ec',
  cone: '#f6e3c3',
  chocolate: '#4a2c22',
  muted: '#6b5248', // más oscuro para cumplir el contraste de accesibilidad
}

const serif = { fontFamily: "Georgia, 'Times New Roman', serif", color: colors.chocolate }

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.vanilla, borderTop: `1px solid ${colors.cone}` }}>
      <div className="container py-4 text-center">
        <p className="fs-4 fw-light mb-1" style={{ ...serif, letterSpacing: '0.15em' }}>
          {BRAND} <span aria-hidden="true">🍦</span>
        </p>
        <p className="mb-3" style={{ color: colors.muted }}>
          Ingredientes simples. Sabor máximo.
        </p>
        <p className="small mb-0" style={{ color: colors.muted }}>
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
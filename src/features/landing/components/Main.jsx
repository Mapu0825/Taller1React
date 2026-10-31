import React, { useState } from 'react'

// Paleta de helados con contraste suficiente para Lighthouse (accesibilidad)
const colors = {
  vanilla: '#fff8ec',
  cone: '#f6e3c3',
  strawberry: '#a82c57', // más oscuro: cumple contraste AA con blanco y sobre fondo cono
  blush: '#f9c3d1',
  mint: '#a8dccb',
  chocolate: '#4a2c22',
  muted: '#6b5248',
}

const serif = { fontFamily: "Georgia, 'Times New Roman', serif", color: colors.chocolate }

const categories = ['Todos', 'Helados', 'Paletas', 'Copas']

const products = [
  { id: 1, name: 'Vainilla de Tahití', note: 'Cremosa, suave y clásica', price: '$8.000', category: 'Helados', tag: 'Más vendido', image: 'imagen1.jpeg' },
  { id: 2, name: 'Chocolate intenso', note: 'Cacao oscuro y profundo', price: '$9.000', category: 'Helados', image: 'imagen2.jpeg' },
  { id: 3, name: 'Fresa cremosa', note: 'Fruta real + crema', price: '$8.000', category: 'Helados', image: 'imagen3.jpeg' },
  { id: 4, name: 'Menta con chips', note: 'Fresca y crocante', price: '$9.000', category: 'Helados', tag: 'Nuevo', image: 'imagen4.jpeg' },
  { id: 5, name: 'Paleta de maracuyá', note: 'Ácida y refrescante', price: '$6.000', category: 'Paletas', image: 'imagen5.jpeg' },
  { id: 6, name: 'Paleta de mora', note: 'Mora natural con leche', price: '$6.000', category: 'Paletas', image: 'imagen6.jpeg' },
  { id: 7, name: 'Copa arequipe y brownie', note: 'Tres bolas + salsa tibia', price: '$18.000', category: 'Copas', tag: 'Favorita', image: 'imagen9.jpeg' },
  { id: 8, name: 'Copa cookies & cream', note: 'Galleta, crema y chocolate', price: '$17.000', category: 'Copas', image: 'imagen8.jpeg' },
]

const heroCircles = [products[0], products[2], products[6]]
const featured = products[6]

export const Main = () => {
  const [active, setActive] = useState('Todos')

  const visibleProducts =
    active === 'Todos' ? products : products.filter((p) => p.category === active)

  return (
    <main style={{ backgroundColor: colors.vanilla }}>
      {/* Hero centrado con fotos circulares */}
      <section style={{ backgroundColor: colors.cone }} aria-labelledby="titulo-hero">
        <div className="container py-5 text-center">
          <p className="text-uppercase small fw-bold mb-3" style={{ color: colors.strawberry, letterSpacing: '0.2em' }}>
            Heladería artesanal
          </p>
          <h1 id="titulo-hero" className="display-3 mx-auto mb-3" style={{ ...serif, maxWidth: 760 }}>
            Dulce, cremoso y hecho para ti
          </h1>
          <p className="fs-5 mx-auto mb-4" style={{ color: colors.muted, maxWidth: 520 }}>
            Helados, paletas y copas con ingredientes naturales para endulzar tu día.
          </p>

          <div className="d-flex justify-content-center mb-4" aria-hidden="false">
            {heroCircles.map(({ id, name, image }, i) => (
              <img
                key={id}
                src={image}
                alt={name}
                width="140"
                height="140"
                className="rounded-circle"
                style={{
                  width: 140,
                  height: 140,
                  objectFit: 'cover',
                  border: `5px solid ${colors.vanilla}`,
                  marginLeft: i === 0 ? 0 : -24,
                }}
              />
            ))}
          </div>

          <a
            href="#catalogo"
            className="btn btn-lg rounded-pill px-4"
            style={{ backgroundColor: colors.strawberry, borderColor: colors.strawberry, color: '#fff' }}
          >
            Ver sabores
          </a>
        </div>
      </section>

      {/* Catálogo: menú lateral + tarjetas con texto sobre la foto */}
      <section id="catalogo" className="container py-5" aria-labelledby="titulo-catalogo">
        <div className="row g-4">
          <div className="col-12 col-lg-3">
            <div className="position-lg-sticky" style={{ top: 90 }}>
              <h2 id="titulo-catalogo" className="h3 mb-3" style={serif}>Nuestros sabores</h2>
              <div
                className="d-flex flex-row flex-lg-column flex-wrap gap-2"
                role="group"
                aria-label="Filtrar por categoría"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={cat === active}
                    className="btn rounded-pill px-4 text-start"
                    style={
                      cat === active
                        ? { backgroundColor: colors.chocolate, borderColor: colors.chocolate, color: colors.vanilla }
                        : { borderColor: colors.chocolate, color: colors.chocolate, backgroundColor: 'transparent' }
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            <ul className="row g-3 list-unstyled mb-0">
              {visibleProducts.map(({ id, name, note, price, tag, image }) => (
                <li key={id} className="col-6 col-md-4 col-xl-3">
                  <article className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm" style={{ backgroundColor: '#fff' }}>
                    <div className="position-relative">
                      <img
                        src={image}
                        alt={name}
                        width="300"
                        height="200"
                        loading="lazy"
                        style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }}
                      />
                      {tag && (
                        <span
                          className="badge position-absolute top-0 start-0 m-2 rounded-pill"
                          style={{ backgroundColor: colors.strawberry, color: '#fff' }}
                        >
                          {tag}
                        </span>
                      )}
                    </div>
                    <div className="card-body p-3">
                      <h3 className="h6 mb-1" style={serif}>{name}</h3>
                      <p className="small mb-2" style={{ color: colors.muted }}>{note}</p>
                      <p className="fw-bold mb-0" style={{ color: colors.chocolate }}>{price}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sabor destacado */}
      <section style={{ backgroundColor: colors.chocolate }} aria-labelledby="titulo-destacado">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 order-md-2">
              <img
                src={featured.image}
                alt={featured.name}
                width="600"
                height="400"
                loading="lazy"
                className="w-100 rounded-5"
                style={{ height: 300, objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-md-6 order-md-1">
              <p className="text-uppercase small fw-bold mb-2" style={{ color: colors.mint, letterSpacing: '0.2em' }}>
                Sabor favorito
              </p>
              <h2 id="titulo-destacado" className="mb-3" style={{ ...serif, color: colors.vanilla }}>
                {featured.name}
              </h2>
              <p className="fs-5 mb-4" style={{ color: colors.cone }}>
                {featured.note}. Nuestra copa más pedida, por solo {featured.price}.
              </p>
              <a
                href="#catalogo"
                className="btn btn-lg rounded-pill px-4"
                style={{ backgroundColor: colors.mint, borderColor: colors.mint, color: colors.chocolate }}
              >
                Ver más copas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suscripción */}
      <section className="container py-5" aria-labelledby="titulo-news">
        <div className="rounded-5 text-center p-4 p-md-5" style={{ backgroundColor: colors.blush }}>
          <div className="mx-auto" style={{ maxWidth: 520 }}>
            <h2 id="titulo-news" className="mb-2" style={serif}>Antójate de más</h2>
            <p className="mb-4" style={{ color: colors.chocolate }}>
              Recibe 10% de descuento en tu primera compra y entérate primero de los sabores nuevos.
            </p>
            <form className="input-group input-group-lg" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control rounded-start-pill border-0"
                placeholder="Tu correo electrónico"
                aria-label="Correo electrónico"
                required
              />
              <button
                type="submit"
                className="btn rounded-end-pill px-4"
                style={{ backgroundColor: colors.strawberry, borderColor: colors.strawberry, color: '#fff' }}
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
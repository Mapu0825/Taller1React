import React from 'react';
import { NavLink } from 'react-router-dom';

const BRAND = 'MADY';

// Misma paleta de helados que el Main (con contraste accesible)
const colors = {
  vanilla: '#fff8ec',
  cone: '#f6e3c3',
  strawberry: '#a82c57', // texto blanco sobre este tono cumple contraste AA
  chocolate: '#4a2c22',
};

const serif = { fontFamily: "Georgia, 'Times New Roman', serif", color: colors.chocolate };

const linkStyle = { color: colors.chocolate };

export const Header = () => {
  return (
    <header>
      <nav
        className="navbar"
        aria-label="Principal"
        style={{ backgroundColor: colors.vanilla, borderBottom: `1px solid ${colors.cone}` }}
      >
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-2">
          <NavLink className="navbar-brand fs-3 fw-light" to="/" style={{ ...serif, letterSpacing: '0.15em' }}>
            {BRAND} <span aria-hidden="true">🍦</span>
          </NavLink>

          {/* Menú estático: siempre visible, sin botón de hamburguesa ni desplegables */}
          <ul className="list-unstyled d-flex flex-wrap align-items-center gap-1 gap-md-3 mb-0">
            <li>
              <NavLink className="nav-link px-2" to="/" end style={linkStyle}>
                Inicio
              </NavLink>
            </li>
            <li>
              <a className="nav-link px-2" href="/#productos" style={linkStyle}>
                Sabores
              </a>
            </li>
            <li>
              <NavLink className="nav-link px-2" to="/Props" style={linkStyle}>
                Props
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link px-2" to="/Login" style={linkStyle}>
                Iniciar sesión
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn btn-sm rounded-pill px-3"
                to="/Rickandmorty"
                style={{ backgroundColor: colors.strawberry, borderColor: colors.strawberry, color: '#fff' }}
              >
                Rick and Morty
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
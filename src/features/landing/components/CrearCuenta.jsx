import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Paleta de helados con contraste accesible
const colors = {
  vanilla: '#fff8ec',
  cone: '#f6e3c3',
  strawberry: '#a82c57', // texto blanco sobre este tono cumple contraste AA
  chocolate: '#4a2c22',
  muted: '#6b5248',
};

const serif = { fontFamily: "Georgia, 'Times New Roman', serif", color: colors.chocolate };

// Campos con solo línea inferior
const inputStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: `2px solid ${colors.chocolate}`,
  borderRadius: 0,
  paddingLeft: 0,
  color: colors.chocolate,
};

const labelStyle = { color: colors.chocolate };

const primaryButtonStyle = {
  backgroundColor: colors.strawberry,
  borderColor: colors.strawberry,
  color: '#fff',
};

const linkStyle = { color: colors.chocolate, textDecoration: 'underline' };

export const CrearCuenta = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [created, setCreated] = useState(false);

  const mismatch = confirm.length > 0 && password !== confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) return;
    if (onSubmit) onSubmit({ name, email, password });
    setCreated(true);
  };

  return (
    <main style={{ backgroundColor: colors.vanilla }}>
      <div className="row g-0" style={{ minHeight: '80vh' }}>
        {/* Panel decorativo */}
        <div
          className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center text-center p-4 p-md-5"
          style={{ backgroundColor: colors.chocolate }}
          aria-hidden="true"
        >
          <img
            src="imagen3.jpeg"
            alt=""
            width="180"
            height="180"
            className="rounded-circle mb-4 d-none d-md-block"
            style={{ width: 180, height: 180, objectFit: 'cover', border: `6px solid ${colors.cone}` }}
          />
          <p className="fs-3 mb-2" style={{ ...serif, color: colors.vanilla }}>
            Dulce, cremoso y hecho para ti
          </p>
          <p className="mb-0" style={{ color: colors.cone }}>
            Helados artesanales con ingredientes naturales
          </p>
        </div>

        {/* Contenido */}
        <div className="col-12 col-md-7 d-flex align-items-center justify-content-center p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 400 }}>
            {created ? (
              <>
                <h1 className="h2 mb-2" style={serif}>¡Cuenta creada!</h1>
                <p className="mb-4" style={{ color: colors.muted }}>
                  Te damos la bienvenida, <strong>{name}</strong>. Ya puedes iniciar sesión.
                </p>
                <div className="d-grid">
                  <NavLink to="/Login" className="btn btn-lg rounded-3" style={primaryButtonStyle}>
                    Ir a iniciar sesión
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <h1 className="h2 mb-2" style={serif}>Crear cuenta</h1>
                <p className="mb-4" style={{ color: colors.muted }}>
                  Regístrate para pedir tus helados favoritos.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="crearNombre" className="form-label fw-semibold small" style={labelStyle}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      style={inputStyle}
                      id="crearNombre"
                      placeholder="Tu nombre"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="crearEmail" className="form-label fw-semibold small" style={labelStyle}>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      style={inputStyle}
                      id="crearEmail"
                      placeholder="tucorreo@ejemplo.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="crearPassword" className="form-label fw-semibold small" style={labelStyle}>
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      style={inputStyle}
                      id="crearPassword"
                      placeholder="Mínimo 6 caracteres"
                      aria-describedby="crearPasswordHelp"
                      autoComplete="new-password"
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div id="crearPasswordHelp" className="form-text" style={{ color: colors.muted }}>
                      Usa al menos 6 caracteres.
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="crearConfirm" className="form-label fw-semibold small" style={labelStyle}>
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      style={inputStyle}
                      id="crearConfirm"
                      placeholder="Repite tu contraseña"
                      aria-invalid={mismatch}
                      aria-describedby={mismatch ? 'crearConfirmError' : undefined}
                      autoComplete="new-password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      required
                    />
                    {mismatch && (
                      <div
                        id="crearConfirmError"
                        role="alert"
                        className="form-text fw-semibold"
                        style={{ color: colors.strawberry }}
                      >
                        Las contraseñas no coinciden.
                      </div>
                    )}
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-lg rounded-3" style={primaryButtonStyle}>
                      Crear cuenta
                    </button>
                  </div>

                  <p className="text-center small mt-4 mb-0" style={{ color: colors.muted }}>
                    ¿Ya tienes cuenta?{' '}
                    <NavLink to="/Login" style={linkStyle}>
                      Iniciar sesión
                    </NavLink>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CrearCuenta;
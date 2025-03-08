import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmacionContrasena, setConfirmacionContrasena] = useState("");

  const [error, setError] = useState(false);
  const [errorContrasena, setErrorContrasena] = useState(false);
  const [errorConfirmacion, setErrorConfirmacion] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    setError(false);
    setErrorContrasena(false);
    setErrorConfirmacion(false);

    if (!email.trim() || !contrasena.trim() || !confirmacionContrasena.trim()) {
      setError(true);
      return;
    }

    if (contrasena.length < 7) {
      setErrorContrasena(true);
      return;
    }

    if (contrasena !== confirmacionContrasena) {
      setErrorConfirmacion(true);
      return;
    }

    setEmail("");
    setConfirmacionContrasena("");
    setContrasena("");
  };
  return (
    <div>
      <form className="formulario" onSubmit={validarDatos}>
        <h1>Register</h1>
        {error ? (
          <p>
            <b>Todos los campos son obligatorios</b>
          </p>
        ) : null}
        {errorContrasena ? (
          <p>
            <b>La contraseña debe tener mas de 6 caracteres</b>
          </p>
        ) : null}
        {errorConfirmacion ? (
          <p>
            <b>Las contraseñas deben ser iguales</b>
          </p>
        ) : null}

        <div className="formulario">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="ingresatuemail@gmail.com"
          />
        </div>
        <div className="formulario">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={(e) => setContrasena(e.target.value)}
            value={contrasena}
            placeholder="contraseñaMuyDificil"
          />
        </div>
        <div className="formulario">
          <label className="form-label">Confirmación Contraseña</label>
          <input
            type="password"
            name="confirmacionContrasena"
            className="form-control"
            onChange={(e) => setConfirmacionContrasena(e.target.value)}
            value={confirmacionContrasena}
            placeholder="contraseñaMuyDificil"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;

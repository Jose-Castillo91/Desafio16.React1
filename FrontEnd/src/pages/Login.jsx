import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [error, setError] = useState(false);
  const [errorContrasena, setErrorContrasena] = useState(false);
  const [errorTotal, setErrorTotal] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setError(false);
    setErrorContrasena(false);
    setErrorTotal(false);

    if (!email.trim() || !contrasena.trim()) {
      setError(true);
      setErrorTotal(true);
      return;
    }

    if (contrasena.length < 7) {
      setErrorContrasena(true);
      setErrorTotal(true);
      return;
    }

    setEmail("");
    setContrasena("");
  };

  return (
    <div>
      <form className="formulario" onSubmit={validarDatos}>
        <h1>Login</h1>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        {errorContrasena ? (
          <p>La contraseña debe tener más de 6 caracteres</p>
        ) : null}
        {submitted && !errorTotal ? (
          <p>Autentificación Realizada Correctamente</p>
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

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;

import React from "react";

const Profile = () => {
  const email = "usuario@ejemplo.com"; // estático por ahora

  const handleLogout = () => {
    alert("Sesión cerrada (aún no implementado)");
  };

  return (
    <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;

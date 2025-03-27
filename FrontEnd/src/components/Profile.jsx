import React from "react";
import Figure from "react-bootstrap/Figure";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function Profile() {
  return (
    <div className="formulario">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="Foto de perfil"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
        />
      </Figure>
      <Accordion className="acordeon">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Información personal</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Mail</Accordion.Header>
                <Accordion.Body>Mail.usuario@gmail.com</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Otra informacion del perfil</Accordion.Header>
                <Accordion.Body>Nombre: Apellido: Direccion:</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button style={{ marginTop: 60 }} variant="secondary" size="l">
        Cerrar sesión
      </Button>
    </div>
  );
}

export default Profile;

import type { Metadata } from "next";
import { COMPANY } from "../company";

export const metadata: Metadata = {
  title: "Eliminación de datos",
  description: `Cómo solicitar a ${COMPANY.brand} la eliminación de tus datos.`,
};

export default function EliminacionDeDatosPage() {
  const { legalName, brand, email, lastUpdated } = COMPANY;
  return (
    <>
      <h1>Instrucciones para eliminar tus datos</h1>
      <p>Última actualización: {lastUpdated}</p>

      <p>
        Si nos escribiste por WhatsApp, Facebook Messenger o Instagram, {brand} guarda tu
        nombre de perfil, tu identificador o número y el historial de la conversación. Puedes
        pedir que eliminemos toda esa información.
      </p>

      <h2>Cómo solicitarlo</h2>
      <ol>
        <li>
          Envía un correo a <a href={`mailto:${email}`}>{email}</a> con el asunto
          “Eliminar mis datos”.
        </li>
        <li>
          Indica el canal por el que nos escribiste y cómo identificarte: tu número de WhatsApp,
          o tu nombre de usuario de Facebook o Instagram.
        </li>
        <li>
          También puedes pedirlo escribiendo “Eliminar mis datos” en la misma conversación.
        </li>
      </ol>

      <h2>Qué pasa después</h2>
      <p>
        Confirmaremos tu solicitud y eliminaremos tu contacto, tus conversaciones y los
        archivos asociados en un plazo máximo de 30 días. Te avisaremos cuando esté hecho.
      </p>

      <h2>Quitar el acceso desde Facebook</h2>
      <p>
        Si iniciaste sesión o conectaste tu cuenta con nuestra app, también puedes quitarle el
        acceso desde Facebook: Configuración y privacidad → Configuración → Apps y sitios web →
        selecciona la app → Eliminar.
      </p>

      <p>Responsable: {legalName}.</p>
    </>
  );
}

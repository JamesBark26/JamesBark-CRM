import type { Metadata } from "next";
import { COMPANY } from "../company";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${COMPANY.brand} recopila, usa y protege la información de los mensajes que recibe.`,
};

export default function PrivacidadPage() {
  const { legalName, brand, email, country, address, lastUpdated } = COMPANY;
  return (
    <>
      <h1>Política de privacidad</h1>
      <p>Última actualización: {lastUpdated}</p>

      <p>
        {brand} es una plataforma de atención al cliente operada por {legalName} ({country}).
        Permite a nuestro equipo recibir y responder, en una sola bandeja de entrada, los
        mensajes que las personas nos envían por WhatsApp, Facebook Messenger e Instagram.
        Esta política explica qué información tratamos y con qué fin.
      </p>

      <h2>Información que recopilamos</h2>
      <ul>
        <li>Datos de perfil que la plataforma de mensajería comparte al escribirnos: nombre, nombre de usuario, foto de perfil e identificador de la cuenta.</li>
        <li>En WhatsApp, el número de teléfono desde el que nos escribes.</li>
        <li>El contenido de los mensajes que nos envías y que te respondemos, incluidos archivos, imágenes y audios.</li>
        <li>Fecha, hora y estado de entrega de cada mensaje.</li>
      </ul>
      <p>
        No solicitamos contraseñas ni datos de pago por estos canales, y no accedemos a
        conversaciones que no sean con nuestras propias cuentas de empresa.
      </p>

      <h2>Cómo usamos la información</h2>
      <ul>
        <li>Responder tus consultas y darte seguimiento.</li>
        <li>Organizar las conversaciones entre los miembros de nuestro equipo.</li>
        <li>Enviarte mensajes que hayas aceptado recibir, de acuerdo con las políticas de cada plataforma.</li>
      </ul>
      <p>
        No vendemos ni alquilamos tu información, y no la usamos para publicidad de terceros.
      </p>

      <h2>Con quién la compartimos</h2>
      <p>
        Solo con los proveedores que necesitamos para operar el servicio: Meta Platforms
        (WhatsApp, Messenger e Instagram), nuestro proveedor de base de datos y alojamiento,
        y, si está activado, el proveedor de inteligencia artificial que ayuda a redactar
        respuestas. Cada uno trata los datos según sus propias políticas y solo para prestarnos
        el servicio.
      </p>

      <h2>Conservación y seguridad</h2>
      <p>
        Conservamos las conversaciones mientras sean necesarias para atenderte o mientras la
        ley lo exija. Los datos se almacenan cifrados en tránsito y el acceso está limitado a
        personal autorizado.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos en cualquier momento acceder a tus datos, corregirlos o eliminarlos.
        Para eliminarlos, sigue las instrucciones de nuestra{" "}
        <a href="/eliminacion-de-datos">página de eliminación de datos</a>.
      </p>

      <h2>Contacto</h2>
      <p>
        {legalName}
        <br />
        {address}, {country}
        <br />
        Correo: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </>
  );
}

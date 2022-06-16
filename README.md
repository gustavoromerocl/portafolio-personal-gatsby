# portafolio-personal-gatsby
curso de código facilito

## Introducción

#### Qué aprenderé en este curso [Curso Gatsby]

En este curso conocerás y aprenderás a usar Gatsby, un framework basado en React para la creación de aplicaciones web y sitios web.

También crearás un proyecto frontend completo usando tecnologías modernas como React, webpack, graphql, consumirás servicios web, usarás CSS moderno para estilizar la interfaz y subirás tu sitio a una red de distribución en la nube.

A lo largo del curso usaremos Tailwind como framework CSS. Tailwind es un framework simple que te entrega mucho control sobre cómo quieres que luzca tu página web, aprenderás a configurar Tailwind, a usar sus directivas y a integrarlo en tu página web.

En general, construirás un sitio web moderno, veloz, con tecnologías actualizadas, a través del cual podrás mostrar tu formación profesional, portafolio y conocimiento. Crearás tu sitio web personal desde 0, con Gatsby y React.


#### Qué es Gatsby 

Gatsby es un framework para crear aplicaciones y sitios web basado en React. Gatsby promueve lo que conocemos como el JAMStack, por lo que tiene las siguientes características:

La lógica y funcionalidad está en el cliente, se programa con JavaScript y React.
Usamos APIs para consumir datos, particularmente Gatsby viene integrado con un servidor de graphql. Puedes usar cualquier fuente de datos, un servicio web en internet, un archivo JSON, un archivo markdown, etc.
Precompila el marcado, por lo que no tenemos routing dinámico, conexión a bases de datos u otras características propias de frameworks tradicionales como Rails, Django o Laravel. De nuevo, la funcionalidad está en el cliente
Si quieres saber más sobre el JAMStack, te invito a que sigas el webinar gratuito que realicé en CódigoFacilito.

Gatsby es un nuevo enfoque para crear aplicaciones web, basado en tecnologías modernas como React y graphql, que te permiten construir sitios web que cargan y se ejecutan de manera muy rápida.

#### Instalación de Gatsby

- npm install -g gatsby-cli

## Primeros pasos del proyecto

#### Creación del proyecto

Crear proyecto preconfigurado de gatsby:

- gatsby new [ nombre proyecto ] https://github.com/gatsbyjs/gatsby-starter-hello-world

Ejecutar proyecto localmente:

- gatsby develop

#### Integrar Tailwind

Instalación:

- npm install tailwindcss --save-dev

Crear archivo de configuración:

- npx run tailwind init

Instalar plugin postcss:

- npm install gatsby-plugin-postcss

[Documentación oficial](https://tailwindcss.com/docs/guides/gatsby)

plugin vs code para recomendaciones de tailwind: Tailwind CSS IntelliSense

#### Componente del encabezado


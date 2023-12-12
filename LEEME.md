# Aplicación dockerizada de Spring React y MySQL

Aplicación Full Stack con Spring Boot, React y MySQL, usando contenedores Docker.

El objetivo de este proyecto es demostrar cómo Docker puede ser utilizado para usar una aplicación Full Stack, ayudando a evitar el dicho "que raro, en mi computadora funciona", y también para facilitar pruebas de una aplicación Full Stack sin tener que instalar todas las dependencias o configuraciones complejas.

## Descripción

La aplicación es una aplicación Full Stack simple que guarda el nombre y la dirección de correo electrónico de un usuario en una base de datos MySQL. El backend es una aplicación Spring Boot que expone una API REST. El frontend es una aplicación React que utiliza la API para guardar y recuperar información de la base de datos.

### Tecnologías utilizadas

- Lenguaje de programación: [Java](https://www.java.com/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frameworks: [Spring Boot](https://spring.io/projects/spring-boot), [React](https://react.dev/)
- Base de datos: [MySQL](https://www.mysql.com/)
- Gestión de base de datos: [phpMyAdmin](https://www.phpmyadmin.net/)
- Contenedores: [Docker](https://www.docker.com/)
- Entorno de desarrollo: [VSCode](https://code.visualstudio.com/) con [dev containers](https://code.visualstudio.com/docs/remote/containers) en [Zorin OS](https://zorinos.com/)

## Cómo usar en producción

Necesitas tener instalado [Docker](https://www.docker.com/), la forma más fácil de instalarlo es usando [Docker Desktop](https://www.docker.com/products/docker-desktop).

1. Clona este repositorio e ingresa a la carpeta/directorio

```bash
git clone git@github.com:jhordyess/dockerized-spring-react-mysql.git
```

2. Crea un archivo `.env` en la carpeta raíz siguiendo como ejemplo el archivo [`.env.example`](./.env.example).

3. Luego, ejecuta el siguiente comando:

```bash
make

# Si no tienes 'make' instalado, usa:
docker compose up -d
```

4. Después, abre el navegador en <http://localhost/>

5. Para remover los contenedores, ejecuta el siguiente comando:

```bash
make clean

# Si no tienes 'make' instalado, usa:
docker compose down -v
```

Tenga en cuenta que los scripts de producción son solo de muestra, y puede requerir algunos ajustes para su uso en producción real.

## Cómo usar en desarrollo

Puedes utilizar los dev containers de VSCode para ejecutar el proyecto en un entorno de contenedores de Docker.

Necesitas tener instalado [Docker](https://www.docker.com/) y [VSCode](https://code.visualstudio.com/), y la extensión [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

1. Clona este repositorio

```bash
git clone git@github.com:jhordyess/dockerized-spring-react-mysql.git
```

2. Abre el proyecto con VSCode

```bash
code dockerized-spring-react-mysql
```

3. Crea un archivo `.env` en la carpeta raíz siguiendo como ejemplo el archivo [`.env.example`](./.env.example).

4. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
docker compose -f docker-compose.dev.yml up -d
```

5. Abre la paleta de comandos (Ctrl+Shift+P) y selecciona la opción `Dev Containers: Open folder in Container`.

6. Selecciona la carpeta `backend` y espera a que se prepare el contenedor.

7. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
mvn spring-boot:run
```

8. Para el frontend, abre la paleta de comandos (Ctrl+Shift+P) y selecciona la opción `Dev Containers: Open folder in Container`.

9. Selecciona la carpeta `frontend` y espera a que se prepare el contenedor.

10. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
npm run dev
```

11. Abre el navegador en <http://localhost:5173/>

12. También puedes visitar <http://localhost:81/> para gestionar la base de datos con phpMyAdmin.

## License

© 2023 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)

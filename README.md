# Dockerized Spring React MySQL App

Basic Full Stack App with Spring Boot, React, and MySQL, all running in Docker containers.

The goal of this project is to demonstrate how Docker can be used to run a full stack application, helping to avoid the "works on my computer" problem, and also to make it easier to test a full stack application without having to install all the dependencies or complex configurations.

Do you speak Español?: 👉 [Léeme](./LEEME.md)

## Description

The app is a simple full stack application that saves a user's name and email address to a MySQL database.The backend is a Spring Boot application that exposes a REST API. The frontend is a React application that uses the backend API to save and retrieve data from the database.

### Technologies Used

- Programming Language: [Java](https://www.java.com/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frameworks: [Spring Boot](https://spring.io/projects/spring-boot), [React](https://react.dev/)
- Database: [MySQL](https://www.mysql.com/)
- Database Management: [phpMyAdmin](https://www.phpmyadmin.net/)
- Containerization: [Docker](https://www.docker.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

## How to use for production or testing purposes

You need to have installed [Docker](https://www.docker.com/), the most easy way to install it is using the [Docker Desktop](https://www.docker.com/products/docker-desktop) application.

1. Clone this repository and enter the folder

```bash
git clone git@github.com:jhordyess/dockerized-spring-react-mysql.git
```

2. Create a `.env` file in the root folder by copying the example from the [`.env.example`](./.env.example) file.

3. Then, run the following command:

```bash
make

# If you don't have 'make' installed, use:
docker compose up -d
```

4. After that, open the browser and visit <http://localhost/>.

5. To remove the containers, use the following commands:

```bash
make clean

# If you don't have 'make' installed, use:
docker compose down
```

Take note that this production configuration is just for testing purposes, and maybe need some changes to be used in a real production environment.

## How to use in development

You can use the VSCode dev containers to run the project in a containerized environment.

You need to have installed [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/), and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

1. Clone this repository

```bash
git clone git@github.com:jhordyess/dockerized-spring-react-mysql.git
```

2. Open the project in VSCode

```bash
code dockerized-spring-react-mysql
```

3. Create a `.env` file in the root folder by copying the example from the [`.env.example`](./.env.example) file.

4. Open the integrated terminal (Ctrl+Shift+`) and run the following command:

```bash
docker compose -f docker-compose.dev.yml up -d
```

5. Open the command palette (Ctrl+Shift+P) and select the option `Dev Containers: Open folder in Container`.

6. Select the folder `backend` and wait for the container to be built.

7. Open the integrated terminal (Ctrl+Shift+`) and run the following command:

```bash
mvn spring-boot:run
```

8. For the frontend, open the command palette (Ctrl+Shift+P) and select the option `Dev Containers: Open folder in Container`.

9. Select the folder `frontend` and wait for the container to be built.

10. Open the integrated terminal (Ctrl+Shift+`) and run the following command:

```bash
npm run dev
```

11. Open the browser and visit <http://localhost:5173/>

12. Also you can visit <http://localhost:81/> to manage the database with phpMyAdmin.

## To-Do

- [ ] Add CSS styles to the frontend

## Contribution

If you would like to contribute to the project, open an issue or make a pull request on the repository.

## License

© 2023 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)

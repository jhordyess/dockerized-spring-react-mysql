FROM maven:3.9-eclipse-temurin-17-alpine as build

WORKDIR /app

COPY pom.xml ./

COPY src src/

RUN mvn clean install -DskipTests

# Run the app in a minimal java container

FROM eclipse-temurin:17-jre-alpine

VOLUME /tmp

EXPOSE 8080

ARG JAR_FILE=/app/target/*.jar

COPY --from=build ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
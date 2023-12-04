FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY index.html vite.config.js ./

COPY src ./src

RUN npm run build

# Run the app in a minimal nginx container

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


FROM nginx:alpine
COPY --from=node /app/dist/rms /usr/share/nginx/html

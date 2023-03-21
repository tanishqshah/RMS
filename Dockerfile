FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


# FROM nginx:alpine
# COPY --from=node /app/dist/rms /usr/share/nginx/html


# FROM nginx:alpine
# COPY ng.conf /etc/nginx/conf.d/
# COPY --from=node /app/dist/rms /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf



# FROM nginx:alpine

# COPY nginx.conf /etc/nginx/conf.d/nginx.conf
# WORKDIR /usr/share/nginx/html/
# COPY --from=node /app/dist/rms .
# RUN rm /etc/nginx/conf.d/default.conf

FROM nginx:latest
COPY --from=node /app/dist/rms  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
FROM node:22.12 as builder
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /build/out /usr/share/nginx/html

# Create custom Nginx configuration
RUN echo ' \
server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ $uri.html =404; \
    } \
    \
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ { \
        expires max; \
        access_log off; \
    } \
} \
' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

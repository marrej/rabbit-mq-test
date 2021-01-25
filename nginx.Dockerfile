FROM nginx:1.11

COPY dist/rabbit-test /www
COPY nginx.conf /etc/nginx/conf.d/default.conf

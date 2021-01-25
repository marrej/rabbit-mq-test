FROM nginx:1.11

COPY proxy.conf /etc/nginx/conf.d/default.conf

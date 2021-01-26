FROM nginx:1.18

COPY proxy.conf /etc/nginx/conf.d/default.conf

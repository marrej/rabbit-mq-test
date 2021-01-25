# RabbitTest

- npm install @stomp/rx-stomp

# to test locally you will have to bind the ports to the local machine, so you need to build the image for yourself and run it

- docker build -f rabbit.Dockerfile -t test-rabbit-image .
- docker run -p 5672:5672 -p 15672:15672 -p 61613:61613 --name mq test-rabbit-image

NGINX proxy pass can be used for exposing the rabbitMQ to the outside world -> therefore you can connect to it from the outside of the node cluster with the url of the app



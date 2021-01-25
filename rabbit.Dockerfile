FROM rabbitmq:3.7-management
RUN rabbitmq-plugins enable --offline rabbitmq_mqtt rabbitmq_federation_management rabbitmq_stomp
COPY rabbitmq.conf /etc/rabbitmq/rabbitmq.conf
EXPOSE 5672
EXPOSE 15672

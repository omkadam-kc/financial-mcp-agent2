// Backend/src/kafka/kafkaClient.js

import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "graphsentinel-lite",
  brokers: process.env.KAFKA_BROKERS ? process.env.KAFKA_BROKERS.split(",") : ["localhost:9092"],
  ...(process.env.KAFKA_USERNAME && process.env.KAFKA_PASSWORD && {
    ssl: true,
    sasl: {
      mechanism: 'scram-sha-256',
      username: process.env.KAFKA_USERNAME,
      password: process.env.KAFKA_PASSWORD
    }
  })
});
const { Kafka } = require('kafkajs');
const { faker } = require('@faker-js/faker');

const clientId = process.env.CLIENT_ID;
const broker = process.env.BROKER_01;
const numberOfMessages = process.env.MESSAGES;
const topic = process.env.TOPIC;

const kafka = new Kafka({
    clientId: clientId,
    brokers: [broker],
    ssl: false
})

const producer = kafka.producer()
producer.connect()

for (let index = 0; index < numberOfMessages; index++) {
    const message = { value: faker.name.fullName() };
    //console.log(message);
    producer.send({
        topic: topic,
        messages: [message],
    });
}

producer.disconnect()
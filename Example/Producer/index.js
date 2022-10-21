const { Kafka } = require('kafkajs');
const { faker } = require('@faker-js/faker');

const clientId = process.env.CLIENT_ID;
const broker = process.env.BROKER_01;
const numberOfMessages = process.env.MESSAGES;
const topic = process.env.TOPIC;

const kafka = new Kafka({
    clientId: clientId,
    brokers: [broker]
});

const run = async () => {
    const producer = kafka.producer();
    await producer.connect();
    for (let index = 0; index < numberOfMessages; index++) {
        var messageJson = JSON.stringify({ Name: faker.name.firstName(), LastName: faker.name.lastName() });
        const message = { value: messageJson };
        await producer.send({
            topic: topic,
            messages: [message],
        });
    }
    await producer.disconnect();
}

run().then(() => {
    console.log("All messages was processed");
    process.exit(0);
})

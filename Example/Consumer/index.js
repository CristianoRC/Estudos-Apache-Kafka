const { Kafka } = require('kafkajs');

const clientId = process.env.CLIENT_ID;
const broker = process.env.BROKER_01;
const topic = process.env.TOPIC;

const kafka = new Kafka({
    clientId: clientId,
    brokers: [broker]
});

const run = async () => {
    const consumer = kafka.consumer({ groupId: clientId });
    await consumer.connect();
    await consumer.subscribe({ topic: topic, fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.info({
                value: JSON.parse(message.value.toString()),
                topic,
                partition
            });
        }
    })
};

run();
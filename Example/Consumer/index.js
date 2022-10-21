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
    consumer.subscribe({ topic: topic, fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({ value: message.value.toString() });
        }
    })
};

run().then(() => {
    console.log("All messages was processed");
    process.exit(0);
})
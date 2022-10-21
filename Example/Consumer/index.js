const { Kafka } = require('kafkajs');

const clientId = process.env.CLIENT_ID;
const broker = process.env.BROKER_01;
const topic = process.env.TOPIC;

const kafka = new Kafka({
    clientId: clientId,
    brokers: [broker],
    ssl: false
});

const consumer = kafka.consumer({ groupId: clientId });

consumer.connect().then();
consumer.subscribe({ topic: topic, fromBeginning: true }).then();

consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value.toString()
        })
    }
}).then();
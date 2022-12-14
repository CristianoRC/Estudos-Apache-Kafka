const { Kafka } = require('kafkajs');

const clientId = process.env.CLIENT_ID;
const broker = process.env.BROKER_01;
const topic = process.env.TOPIC;

const kafka = new Kafka({
    clientId: clientId,
    brokers: [broker],
    ssl: false,
    sasl: null
});

const admin = kafka.admin()

const run = async () => {
    await admin.connect();
    await admin.createTopics({
        topics: [{ topic }],
        waitForLeaders: true,
    });
    await admin.createPartitions({
        topicPartitions: [{ topic: topic, count: 3 }],
    });
};

run().then(() => {
    console.log("Topics were created");
    process.exit(0);
});
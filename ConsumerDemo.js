const kafka = require('kafka-node');

const kafkaHost = 'localhost:9092';
const groupId = 'my-node-app'
const topic = 'first_topic';

const consumer = new kafka.ConsumerGroup({ kafkaHost, groupId }, topic);

consumer.on('message', msg => {
  console.info(msg);
});
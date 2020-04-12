const kafka = require('kafka-node');

const kafkaHost = 'localhost:9092';
const client = new kafka.KafkaClient({ kafkaHost });
const producer = new kafka.Producer(client, { partitionerType: 2 });

producer.on('error', err => {
  console.error(err);
});

producer.on('ready', () => {
  console.info('producer ready');

  for(let i=0; i<10; i++) {
    let payloads = [
      { topic: 'first_topic', messages: 'hello from node ' + i }
    ];
    producer.send(payloads, (err, data) => {
      console.log(err, data);
    });
  }
});
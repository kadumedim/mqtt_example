const mqtt = require('mqtt');
const host = 'm14.cloudmqtt.com';
const port = '12891';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'vqlvmcfj',
  password: 'Vzw6NIX4voxY',
  reconnectPeriod: 1000,
});

const topic = [
  'luminosidade',
  'distancia',
  'indoor/temperatura',
  'indoor/umidade',
  'outdoor/temperatura',
  'outdoor/umidade'
]

client.on('connect', () => {
  console.log('Conectado!')
  topic.forEach(topic => {
    client.subscribe([topic], () => {
      console.log(`Inscrito no Tópico '${topic}'`)
    });
  });
});

client.on('message', (topic, payload) => {
  console.log('Mensagem:', topic, payload.toString())
})
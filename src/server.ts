import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'olá' });
});

app.listen(3333, () => console.log('server up'));

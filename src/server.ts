import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.get('/marco', (req, res) => {
  return res.send('polo');
});

app.use(routes);

app.listen(3333, () => console.log('server up'));

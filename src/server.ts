import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/marco', (req, res) => {
  return res.send('polo');
});

app.use(routes);

app.listen(3333, () => console.log('server up'));

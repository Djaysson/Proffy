import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, err => {
  if (err) {
    console.log('Não foi possivel iniciar')
  } else {
    console.log('server esta online')
  }
})

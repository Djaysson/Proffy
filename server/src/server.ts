import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })

})

app.listen(3333, err => {
  if (err) {
    console.log('Não foi possivel iniciar')
  } else {
    console.log('server esta online')
  }
})

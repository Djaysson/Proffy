import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Djayson', age: 27 },
    { name: 'Steven', age: 23 },
    { name: 'Jhon', age: 20 },

  ]
  return response.json(users)

})

app.listen(3333, err => {
  if (err) {
    console.log('Não foi possivel iniciar')
  } else {
    console.log('server esta online')
  }
})
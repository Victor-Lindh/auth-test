const express = require('express')

const app = express()

const auth = {
  user: 'vli',
  first_name: 'victor',
  last_name_: 'lindh',
  secret: 'ketchup'
}

app.get('/', (req, res) => {
  res.json(auth)
})

app.listen(3000, () => {
  console.log('app started on 3000');
})
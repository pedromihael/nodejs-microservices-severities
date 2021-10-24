const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('../../application/client/modules/severity/infra/http/routes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger('dev'))

app.get('/health-check', (req, res) => {
  res.status(200).send("I can't think about any severity tricky phrase. I'm sorry. 😐 But that's ok with the server 🤙")
})

app.use(routes)

app.listen(process.env.PORT || 3005, () => {
  console.log('Severities service is ready ✅');
});

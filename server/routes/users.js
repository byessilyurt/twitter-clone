import express  from "express"
const router = express.Router()

router.get('/', function (req, res) {
  res.send('API users home page')
})

router.get('/about', function (req, res) {
  res.send('About users')
})

export default router
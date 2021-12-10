import express  from "express"
const router = express.Router()

router.get('/', function (req, res) {
  res.send('posts home page')
})

router.get('/about', function (req, res) {
  res.send('post about')
})

export default router
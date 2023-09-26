const express = require('express');
const router = express.Router();
const cors = require("cors")
const {test, registerUser, loginUser , getProfile}=  require('../controllers/authController')
// const app = express()


// middleware
router.use(
    cors({
        credentials: true,
        origin:'http://localhost:3000'
    })
)


router.get('/',test)

router.post('/register', registerUser)

router.post('/login', loginUser)

 router.get('/profile', getProfile)

// router.post('/DashBoard', DashBoard)


module.exports = router

// const port = 3000

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const { Router } = require('express')
const router = Router();
const product = require('../controllers/product.js')
const user = require('../controllers/user.js')
const wishlist = require('../controllers/wishlist.js')
const config = require('../config/config.json')



router.get('/', (req, res) => res.send('This is root!'))

router.get('/users', user.getAllUsers)
router.get('/users/:id', user.getUserById)

module.exports = router



// router.get('/users', controllers.getAllUsers)
// router.get('/users/:id', controllers.getUserById)
// // router.put('/users/:id', controllers.updateUser) // you always use patch. should try to figure out why tutorial uses put...
// router.patch('/users/:id', controllers.updateUser)
// router.delete('/users/:id', controllers.deleteUser)
// router.post('/users', controllers.createUser)

// router.eget('/reviews', controllers.getAllReviews)
// router.get('/reviews/:id', controllers.getReviewById)
// router.patch('/reviews/:id', controllers.updateReview)
// router.delete('/reviews/:id', controllers.deleteReview)
// router.post('/reviews', controllers.updateReview)

// router.get('/books', controllers.getAllBooks)
// router.get('/books/:id', controllers.getBookById)
// router.patch('/books/:id', controllers.updateBook)
// router.delete('/books/:id', controllers.deleteBook)
// router.post('/books', controllers.updateBook)


// module.exports = router
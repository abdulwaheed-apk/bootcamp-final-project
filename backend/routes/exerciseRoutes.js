const router = require('express').Router()
const { body } = require('express-validator')
const {
  createExercise,
  getExercises,
  editExercise,
  deleteExercise,
  getExercisesByType,
} = require('../controllers/exerciseController')
const verifyToken = require('../middlewares/auth')

router.post(
  '/',
  body('exerciseName', '-m- Exercise Name is required').not().isEmpty().trim(),
  body('details', '-m- Exercise details is required').trim().escape(),
  createExercise
)
router.get('/', verifyToken, getExercises)
router.put('/:exerciseId', editExercise)
// router.patch('/:exerciseId', editExercise)
router.delete('/:exerciseId', deleteExercise)
router.get('/:type', getExercisesByType)

module.exports = router

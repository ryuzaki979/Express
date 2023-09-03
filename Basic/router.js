const { homeController, naruto, deathNote } = require("./controller")

const router = require("express").Router()

router.get('/',homeController)
router.get('/naruto',naruto)
router.get('/death-note', deathNote)
module.exports = router
const { Router } = require("express");
const { home, addPage, postAdd, edit, editData, deleteData } = require("../controllers/controller");
const upload = require("../middlewares/multer");
const { deleteMany } = require("../models/userSchema");


const router = Router()
router.get('/', home)
router.get('/add', addPage)
router.post('/insertData', upload, postAdd)
router.get('/edit', edit)
router.get('/editData/:id', editData)
router.get('/deleteData/:id',deleteData)

module.exports = router
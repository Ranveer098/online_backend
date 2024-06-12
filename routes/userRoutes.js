const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApis = require('../apis/userApis')

router.get('/find',userApis.userfind)
router.post('/insert',userApis.insert_user)
router.put('/update',userApis.update_user)
router.delete('/delete',userApis.delete_user)

module.exports = router
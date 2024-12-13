const express = require('express');
const router = express.Router();

const {createUser, getOneUser, getAllUsers, updateUser, deleteUser,loginUser} = require('../controller/controller')


// POST /users
router.post('/users', createUser);

// GET /getAllUsers/
router.get('/users', getAllUsers);
 
// GET /getOneUser/ :id
router.get('/users/:id', getOneUser);

// PATCH /updateUser/ :id
router.patch('/users/:id', updateUser);

//DELETE /deleteUser/:id
router.delete('/users/:id', deleteUser);

router.loginUser('/users', loginUser);


module.exports = router;





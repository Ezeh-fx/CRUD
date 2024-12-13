const userModel = require('../models/usermodel');
const bcrypt = require('../models/bcrypt');


//getAllUsers
 
 const getAllUsers = async (req,res) =>{
    try{
        const body = req.body
        const users = await userModel.find();

        return res.status(200).json({
            message: 'User gotten successfully',
            data: Users
        });
    } catch {
        res.status(500).json({
            message: 'error fetching user',
            error: error
        });
    }
}

//createUser

 const createUser = async (req, res) =>{
    try {
     const {username, email, password, created_at} = req.body;
     const newUser = await userModel.create({
        username,
        email,
        password,
        created_at
     })

     return res.status(201).json({
        message: 'User created successfully',
        data: newUser
     });
    } catch (error) {
        res.status(500).json({
            message: 'User not created',
            error: error.message,
        });
    }
}



//get one user

 const getOneUser = async (req,res) =>{
    try{
       const user = await userModel.findById(req.params.id);

       return res.status.json({
           message: 'User gotten successfully',
           data: user
       })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting the user',
            error: error.message
        });
    }
}


// update user

 const updateUser = async (req,res) =>{
    try{
       const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {password, email}, {new: true});
 
       return res.status(200).json({
          message: 'user updated successfully',
          data: updatedUser
       })
    } catch (err) {
       res.status(500).json({
        message: err.message,
        error: err.message
       });
    }
}


 const loginUser = async (req, res) => {
    const {userEmail, password} = req.body;

    const checkUser = await User.findOne({userEmail});

    if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
    }
}

 const deleteUser = async (req,res) => {
    try {

        if (!req.params.id) {
            return res.status(400).json({
                message: "Please provide an id to delete the user"
            });
        }
       const Delete = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting the user",
            error: error.message
        });
    }
}

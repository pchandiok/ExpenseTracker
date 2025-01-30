const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User');
const generateToken = require("../../middlewares/generateToken");

//Register
const registerUser = expressAsyncHandler(
    async (req, res) => {
        const {email, firstName, lastName, password} = req?.body;
    
        //check if user exists
        const userExists = await User.findOne({email: req.body.email});
        if(userExists)
            throw new Error("User already exists");
        try {
            
            const user = await User.create({email, firstName, lastName, password});
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    }
);

//fetch all users

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

//verify user
const loginUserCtrl = expressAsyncHandler(
    async (req, res) => {
        const { email, password } = req?.body;
        console.log(`Email: ${email}, Password: ${password}`);
        //find the user in DB
        const userFound = await User.findOne({email});

        if(userFound && await (userFound.isPasswordMatch(password)))
        {
            res.json({
                _id: userFound?._id,
                firstname: userFound?.firstName,
                lastname: userFound?.lastName,
                email: userFound?.email,
                isAdmin: userFound?.isAdmin,
                token: generateToken(userFound?._id)
            });
        }
        else
        {
            res.status(404);
            throw new Error("Invalid login credentials");
        }
    }
);

module.exports = {registerUser, fetchUsersCtrl, loginUserCtrl};
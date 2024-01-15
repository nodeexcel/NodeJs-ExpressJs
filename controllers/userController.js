const UserServices=require("../services/userServices");

async function userSignUp(req, res) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const UserData = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        };
        const response = await UserServices.userSignUp(UserData);
        return res
            .status(response.status)
            .json({ message: response.message, data: response.data });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message, data: {} });
    }
}

async function userSignIn(req, res) {
    try {
        const { email, password } = req.body
        const response = await UserServices.loginUser(email, password);
        res
            .status(response.status)
            .json({ message: response.message, data: response.data });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ status: "error", message: error.message, data: {} });
    }
}

module.exports = {
    userSignUp,
    userSignIn
}
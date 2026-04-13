export const RegisterUser = async (req , res) => {

    try {

        const {name , email , password , role , phone , avatar , } = req.body;
        
        if (!name || !email || !password || !role || !phone || !avatar) {
            return res.status(400).json({
                message: "Something is missing" ,
                success: false
            })
        }
    
    }

    catch (err) {
        
    }

}
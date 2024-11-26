// first we are initializing jsonwebtoken module to use functionalities of jwt eg; sign , verify

const jwt = require('jsonwebtoken')

// after successful register of user , and then calling the login endpoint with the already registered user, it will create 
//and return JWT token

const generateJwttoken = (userData) => {
    return jwt.sign(userData, process.env.PRIVATE_KEY,{expiresIn:400000});
}
// After login , we arre getting the token and for validating the jwt token that it is correct or not , we will proceed with secure
// routes, to GET/POST/UPDATE/DELETE

const validateJwtToken = (req,res,next) => {
    // we are checking that token is available or not in request headers
    const tokenCheck = req.headers.authorization

    //OPTION1 : req header token , authorization not sent (doesn't exists)
    if(!tokencheck) return res.status(401).json({err:'Token Not Available'});

    //OPTION2 : req header getting token : But not in a right format:
    // Authorization : Basic/BEARER
    //BASIC btoa(USERNAME:PASSWORD) -> BASIC hfdiuhdshfds [BASE64]
    // BEARER fdihushiufdshisdoisadsa

    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({err:'Invalid token'});
    }

    try{
        const validateToken = jwt.verify(token , process.env.PRIVATE_KEY);

        req.user = validatetoken;
        next();
    }catch(err){
        return res.status(401).json(err.message);
    }
}

module.exports={generateJwtToken, validatejwttoken}


import jwt from 'jsonwebtoken';



const generateToken = (id)=>{
    const token = jwt.sign({id,},"jisjf ijsfoijf jfisjjsflajfljdljobfjiuehwfiu",{expiresIn:"30d"});
    return token
}

export default generateToken

// import user from '../model/user-schema.js';


export const userSignup = async (request, response) => {
    try{
            console.log(request.body);
        // const exist = await user.findone({ username: request.body.username});
        // if(exist){
        //     return response.status(401).json({message: 'Username already exists'});
        // }

        // const user = request.body;
        // const newUser = new user(user);
        // await newUser.save();

        // response.status(200).json({message: user});
    }catch(error){
        // response.status(500).json({message: error.message});
    }

}
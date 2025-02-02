"use server"

import dbConnect, { collectionName } from "@/lib/dbConnect";
import bcrypt from "bcrypt"
const registerUser = async(payload) => {
    console.log(payload)
    const userCollection = dbConnect(collectionName.users)
    const {name,email,password} = payload
    const user = await userCollection.findOne({email : payload.email})

    if(!user){
        const hansedPassword = await bcrypt.hash(password, 10)
        payload.password = hansedPassword
        const result = await userCollection.insertOne(payload)
        const {acknowledged, insertedId} = result
        return {acknowledged, insertedId}
    }
    return {success : false}
};

export default registerUser;
import { connectMongoDb } from "../../app/libs/mongoconnect"
import Username from "../../app/models/taskModel"

export default async function handler(req,res){
  
    if(req.method !=="POST"){
    req.status(405).send({mes:"only POST request are allowed"})
    return
    }
    const {username,secret}=req.body
   try {
      await connectMongoDb()
      Username.create({username,secret}).then((data)=>{
        console.log(data)
        res.status(201).send(data)
      })
    }catch(err){
        console.log(err)
        req.status(400).send({err,msg:"something went wrong!"})
    }
 }
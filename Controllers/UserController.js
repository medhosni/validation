import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";


export async function signup  (req,res) {
    const {email, password} = req.body;
    const userfound =  await User.findOne({"email": email});
    
    if(userfound) {
        return res.status(403).json({error: "user is already exist !"});
    } else {
        const user = await User.create(req.body)
        const hash = await bcrypt.hash(password,10);
        user.password = hash;
        user.image = `/img/${req.file.filename}`        
        await user.save();
        return res.status(200).json({success : true});    
    }
    
}

export async function signin (req,res) {
    const {email,password} =  req.body;
    const user = await User.findOne({"email": email});
    if(!user){
        return res.status(403).json({error: "user not found"});
    }
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        return res.status(403).json({error : "password failed"})
    }
    const payload = {id:user.id};
    const token = jwt.sign(payload,process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });
    res.status(200).json({success: true , token: token});
}

export function getById (req,res) {    
    User.findById(req.params.id)
    .then((user) => {
        res.status(200).json({ User : user});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function getByuserName (req,res) {
    User.find({ userName : req.params.userName })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getByemail (req,res) {
    User.find({ email : req.params.email })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBypassword (req,res) {
    User.find({ password : req.params.password })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBytype (req,res) {
    User.find({ type : req.params.type })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   

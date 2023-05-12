import Film from "../models/Film.js";
import Tournage from "../models/Tournage.js";
import User from "../models/User.js";
import { json } from "express";

export function add (req, res) {
    Film.create({ 
    typeDeTournage:req.body.typeDeTournage,
    
    titre:req.body.titre,
     })
    .then(async newFilm => { 
    
    await newFilm.save();
        res.status(200).json(newFilm);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}
export function getAll (req,res) {
    Film.find()
    .then((Films) => {
        res.status(200).json({ Film : Films});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}
export function getById (req,res) {    
    Film.findById(req.params.id)
    .then((Films) => {
        res.status(200).json({ Film : Films});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function update (req,res) {
    Film.findOneAndUpdate({_id : req.params.id},req.body)
    .then((r) => {
        res.status(200).json({ message: "Film is updated !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

export async function remove (req,res) {
   const o = await Film.findOneAndDelete({_id : req.params.id})
   if(!o)
   {
    return res.status(404).json({ message: "Not found"});
    }
    await o.deleteOne()
    res.status(200).json({ message: "Film is deleted !"});
}

export function getBytypeDeTournage (req,res) {
    Film.find({ typeDeTournage : req.params.typeDeTournage })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBytitre (req,res) {
    Film.find({ titre : req.params.titre })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   

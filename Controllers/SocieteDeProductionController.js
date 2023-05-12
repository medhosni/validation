import SocieteDeProduction from "../models/SocieteDeProduction.js";
import Produit from "../models/Produit.js";
import Tournage from "../models/Tournage.js";
import { json } from "express";

export function add (req, res) {
    SocieteDeProduction.create({ 
    nom:req.body.nom,
     })
    .then(async newSocieteDeProduction => { 
    
    Produit.findByIdAndUpdate({
            _id: req.body.Produitid
        },
        {
            $push: {
                SocieteDeProductions: newSocieteDeProduction._id,
            },
        }
    ).catch((err=>{console.log(err);}))
    await newSocieteDeProduction.save();
        res.status(200).json(newSocieteDeProduction);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}
export function getAll (req,res) {
    SocieteDeProduction.find()
    .then((SocieteDeProductions) => {
        res.status(200).json({ SocieteDeProduction : SocieteDeProductions});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}
export function getById (req,res) {    
    SocieteDeProduction.findById(req.params.id)
    .then((SocieteDeProductions) => {
        res.status(200).json({ SocieteDeProduction : SocieteDeProductions});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function update (req,res) {
    SocieteDeProduction.findOneAndUpdate({_id : req.params.id},req.body)
    .then((r) => {
        res.status(200).json({ message: "SocieteDeProduction is updated !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

export async function remove (req,res) {
   const o = await SocieteDeProduction.findOneAndDelete({_id : req.params.id})
   if(!o)
   {
    return res.status(404).json({ message: "Not found"});
    }
    await o.deleteOne()
    res.status(200).json({ message: "SocieteDeProduction is deleted !"});
}

export function getBynom (req,res) {
    SocieteDeProduction.find({ nom : req.params.nom })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   

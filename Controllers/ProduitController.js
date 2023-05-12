import Produit from "../models/Produit.js";
import SocieteDeProduction from "../models/SocieteDeProduction.js";
import { json } from "express";

export function add (req, res) {
    Produit.create({ 
    localisationDeLaScene:req.body.localisationDeLaScene,
    
    codePostal:req.body.codePostal,
    
    longitude:req.body.longitude,
    
    latitude:req.body.latitude,
     })
    .then(async newProduit => { 
    
    await newProduit.save();
        res.status(200).json(newProduit);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}
export function getAll (req,res) {
    Produit.find()
    .then((Produits) => {
        res.status(200).json({ Produit : Produits});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}
export function getById (req,res) {    
    Produit.findById(req.params.id)
    .then((Produits) => {
        res.status(200).json({ Produit : Produits});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function update (req,res) {
    Produit.findOneAndUpdate({_id : req.params.id},req.body)
    .then((r) => {
        res.status(200).json({ message: "Produit is updated !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

export async function remove (req,res) {
   const o = await Produit.findOneAndDelete({_id : req.params.id})
   if(!o)
   {
    return res.status(404).json({ message: "Not found"});
    }
    await o.deleteOne()
    res.status(200).json({ message: "Produit is deleted !"});
}

export function getBylocalisationDeLaScene (req,res) {
    Produit.find({ localisationDeLaScene : req.params.localisationDeLaScene })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBycodePostal (req,res) {
    Produit.find({ codePostal : req.params.codePostal })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBylongitude (req,res) {
    Produit.find({ longitude : req.params.longitude })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBylatitude (req,res) {
    Produit.find({ latitude : req.params.latitude })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   

import User_watch_Film from "../models/User_watch_Film.js";
import Film from "../models/Film.js";
import User from "../models/User.js";
import { json } from "express";

export function add (req, res) {
    User_watch_Film.create(req.body)
    .then(async newwatch => { 
    await Film.findByIdAndUpdate({
            _id: Filmid
        },
        {
            $push: {
                User_watch_FilmId: newwatch._id,
            },
        }
    )
    await User.findByIdAndUpdate({
            _id: Userid
        },
        {
            $push: {
                User_watch_FilmId: newwatch._id,
            },
        }
    )
    await newwatch.save();
        res.status(200).json(newwatch);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}

export function getAll (req,res) {
    User_watch_Film.find()
    .then((watchs) => {
        res.status(200).json({ User_watch_Film : watchs});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}
export function getById (req,res) {    
    User_watch_Film.findById(req.params.id)
    .then((watchs) => {
        res.status(200).json({ User_watch_Film : watchs});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function update (req,res) {
    User_watch_Film.findOneAndUpdate({_id : req.params.id},req.body)
    .then((r) => {
        res.status(200).json({ message: "User_watch_Film is updated !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

export function remove (req,res) {
    User_watch_Film.findOneAndDelete({_id : req.params.id})
    .then((r) => {
        res.status(200).json({ message: "watch is Deleted !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}


const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// we will handle post req
router.post("/mens", async(req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMensRecords = await addingMensRecords.save();
        res.status(201).send(insertMensRecords);
    } catch(e) {
        res.status(400).send(e);
    }
})

// we will handle get req
router.get("/mens", async(req, res) => {
    try {
        const getMensRecords = await MensRanking.find({}).sort({"ranking": 1});
        res.status(201).send(getMensRecords);
    }catch(e) {
        res.status(400).send(e);
    }
})

// we will handle get req for individual
router.get("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMenRecord = await MensRanking.findById(_id);
        res.status(201).send(getMenRecord);
    } catch(e) {
        res.status(400).send(e);
    }
})

// we will handle patch req for individual
router.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateMenRecord = await MensRanking.findOneAndUpdate({_id}, req.body, {
            new: true
        });
        res.status(201).send(updateMenRecord);
    }catch(e) {
        res.status(500).send(e);
    }
})

// we will handle delete req
router.delete("/mens/:dob", async(req, res) => {
    try {
        const _dob = req.params.dob;
        const deleteMenRecord = await MensRanking.findOneAndUpdate({dob: _dob});
        res.status(201).send(deleteMenRecord);
    }catch(e) {
        res.status(400).send(e);
    }
})

module.exports = router;
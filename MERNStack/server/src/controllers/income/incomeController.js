const expressAsyncHandler = require('express-async-handler');
const Income = require("../../model/Income");

const createIncCtrl = expressAsyncHandler(
    async (req, res) => {
        const { title, amount, description, user } = req.body;
        try {
            const income = await Income.create({
                title,
                amount,
                description,
                user,
            });
            res.json(income);
        } catch (error) {
            res.json(error);
        }
    }
);

const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const income = await Income.find({});
        res.json(income)
    } catch (error) {
        res.json(error);
    }
});

const fetchIncCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income)
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createIncCtrl, fetchAllIncCtrl, fetchIncCtrl };
const mongoose = require('mongoose');

//Create User Schema
const incomeSchema = new mongoose.Schema(
    {
        title: {
            required: [true, "Title is required"],
            type: String
        },
        description: {
            required: [true, "Description is required"],
            type: String
        },
        type: {
            type: String,
            default: "Income"
        },
        amount: {
            required: [true, "Number is required"],
            type: Number
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User is required"]
        }
    }
    // },
    // {
    //     timestamp: true,
    // }
);

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    image: { type: String, default: "null" },
    id: { type: Number, require: true },
    nome: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, required: true },
    credential: { type: String, required: true, default: "CLI" },
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)('users', userSchema);
exports.default = User;

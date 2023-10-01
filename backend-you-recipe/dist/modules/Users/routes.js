"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const authUser_1 = require("../../infra/validations/users/authUser");
const userRoutes = (0, express_1.Router)();
userRoutes.post("/register", authUser_1.authRegistro, controller_1.default.create);
exports.default = userRoutes;

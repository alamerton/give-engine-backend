"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charity_controller_1 = __importDefault(require("../controllers/charity.controller"));
const router = (0, express_1.Router)();
router.get("/", charity_controller_1.default.getAll);
router.get("/:id", charity_controller_1.default.getCharity);
exports.default = router;

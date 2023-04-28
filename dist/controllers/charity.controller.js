"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Charity_1 = __importDefault(require("../models/Charity"));
class CharityController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            Charity_1.default.getAll((error, charities) => {
                if (error) {
                    res.status(500).json({ error });
                }
                else {
                    res.json({ charities });
                }
            });
        });
    }
    static getCharity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = JSON.stringify(req.body);
            Charity_1.default.getCharity(request, (error, charity) => {
                if (error) {
                    res.status(500).json({ error });
                }
                else {
                    res.json({ charity });
                }
            });
        });
    }
}
exports.default = CharityController;

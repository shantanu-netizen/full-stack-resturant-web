import mongoose from "mongoose";
import express, { Router } from "express";
import { login, register } from "./controllers/userContollers.mjs";
import contact from "./controllers/contactContollers.mjs";
const router=express.Router()
router.get('/', (req, res) => {
    res.send("Hello World")
})
router.post('/register', register)
router.post('/login', login)
router.post('/contact',contact)
export default router

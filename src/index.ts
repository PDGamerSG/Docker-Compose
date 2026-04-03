import { PrismaClient } from "@prisma/client/extension";
import { prisma } from "../lib/prisma.js";
import express from "express"

const app = express()
app.get("/",async (req,res)=>{
    const data = await prisma.user.findMany();
    res.json({
        "message":"get endpoint"
    })
})
app.post("/",async (req,res)=>{
    await prisma.user.create({
        data:{
            email:Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message":"post endpoint"
    })
})

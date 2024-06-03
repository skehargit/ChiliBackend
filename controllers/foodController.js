import foodModel from "../models/foodmodel.js";

// import fs from 'fs';

//add food item

const addFood=async(req,res)=>{
    const food= new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image,
        category:req.body.category,
    })
    
    try {
        await food.save();
        res.json({
            success:true,
            message:"food added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"unable to add food"
        })
    }
}

// all food list 
const listFood=async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({
            success:true,
            message:"found food list",
            data:foods,
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"not found"
        })
    }
}

// remove food item
const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({
            success:true,
            message:"food removed",
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"error"
        })
    }
}
export {addFood,listFood,removeFood}
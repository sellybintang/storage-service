const Storage = require ('../models/storageSchema')
const path = require ('path');
const sharp = require('sharp');
const fs = require('fs').promises

//CRUD 
// create profile
exports.createProfile = async (req,res)=>{
    try{
        const  fileInput = req.file.buffer
        console.log(fileInput)
        // const fileOutput = ('upload/output/')
        const fileOutput = path.resolve(__dirname,'upload','output')   
            // `/upload/output/${req.file.originalname}`)
        console.log(fileOutput)
        outputFileName = req.file.originalname
        const Output = path.join (fileOutput, outputFileName)

        await fs.mkdir(fileOutput, { recursive:true})


        const compressData = await sharp(fileInput).jpeg({
            quality: 20,
            chromaSubsampling: '4:4:4'
          }).toFile(Output)
            

        const {name, email, address, no_telp} = req.body
        console.log(name)
        const createNewProfile = await Storage.create( {name:name, email:email, no_telp:no_telp, address:address, photo:Output,
        })

        res.status(200).json({
            status:'Succes',
            message:'your date have submited', createNewProfile
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message:err.message
        })
    }
}

 
exports.getProfile = async (req, res)=>{
    try{
        const getNewProfile = await Storage.find()
        res.status(200).json({
            status: 'Succes',
            message:'Succesfully', getNewProfile
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message:err.message
        })
    }
}

exports.updateProfile = async(req,res)=>{
    try{
        const {name, email, address, no_telp} = req.body
        const id = req.params.id
        const updateNewProfile = await Storage.findByIdAndUpdate(id,{name:name, email:email, address:address, no_telp:no_telp})
        res.status(200).json({
            status:'Succes',
            message:'Succesfully', updateNewProfile
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
};

exports.deleteProfile = async(req, res)=>{
    try{
        const id = req.params.id
        const deleteNewProfile = await Storage.findByIdAndDelete(id)
        res.status(200).json({
            status:'Succes',
            message:'Succesfully', deleteNewProfile
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}



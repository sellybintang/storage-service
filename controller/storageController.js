const Storage = require ('../models/storageSchema')
const path = require ('path');
const zlib = require ('zlib')
//CRUD 
// create profile

exports.createProfile = async (req,res)=>{
    try{
    const photo= req.file.path
    const compressedData= zlib.deflateSync(photo)
        console.log(photo)
        // const {video_portofolio} = fs.readFileSync(path);
        // const{ file_resume} = fs.readFileSync(path)
        const {name, email, address, no_telp} = req.body

        const createNewProfile = await Storage.create( {name:name, email:email, no_telp:no_telp, address:address, photo:compressedData,
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




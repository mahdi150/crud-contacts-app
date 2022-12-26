const contact = require("../Model/Contact.model")

module.exports.createContact = async(req,res)=>{
    try{
        let{
            firstName ,
            lastName ,
            NumTel
        }=req.body ;
        let newContact = new contact({
            firstName : firstName ,
            lastName : lastName ,
            NumTel : NumTel
        })
        let savedContact = await newContact.save();
        return res.status(200).json({
            success : true ,
            savedContact
        })

    }catch(err){
        return res.status(400).json({
            success : false ,
            message: err.message
        })
    }
}

module.exports.UpdateContact = async(req,res)=>{
    
    try{
        let{
            firstName ,
            lastName ,
            NumTel
        }=req.body ;
        let updatedContact = await contact.findByIdAndUpdate(req.params.id,{
            $set : {
                firstName ,
                lastName ,
                NumTel
            }
        },
        {
            new : true 
        })
        return res.status(200).json({
            success : true ,
            updatedContact  , firstName , lastName , NumTel
        })

    }catch(err){
        return res.status(400).json({
            success : false ,
            message: err.message
        })
    }
}
module.exports.deleteContact = async(req,res)=>{
    try{
        await contact.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success : true ,
            message: "contact deleted successfully"  
        })

    }catch(err){
        return res.status(400).json({
            success : false ,
            message: err.message
        })
    }
}
module.exports.showContact =async (req,res)=>{
    try{
        let detailsContact =await  contact.findById(req.params.id) ;
        return res.status(200).json({
            success : true ,
            detailsContact
        })

    }catch(err){
        return res.status(400).json({
            success : false ,
            message: err.message
        })
    }
}
module.exports.getAllContact = async(req,res)=>{
    try{
    let contacts = await contact.find();
    return res.status(200).json({
        success : true ,
        contacts
    })

    }catch(err){
        return res.status(400).json({
            success : false ,
            message: err.message
        })
    }
}



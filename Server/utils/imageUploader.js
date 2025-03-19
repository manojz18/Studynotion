const cloudinary = require('cloudinary');
require('dotenv').config();
 
exports.imageUploadToCloudinary = async (file, folder, height, quality) => {
    try{
        const options = {folder};

        if(height){
            options.height = height;
        }

        if(quality){
            options.quality = quality;
        }
        options.resource_type= "auto";

        return await cloudinary.uploader.upload(file.tempFilePath, options)
        
    }catch(error){
        console.error("Error uploading image to Cloudinary:", error.message);
        throw error;
        // return res.status(500).json({
        //     success: true,
        //     message: `Something went wrong: ${message.error}`
        // })
    }
}
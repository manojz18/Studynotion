// const cloudinary = require('cloudinary');
// require('dotenv').config();
 
// exports.imageUploadToCloudinary = async (file, folder, height, quality) => {
//     try{
//         const options = {
//             folder,
//             resource_type: "auto",
//         };

//         if(height){
//             options.height = height;
//         }

//         if(quality){
//             options.quality = quality;
//         }

//         // Detect file type from mimetype
//         const isVideo = file.mimetype.startsWith("video/")
//         options.resource_type = isVideo ? "video" : "auto"
//         // options.resource_type= "auto";

//         return await cloudinary.uploader.upload(file.tempFilePath, options)
        
//     }catch(error){
//         console.error("Error uploading image to Cloudinary:", error.message);
//         throw error;
//         // return res.status(500).json({
//         //     success: true,
//         //     message: `Something went wrong: ${message.error}`
//         // })
//     }
// }

const cloudinary = require('cloudinary').v2;
require('dotenv').config();
 
exports.imageUploadToCloudinary = async (file, folder, height, quality) => {
    try {
        // Validate file exists
        if (!file || !file.tempFilePath) {
            throw new Error('No file provided or invalid file');
        }

        const options = {
            folder,
            resource_type: "auto",
        };

        if (height) {
            options.height = height;
        }

        if (quality) {
            options.quality = quality;
        }

        // Enhanced file type detection logic
        // Force resource_type to "video" for video files
        if (file.mimetype && file.mimetype.startsWith("video/")) {
            console.log("Processing video file:", file.mimetype);
            options.resource_type = "video";
        } else if (file.mimetype && file.mimetype.startsWith("image/")) {
            console.log("Processing image file:", file.mimetype);
            options.resource_type = "image";
        } else {
            console.log("Processing auto-detected file:", file.mimetype);
            options.resource_type = "auto";
        }

        console.log("Uploading to Cloudinary with options:", options);
        
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        console.log("Upload successful, result:", result);
        return result;
        
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw new Error(`Invalid ${options?.resource_type || 'file'} file: ${error.message}`);
    }
}


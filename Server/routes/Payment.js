// const express = require('express');
// const router = express.Router();

// const {capturePayment, verifyPayment} = require('../controllers/Payments')
// const {authenticate, isAdmin, isInstructor, isStudent} = require('../middlewares/auth')

// // ******************************************************************************
// //                     Payment routes
// // ******************************************************************************

// // route for capturing payment
// router.post('/capturePayment', authenticate, isStudent, capturePayment);

// // route for verifying payment signature
// router.post('/verifySignature', verifyPayment);

// // export the router
// module.exports = router;


// Import the required modules
const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { authenticate, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", authenticate, isStudent, capturePayment)
router.post("/verifyPayment",authenticate, isStudent, verifyPayment)
router.post("/sendPaymentSuccessEmail", authenticate, isStudent, sendPaymentSuccessEmail);

module.exports = router
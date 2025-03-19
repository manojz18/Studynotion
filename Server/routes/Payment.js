const express = require('express');
const router = express.Router();

const {capturePayment, verifyPayment} = require('../controllers/Payments')
const {authenticate, isAdmin, isInstructor, isStudent} = require('../middlewares/auth')

// ******************************************************************************
//                     Payment routes
// ******************************************************************************

// route for capturing payment
router.post('/capturePayment', authenticate, isStudent, capturePayment);

// route for verifying payment signature
router.post('/verifySignature', verifyPayment);

// export the router
module.exports = router;

const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: 'rzp_test_C8YsZwKnR3PcHi', //process.env.RAZORPAY_KEY,
    key_secret: 'Nfj2MR8ZZ8RubznujsQwlCvq' //process.env.RAZORPAY_SECRET,
});

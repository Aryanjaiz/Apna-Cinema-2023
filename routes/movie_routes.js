const express=require('express');
const router=express.Router();
const{homepage,bookingpage,paymentpage,payment,upcoming,user,ticket}=require("../controllers/movie_controller");

router.route('/home').get(homepage); 
router.route('/').get(homepage);

//now showing
router.route('/johnwick').get(bookingpage);
router.route('/johnwick/payment').get(paymentpage);
router.route('/johnwick/payment').post(payment);

router.route('/missionimpossible').get(bookingpage);
router.route('/missionimpossible/payment').post(payment);
router.route('/missionimpossible/payment').get(paymentpage);

router.route('/satyaprem').get(bookingpage);
router.route('/satyaprem/payment').post(payment);
router.route('/satyaprem/payment').get(paymentpage);


//upcoming router
router.route('/oppenheimer').get(upcoming);
router.route('/barbie').get(upcoming);
router.route('/omg2').get(upcoming);



//router for tickets
router.route('/user').get(user);
router.route('/ticket').get(ticket);


// router.route('/contact').get(contact); 
// router.route('/contact').post(usermessage); 
// router.route('/about').get(about); 
// router.route('/gallery').get(gallery); 

module.exports = router;
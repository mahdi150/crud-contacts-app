const contactController = require('../controller/contactController')
const router = require('express').Router() ;

router.get("/all",contactController.getAllContact);
router.get("/show/:id",contactController.showContact);
router.put("/edit/:id",contactController.UpdateContact) ;
router.post("/new",contactController.createContact);
router.delete("/delete/:id",contactController.deleteContact)

module.exports = router ;
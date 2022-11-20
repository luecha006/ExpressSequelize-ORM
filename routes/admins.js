const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin.controller");


router.get('/', adminController.findAllAdmins);
router.post('/create', adminController.createAdmin);
router.get('/admin/:id', adminController.findAdminById);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

module.exports = router;
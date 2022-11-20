const adminService = require("../services/admin.service");

const createAdmin = async (req, res) => {
    try {
        const admin = await adminService.createAdmin(req);
        return res.status(201).json({
            status: 201
            , data: admin
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.findAllAdmins();
        return res.status(200).json({
            status: 200
            , data: admins
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const findAdminById = async (req, res) => {
    try {
        const admin = await adminService.findAdminById(req, res);
        if (admin.length === 0) {
            return res.status(404).json({
                status: 404
                , message: `Admin not found.`
            });
        }
        return res.status(200).json({
            status: 200
            , data: admin
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const updateAdmin = async (req, res) => {
    try {
        const admin = await adminService.updateAdmin(req);
        return res.status(201).json({
            status: 201
            , data: admin
        });
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

const deleteAdmin = async (req, res) => {
    try {
        await adminService.deleteAdmin(req);
        return res.status(204).json({});
    } catch (e) {
        return res.status(500).json({
            status: 500
            , message: `Internal Server Error.`
        });
    }
}

module.exports = {
    createAdmin
    , findAllAdmins
    , findAdminById
    , updateAdmin
    , deleteAdmin
}

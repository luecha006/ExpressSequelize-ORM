const models = require("../models/index");

const Admin = models.Admin;

const createAdmin = async (req) => {
    const data = {
        ...req.body
        , createdAt: new Date()
        , updatedAt: new Date()
    };
    return await Admin.create(data);
}

const findAllAdmins = async () => {
    return await Admin.findAll();
}

const findAdminById = async (req) => {
    const adminId = req.params.id;
    return await Admin.findAll({
        where: {
            id: adminId
        }
    });
}

const updateAdmin = async (req) => {
    const adminId = req.params.id;
    const data = {
        ...req.body
        , updatedAt: new Date()
    };
    await Admin.update(data, {
        where: {
            id: adminId
        }
    });
    return await Admin.findAll({
        where: {
            id: adminId
        }
    });
}

const deleteAdmin = async (req) => {
    const adminId = req.params.id;
    return await Admin.destroy({
        where: {
            id: adminId
        }
    });
}

module.exports = {
    createAdmin
    , findAllAdmins
    , findAdminById
    , updateAdmin
    , deleteAdmin
}
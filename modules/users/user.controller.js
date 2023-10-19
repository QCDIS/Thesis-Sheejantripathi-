const mongoose = require("mongoose");

const Model = require("./user.model");

class UserController {
    async findUser(payload) {
        let result = await Model.findOne(payload);
        return result ? result : '';
    }

    async getById(userID) {
        return Model.findById(userID)
    }

    async addUser(payload) {
        return Model.create(payload)
    }

    async updateUser(userID, payload) {
        return Model.findByIdAndUpdate(userID, payload);
    }

}
module.exports = new UserController();
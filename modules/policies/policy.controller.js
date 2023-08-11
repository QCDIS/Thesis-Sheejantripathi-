const mongoose = require("mongoose");
const moment = require("moment");
// const { DataUtils } = require("../../helpers/utils");
// const { ERR } = require("../../helpers");
const Model = require("./policy.model");

const { ObjectId } = mongoose.Types;

class PolicyController {
  async addPolicy(payload) {
    //versioning of the new-policies based on the timestamp
    const policy_version = moment(Date.now()).format("YYYY-MM-DD-HHmmss");
    payload.policy_version = `POLICY-${payload.assetId}-${policy_version}`;

    const policypayload = { ...payload };
    return await Model.create(policypayload);
  }

  newPolicy(payload) {
    return Model.create(payload);
  }

  getById(id) {
    return Model.findById(id);
  }

  getByName(name) {
    return Model.findOne(name);
  }
}

module.exports = new PolicyController();

const Admin = require("../models/Admin");
const md5 = require("md5");
const { Op } = require("sequelize");
const validate = require("validate.js");
const moment = require("moment");
exports.addAdmin = async function (obj) {
  const rule = {
    loginId: {
      presence: {
        allowEmpty: false,
      },
    },
    loginPwd: {},
  };
  await validate.async(obj, rule);
  obj.loginPwd = md5(obj.loginPwd);
  const result = await Admin.create(obj);
  return result.toJSON();
};

exports.deleteAdmin = async function (id) {
  return await Admin.destroy({
    where: {
      id,
    },
  });
};

exports.updateAdmin = async function (id, obj) {
  if (obj.loginPwd) {
    obj.loginPwd = md5(obj.loginPwd);
  }
  await Admin.update(obj, {
    where: {
      id,
    },
  });
  return result;
};

exports.getAdminById = async function (id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getAdmins = async function () {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
};

exports.login = async function (loginId, loginPwd) {
  loginPwd = md5(loginPwd);
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd,
    },
  });
  if (result && result.loginId === loginId) {
    return result.toJSON();
  }
  return null;
};

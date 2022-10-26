var { PrismaClient } = require('@prisma/client');

var prisma = new PrismaClient();

exports.getUsers = async (req, res, next) => {
  try {
    var users = await prisma.user.findMany({});
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  var { firstName, lastName, salary } = req.body;

  try {
    var user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        salary: Number(salary),
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUserById = async (req, res, next) => {
  var { firstName, lastName, salary } = req.body;
  var { id } = req.params;

  try {
    var user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        firstName,
        lastName,
        salary: Number(salary),
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteUserById = async (req, res, next) => {
  var { id } = req.params;

  try {
    var user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

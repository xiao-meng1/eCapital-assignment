var { PrismaClient } = require('@prisma/client');
var data = require('../data/data.json');

var prisma = new PrismaClient();

async function main() {
  data.employees.forEach(async (employee) => {
    const newUser = await prisma.user.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        salary: employee.salary,
      },
    });

    console.log({ newUser });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

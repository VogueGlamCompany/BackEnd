require("dotenv").config();
const { sequelize } = require("./src/db");
const server = require("./src/server");


server.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  });
  
//   sequelize.sync({ force: false })
//     .then(() => {
//       console.log('Database synchronized successfully.');
//     })
//     .catch(err => {
//       console.error('Error synchronizing the database:', err);
//     });
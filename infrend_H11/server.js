const express = require('express');
const cors = require('cors'); 
const sequelize = require('./models/config/database');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json());
app.use(cors());

app.use('/todos', todoRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to synchronize database:', error);
  });

const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

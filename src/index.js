require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDataBase = require('./database/database');
const usersRoutes = require('./users/users.routes');
const authRoute = require('./auth/auth.routes');
const charactersRoutes = require('./characters/characters.routes');
const swaggerRoute = require('./swagger/swagger.routes');

const port = process.env.PORT || 3001;
const app = express();

connectDataBase();

app.use(cors());
app.use(express.json());

app.use('/users/', usersRoutes);
app.use('/auth/', authRoute);
app.use('/characters/', charactersRoutes);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

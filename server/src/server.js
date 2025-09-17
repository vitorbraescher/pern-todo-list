import express from 'express';
import cors from 'cors';
import todosRoutes from '../routes/todosRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/todos', todosRoutes);

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
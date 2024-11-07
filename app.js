import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

process.on('SIGINT', () => {
    console.log('Closing application...');
    end().then(() => {
        console.log('Database connection closed.');
        process.exit(0);
    });
});

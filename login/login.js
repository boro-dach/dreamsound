// Это серверный код, используйте Node.js для его запуска
import express from 'express'
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('http://localhost:5000/validate', async (req, res) => {
    const { login, password } = req.body;
    // здесь валидация логина и пароля

    try {
        await client.connect();
        const database = client.db("vinyl");
        const vinyl = database.collection("users");
        // здесь операции с базой данных, например, поиск пользователя

        res.status(200).json({ message: 'Проверка прошла успешно' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
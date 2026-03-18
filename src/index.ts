import express from 'express';

const app = express();
app.use(express.json());

app.post('/chat', (req, res) => {
    const message = req.body.message;

    let reply = "Не понимаю";

    if (message.toLowerCase().includes("привет")) {
    reply = "Привет!";
} else if (message.toLowerCase().includes("как дела")) {
    reply = "У меня всё отлично!";
}

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
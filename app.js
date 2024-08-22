import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//Directory path
const _dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Configurations
app.use(express.static(_dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(_dirname + '/Views/signup.html');
});




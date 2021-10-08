const express = require('express');
const cors = require('cors');
const server = require('http');
import { v4 as uuidv4 } from 'uuid'

const app = express()
const serve = server.Server(app);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/live', (req, res) => {
    res.send({ link: uuidv4() });
})

serve.listen(port, () => {
    console.log(`Listening on the port ${port}`);
}).on('error', e => {
    console.error(e);
});
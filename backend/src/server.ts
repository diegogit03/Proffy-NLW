import express from 'express';
import routes from './routes';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
    next();
});


app.use(express.json());
app.use(routes);

app.listen(8080);
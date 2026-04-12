import express from 'express';
import clientsRouter from './Router/clients';
import usersRouter from './Router/users';
import productsRouter from './Router/products';
import ordersRouter from './Router/orders';
import db from "./db"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/clients', clientsRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/', (req, res) => {
  res.redirect('/clients');
});

app.set('view engine', 'pug');
app.set('views', './Views');

db.sync().then(() => {
    console.log(`Conectado com o banco de dados: ${process.env.DB_NAME}`)
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });
});



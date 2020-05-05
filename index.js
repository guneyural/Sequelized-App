const app = require('express')();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');

// GET INPUT DATA
app.use(require('express').json());

// SET UP USER ROUTES
app.use('/api/user/profile', routes.User.Profile); //OK
app.use('/api/user/product', routes.User.Product); 
app.use('/api/user/order', routes.User.Order); //OK

// SET UP SELLER ROUTES
app.use('/api/seller/profile', routes.Seller.Profile); //OK
app.use('/api/seller/product', routes.Seller.Product); //OK

app.get('/', (req, res) => {
    res.send("This is the home page of this api. For testing go /api/user/product");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
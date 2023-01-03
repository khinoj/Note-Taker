//Get Express
const express = require('express');
const apiRoutes = require('../routes/apiRoutes');
const htmlRoutes = require('../routes/htmlRoutes');

const app = express();

// Listen to this Port
const PORT = process.env.PORT || 4000;  //maybe need 3000?

//Setup Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)



app.listen(PORT, function () {
    console.log('Server Lisening on http://localhost' + PORT);
})



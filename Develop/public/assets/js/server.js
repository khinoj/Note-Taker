// //Get Express
// const express = require('express');
// const apiRoutes = require('../routes/apiRoutes');
// const htmlRoutes = require('../routes/htmlRoutes');

// const app = express();

// // Listen to this Port
// const PORT = process.env.PORT || 4000;  //maybe need 3000?

// //Setup Express
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes)



// app.listen(PORT, function () {
//     console.log('Server Lisening on http://localhost' + PORT);
// })

/// From Class

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/paths', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);


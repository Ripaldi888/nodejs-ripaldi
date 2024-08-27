const express = require('express');
const app = express();
const port = 5000;

app.use('/api/goals', require('./Routes/goalRoutes'))

app.listen(port,() => {
    console.log(`server berjalan pada port ${port}`);
})


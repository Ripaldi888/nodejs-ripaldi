const express = require('express');
const app = express();
const port = 5000;
const logRequest = require('./middleware/logs');
const { errorHandler } = require('./middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(logRequest)
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port,() => {
    console.log(`server berjalan pada port ${port}`);
})


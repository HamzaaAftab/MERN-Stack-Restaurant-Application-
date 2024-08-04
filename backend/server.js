import app from './app.js';

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});

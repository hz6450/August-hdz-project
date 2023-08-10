import app from "./server.js"

const PORT = 4885;

const handleListening = () => 
    console.log(`server open to http://localhost:${PORT}`);

app.listen(PORT, handleListening);
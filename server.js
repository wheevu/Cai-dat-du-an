const app = require("./app");
const config = require("./app/config");
const MongoDB = require(" ./app/utils/mongodb.util");

// start server

const PORT = config.app.port;
app.listen (PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console. Log("Connected to the database!");
        
        const PORT = config.app.port;
        app.listen (PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console. Log("Cannot connect to the database!", error); 
        process.exit;
    }
}
startServer;


var config = {
        port: process.env.port || 2000,
        db: process.env.MONGOLAB_URI || "mongodb://127.0.0.1/todoapi",
        test_port: 2001,
        test_db: "mongodb://localhost/todoapi_test"

}
module.exports= config;
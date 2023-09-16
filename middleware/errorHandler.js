const errorHandler = (err, req, res, next) =>{
    // choosing the status code either passed value, if not 500
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (key) {
        case 400:
            res.json({title: "Validation Failed", message: err.message, stackTrace: err.stack});
            break;
        case 404:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break;
        default:
            break;
    }
};

module.exports = errorHandler();
function globalErrorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    let statusCode = err.status || 500;
    res.status(statusCode);
    let errorResponse = {
        error: {
            message: err.message || 'An unexpected error occurred'
        }
    };
    res.json(errorResponse);
}

module.exports={
    globalErrorHandler
}
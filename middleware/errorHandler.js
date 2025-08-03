const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || res.statusCode || 500;

    let customMessage = '';

    switch (statusCode) {
        case 400:
            customMessage = 'Bad Request';
            break;
        case 401:
            customMessage = 'Unauthorized';
            break;
        case 403:
            customMessage = 'Forbidden';
            break;
        case 404:
            customMessage = 'Not Found';
            break;
        case 500:
        default:
            customMessage = 'Internal Server Error';
            break;
    }

    res.status(statusCode).json({
        success: false,
        message: err.message || customMessage,
        type: customMessage,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = errorHandler;

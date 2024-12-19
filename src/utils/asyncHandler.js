// Its main goal is to make it easier to handle errors (like network issues, database errors, etc.)
//  in asynchronous functions.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler};
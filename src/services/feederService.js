exports.feedCat = () => {
    return {
        status: 'success',
        message: 'The cat has been fed successfully!',
        time: new Date().toISOString()
    };
}
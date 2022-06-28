module.exports = (error, request, response, next) => {
    console.log('###error handler');
    console.log(error);
    response.sendStatus(500);
  };
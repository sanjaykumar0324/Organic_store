const customLoggerMiddleware = store => next => action => {
    console.log('Dispatching Action ... ::', action);
    return next(action);
  };
  
  export default customLoggerMiddleware;
  
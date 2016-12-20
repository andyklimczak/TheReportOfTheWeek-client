// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;
var NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');

var API_URL = NODE_ENV === JSON.stringify('development') ? JSON.stringify('http://localhost:3001') : JSON.stringify('https://thereportoftheweek-api.herokuapp.com');

module.exports = Object
  .keys(process.env)
  .filter(key => REACT_APP.test(key))
  .reduce((env, key) => {
    env['process.env.' + key] = JSON.stringify(process.env[key]);
    return env;
  }, {
    'process.env.NODE_ENV': NODE_ENV,
    'process.env.API_URL': API_URL
  });


module.exports = app => {

  app.use('/api', require('./apiRoutes'));
  
  app.use((req, res) => {
      res.status(404).send("<h1>404 Error!</h1>")
  })
};
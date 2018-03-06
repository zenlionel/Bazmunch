import App from './server';


var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener
// ensure environment variables are loaded


// Requiring our models for syncing

const app = App(__dirname);

//use sync({force:true}) to drop all tables before trying to create
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});

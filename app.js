let express = require('express'),
  routes = require(__dirname + '/routes/routes.js'),
  cookieParser = require('cookie-parser'),
  multer = require('multer'),
  flash = require('express-flash'),
  csurf = require('csurf'),
  helmet = require('helmet'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  UserModel = require(process.cwd() + '/models/User');
  app = module.exports = express();


const storage = multer({
  dest: __dirname + '/public/uploads'
});

const upload = multer({ storage: storage });


// Parse form data, usage: req.body.fieldname
app.use(bodyParser.urlencoded({extended: true}));


// cookieParser needed to expose cookies to req.cookies
app.use(session({
  cookie: { maxAge: 1000000 },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// Helmet - adds security to HTTP requests
app.use(helmet());

// Cookies and sessions
app.use(cookieParser('Keyboard cat'));

// Flash messages
app.use(flash());

// CSURF - adds csrf tokens, IMPORTANT! add hidden field with generated token as value to every form
// reference: https://www.sitepoint.com/forms-file-uploads-security-node-express/
//app.use(csurf({cookie: true}));

//serve static files from the public folder
app.use('/public', express.static('public'))

//set views directory
app.set('views', __dirname + '/public/views')

// set the view engine to ejs
app.set('view engine', 'ejs');

// routing
app.use('/', routes);

// starting server
if (!module.parent) {
  let server = app.listen(3000);
  let io = require('socket.io')(server)
  let users = []

  io.on('connection', (socket) => {
    console.log('PLAYER CONNECTED ' + users.length)
    socket.emit('Connected', 'Connected')

    socket.on('user_info', (player) => {
      users.push(player)
      if (users.length == 2) {
        io.sockets.connected[users[users.length - 1].socketID].emit('battle_users', users)
        io.sockets.connected[users[users.length - 2].socketID].emit('battle_users', users)
      }
    })

    socket.on('turn_over_1', (obj) => {
      if (obj.socketID == obj.socketID2) {
        console.log("Aint happening....");
      } else {
          if (obj.hp <= 0) {
              //player 1 won
              io.sockets.connected[users[users.length - 1].socketID].emit("lost", obj.hp);
            io.sockets.connected[users[users.length - 2].socketID].emit("won", obj.hp);
            UserModel.addWin(obj.userID);
            UserModel.addLose(obj.userID2);

          } else {
              io.sockets.connected[users[users.length - 1].socketID].emit("turn_2", obj.hp);
          }
      }
    })

    socket.on('turn_over_2', (obj) => {
      if (obj.socketID == obj.socketID2) {
        console.log("Something went wrong....");
      } else {
          if (obj.hp <= 0) {
              //player 2 won
            io.sockets.connected[users[users.length - 1].socketID].emit("won", obj.hp);
            io.sockets.connected[users[users.length - 2].socketID].emit("lost", obj.hp);
            UserModel.addWin(obj.userID);
            UserModel.addLose(obj.userID2)
          } else {
              io.sockets.connected[users[users.length - 2].socketID].emit("turn_1", obj.hp)
          }
      }
    })

    socket.on('PvEWon', (userID) => {
      UserModel.addExpPvE(UserModel.get(userID))
    })

    socket.on('disconnect', () => {
      console.log('player disconnected')
    })


  })

}


  
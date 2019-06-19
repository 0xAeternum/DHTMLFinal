let express = require('express'),
  router = express.Router(),
  authorizationHandler = require(process.cwd() + '/middleware/Authorization')
  userController = require(process.cwd() + '/controllers/UserController'),
  homeController = require(process.cwd() + '/controllers/HomeController'),
  pageController = require(process.cwd() + '/controllers/PageController'),
  pvpController = require(process.cwd() + '/controllers/PvPController'),
  pveController = require(process.cwd() + '/controllers/PvEController');


// middleware
//router.get('/:any', authorizationHandler.authorization);

/**
 * ROUTES
 */
router.get('/', homeController.home);
router.post('/login', userController.login);
router.post('/register', userController.create);
router.get('/main_page', pageController.welcome)
router.get('/class_selection', pageController.classSelection)
router.post('/main_page', userController.setHeroClass)
router.get('/pvp', pvpController.addGame)
router.get('/dungeon', pveController.startGame)
// router.get('/:model', adminController.list);
// router.get('/:model/new', adminController.new);
// router.get('/:model/edit/:id', adminController.edit);

// router.post('/:model/new', adminController.create);
// router.post('/:model/edit/:id', adminController.update);
router.get('/logout', userController.logout)

module.exports = router;
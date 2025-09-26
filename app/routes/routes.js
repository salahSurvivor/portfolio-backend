module.exports = app =>{
    const portfolioController = require('../controllers/portfolioController');
    const categoryController = require('../controllers/categoryControllers');
    const msgController = require('../controllers/messagesController');
    const cvController = require('../controllers/cvController');
    const usersController = require('../controllers/usersController');

    const multer = require('multer');

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, '../front-end/src/assets/uploads/'); // Destination folder for uploaded files
        },
        filename: function (req, file, cb) {
        cb(null, file.originalname); // Use original filename
        }
    });

    // Create multer middleware
    const upload = multer({ storage: storage });

    app.post('/upload', upload.array('images'), portfolioController.upload);

    app.get('/portfolio', portfolioController.readPortfolio);

    app.post('/portfolio', portfolioController.createPortfolio);

    app.put('/portfolio/:id', portfolioController.updatePortfolio);

    app.delete('/portfolio/:id', portfolioController.deletePortfolio);

    //category controller Section
    app.post('/category', categoryController.createCategory);
    app.get('/category', categoryController.readCategory);

    //category controller Section
    app.post('/msg', msgController.createMsg);
    app.get('/msg', msgController.readMsg);
    app.post('/send', msgController.emailSend);

    //cv controller Section
    app.post('/cv', cvController.createCv);
    app.get('/cv', cvController.readCv);
    app.put('/cv/:id', cvController.updateCv);

    //login controller Section
    app.get('/users', usersController.readUsers);
    app.post('/users', usersController.login);
    app.post('/register', usersController.register);

    //try
    app.get('/try', cvController.tryFunc);
};
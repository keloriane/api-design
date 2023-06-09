import express from 'express';

const router = express.Router();


/**
 * Products
 */


router.get('/products', (req, res) => {
    res.json({message: "You there !!!!"});
});

router.get('/product/:id', (req, res) => {
    res.send('Product');
});
router.put('/product/:id', (req, res) => {
    res.send('Product');
});
router.post('/product', (req, res) => {
    res.send('Product');
});
router.delete('/product/:id', (req, res) => {
    res.send('Product');
});

/**
 * Updates.ts
 */

router.get('/updatepoints', (req, res) => {
    res.send('Products');
});

router.get('/updatepoint/:id', (req, res) => {
    res.send('Product');
});
router.put('/updatepoint/:id', (req, res) => {
    res.send('Product');
});
router.post('/updatepoint/', (req, res) => {
    res.send('Product');
});
router.delete('/updatepoint/:id', (req, res) => {
    res.send('Product');
});

/**
 * Users
 */

router.get('/users', (req, res) => {
    res.send('Users');
});

router.get('/user/:id', (req, res) => {
    res.send('User');
});

router.put('/user/:id', (req, res) => {
    res.send('User');
});

router.post('/user', (req, res) => {
    res.send('User');
});

router.delete('/user/:id', (req, res) => {
    res.send('User');
})


export default router;
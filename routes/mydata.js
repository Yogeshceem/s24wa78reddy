import { Router } from 'express';
var router = Router();

/* GET the page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Yogesh' });
});

export default router;
import { Router } from 'express';

const router = Router();

router.get('/signup', (req, res) => {
  res.send('hola mundo');
});

export default router;

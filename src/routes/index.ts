import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

export default router;

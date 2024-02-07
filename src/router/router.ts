import { Router } from 'express';

const router = Router();


router.get('/', (_req, res) => {
    return res.status(200).json({ mensagem: 'Hello World!' })
});

router.get('/teste', (req, res) => {
    return res.json({ mensagem: 'Passou no teste.' });
})

export default router;
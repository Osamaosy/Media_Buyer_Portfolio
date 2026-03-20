const express = require('express');
const router = express.Router();
const { Project } = require('../models/Project');
const { upload } = require('../config/cloudinary');
const auth = require('../middleware/auth');

// PUBLIC
router.get('/', async (req, res) => {
  try { res.json(await Project.findAll({ order: [['createdAt', 'DESC']] })); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const p = await Project.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// PROTECTED — require valid JWT
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const body = req.body;
    const projectData = {
      title: typeof body.title === 'string' ? JSON.parse(body.title) : body.title,
      description: typeof body.description === 'string' ? JSON.parse(body.description) : body.description,
      technologies: typeof body.technologies === 'string' ? JSON.parse(body.technologies) : body.technologies,
      image: req.file ? req.file.path : (body.image || ''),
      githubLink: body.githubLink || null,
      liveLink: body.liveLink || null,
    };
    res.status(201).json(await Project.create(projectData));
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const p = await Project.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    const body = req.body;
    const updateData = {
      title: typeof body.title === 'string' ? JSON.parse(body.title) : body.title,
      description: typeof body.description === 'string' ? JSON.parse(body.description) : body.description,
      technologies: typeof body.technologies === 'string' ? JSON.parse(body.technologies) : body.technologies,
      githubLink: body.githubLink || null,
      liveLink: body.liveLink || null,
    };
    if (req.file) {
      updateData.image = req.file.path;
    } else if (body.image) {
      updateData.image = body.image;
    }
    res.json(await p.update(updateData));
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const p = await Project.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    await p.destroy();
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;

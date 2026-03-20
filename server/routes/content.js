const express = require('express');
const router = express.Router();
const SiteContent = require('../models/SiteContent');
const auth = require('../middleware/auth');

// PUBLIC
router.get('/', async (req, res) => {
  try { res.json((await SiteContent.findOne()) || {}); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

// PROTECTED
router.put('/:section', auth, async (req, res) => {
  try {
    const { section } = req.params;
    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({ [section]: req.body });
    } else {
      content[section] = req.body;
      await content.save();
    }
    res.json(content);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;

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
      // إذا كان أول سجل، نقوم بإنشائه بالقسم المطلوب فقط
      content = await SiteContent.create({ [section]: req.body });
    } else {
      // تحديث القسم المحدد فقط
      content[section] = req.body;
      // إخبار Sequelize أن هذا الحقل (JSONB) قد تغير ليتم حفظه
      content.changed(section, true); 
      await content.save();
    }
    res.json(content);
  } catch (err) { 
    console.error(err);
    res.status(400).json({ message: err.message }); 
  }
});

module.exports = router;
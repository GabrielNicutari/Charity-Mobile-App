const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Organisation = mongoose.model('Organisation');

const router = express.Router();

router.use(requireAuth);

router.get('/organisations', async (req, res) => {
  const organisations = await Organisation.find();
  console.log(organisations);
  res.send(organisations);
});

router.post('/organisations', async (req, res) => {
  const {
    name,
    bannerImage,
    logo,
    motto,
    keywords,
    monthlyGoal,
    totalProgress,
    overview,
    category,
    history,
    achievements,
    gallery
  } = req.body;

  try {
    const organisation = new Organisation({
      name: name ? name : 'test name',
      bannerImage: bannerImage ? bannerImage : 'test',
      logo: logo ? logo : 'test',
      motto: motto ? motto : 'test motto',
      keywords: keywords ? keywords : ['test', 'test2', 'test3'],
      monthlyGoal: monthlyGoal ? monthlyGoal : 100,
      totalProgress: totalProgress ? totalProgress : 75,
      overview: overview ? overview : 'test',
      category: category ? category : 'category',
      history: history ? history : ['Event #1', 'Event #2', 'Event #3'],
      achievements: achievements ? achievements : [],
      gallery: gallery ? gallery : []
    });
    await organisation.save();
    console.log(organisation);
    res.send(organisation);
  } catch (e) {
    res.status(422).send({ error: e.message });
  }
});

module.exports = router;

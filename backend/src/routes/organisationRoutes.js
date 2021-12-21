const express = require('express');
const mongoose = require('mongoose');

const Organisation = mongoose.model('Organisation');

const router = express.Router();

router.get('/organisations', async (req, res) => {
  const organisations = await Organisation.find();
  console.log(organisations);
  res.send(organisations);
});

router.post('/organisations', async (req, res) => {
  const {
    name,
    bannerImage,
    motto,
    keywords,
    monthlyGoal,
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
      motto: motto ? motto : 'test motto',
      keywords: keywords ? keywords : ['test', 'test2', 'test3'],
      monthlyGoal: monthlyGoal ? monthlyGoal : 30,
      overview: overview ? overview : 'test',
      category: category ? category : 'category',
      history: history ? history : [],
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

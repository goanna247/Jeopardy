const router = require('express').Router();
let Question = require('../../models/Question');

router.route('/:question').get((req, res) => {
  Question.findOne(req.params.question)
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
  const points = req.body.points;
  const question = req.body.question;
  const catagory = req.body.catagory;
  const session = req.body.session;

  const newQuestion = new Question({
    points,
    question,
    catagory,
    session
  });

  newQuestion.save()
  .then(() => res.json('Question added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Question.findByIdAndDelete(req.params.id)
    .then(() => res.json('Question deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      question.points = req.body.points;
      question.question = req.body.questions;
      question.catagory = req.body.catagory;
      question.session = req.body.session;

      question.save()
        .then(() => res.json('Question udpated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
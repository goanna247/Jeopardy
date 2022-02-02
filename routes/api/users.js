const router = require('express').Router();
let User = require('../../models/User');

router.route('/').get((req, res) => {
  // User.findOne(req.params.user)
  //   .then(users => res.json(users))
  //   .catch(err => res.status(400).json('Error: ' + err));

  User.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const session = req.body.session;

  const newUser = new User({
    username,
    password,
    session
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.session = req.body.session;

      user.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
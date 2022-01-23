// // I know there are easier ways to do a login than a full 
// // encryption, but i forgot that i didnt need it till after i 
// // coded it, so im gonna keep it 

// const express = require("express")
// const router = require('express').Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");

// const validateLoginInput = require("../../validation/login");
// const validateRegisterInput = require("../../validation/register");

// let User = require('../../models/User');

// router.post("/register", (req, res) => {
//   const { error, isValid } = validateRegisterInput(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   User.findOne({ username: req.body.username }).then(user => {
//     if (user) {
//       return res.status(400).json({ username: "User already exists"});
//     } else {
//       const newUser = new User({
//         username: req.body.username,
//         password: req.body.password,
//         session: req.body.session
//       });

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// router.post("/login", (req, res) => {
//   const { errors, isValid } = validateLoginInput(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   const username = req.body.username;
//   const password = req.body.password;
//   const session = req.body.session;

//   User.findOne({ username }).then(user => {
//     if (!user) {
//       return res.status(404).json({ usernamenotfound: "Username not found "});
//     }

//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         //User matched
//         //Create JWT payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };
//         //Sign token 
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res 
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect"});
//       }
//     });
//   });
// });

// module.exports = router;

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const session = req.body.session;

//   const newUser = new User({
//     username,
//     password,
//     session
//   });

//   newUser.save()
//   .then(() => res.json('User added'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   User.findById(req.params.id)
//     .then(question => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   User.findByIdAndDelete(req.params.id)
//   .then(() => res.json('User deleted'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   User.findById(req.params.id)
//     .then(user => {
//       user.username = req.body.username;
//       user.password = req.body.password;
//       user.session = req.body.password;

//       user.save()
//         .then(() => res.json('User updated'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;
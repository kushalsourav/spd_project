// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bCrypt = require("bcryptjs");
// const jsonWebToken = require("jsonwebtoken");
// const Secret_JWT_TOKEN = "adsdfsfwewfwe";
// const checkToken = require('../checkToken');


// router.post("/user/signup", (req, res) => {
//     if (!req.body.email || !req.body.password || !req.body.username) {
//       res.json({ success: false, error: "Please fill the form" });
//       return;
//     }
//     User.create({
//       email: req.body.email,
//       username: req.body.username,
//       password: bCrypt.hashSync(req.body.password),
//     })
//       .then((user) => {
//         const token = jsonWebToken.sign(
//           { id: user._id, email: user.email },
//           Secret_JWT_TOKEN,
//         );
//         res.json({ success: true, token: token , user:user});
//       })
//       .catch((err) => {
//         if (err.code === 11000 && err.keyPattern.email === 1) {
//             res.json({ success: false, message: "Email already exists" });
//           } else if (err.code === 11000 && err.keyPattern.username === 1) {
//             res.json({ success: false, message: "Username already exists" });
//           } else {
//             res.json({ success: false, error: err.message });
//           }
//       });
//   });
  
//   router.post("/user/signin", (req, res) => {
//     if (!req.body.email || !req.body.password) {
//       return new Response(
//         404,
//         {},
//         {
//           error: ["please enter both email and password"],
//         },
//         res.json({ success: false, error: "Send needed params" }),
//         res.status(404),
//       );
//     }
//     User.findOne({
//       email: req.body.email,
//     })
//       .then((user) => {
//         if (!user) {
//           res.json({ success: false, error: "user does not exist" });
//         } else {
//           console.log(req.body.password, user.password);
//           if (!bCrypt.compareSync(req.body.password, user.password)) {
//             res.json({ success: false, error: "password doesnt match" });
//           } else {
//             const token = jsonWebToken.sign(
//               { id: user._id, email: user.email },
//               Secret_JWT_TOKEN,
//             );
//             res.json({
//               success: true,
//               token: token,
//               result: "Login succesfull",
//               user: user,
//             });
//           }
//         }
//       })
//       .catch((err) => {
//         res.json({ success: false, error: err });
//       });
//   });


//   router.post("/user/update",checkToken, (req, res) => {
//     if ((!req.body.role && !req.body.interests)) {
//         res.json({ success: false, error: "Please provide userId and at least one field to update" });
//         return;
//     }
  
//     const updateFields = {};
  
//     if (req.body.role) {
//         updateFields.role = req.body.role;
//     }
  
//     if (req.body.interests) {
//         updateFields.interests = req.body.interests;
//     }

//     if(req.body.skills) {
//       updateFields.skills = req.body.skills;
//     }
//     if(req.body.about) {
//       updateFields.about = req.body.about;
//     }
//     if(req.body.experience) {
//       updateFields.experience = req.body.experience;
//     }
  
//     User.findByIdAndUpdate(
//         req.token.id,
//         { $set: updateFields },
//         { new: true }
//     )
//         .then((user) => {
//             if (!user) {
//                 return res.json({ success: false, error: "User not found" });
//             }
//             res.json({ success: true, user: user });
//         })
//         .catch((err) => {
//             res.json({ success: false, error: err.message });
//         });
//   });
  
  

//   module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Secret_JWT_TOKEN = "adsdfsfwewfwe";
const checkToken = require('../checkToken');

// router.post("/user/signup", (req, res) => {
//   if (!req.body.email || !req.body.password || !req.body.username) {
//     return res.status(400).json({ success: false, error: "Please fill the form" });
//   }
//   User.create({
//     email: req.body.email,
//     username: req.body.username,
//     password: bcrypt.hashSync(req.body.password),
//   })
//     .then((user) => {
//       const token = jwt.sign(
//         { id: user._id, email: user.email },
//         Secret_JWT_TOKEN,
//       );
//       res.json({ success: true, token: token , user:user});
//     })
//     .catch((err) => {
//       if (err.code === 11000 && err.keyPattern.email === 1) {
//         res.status(400).json({ success: false, message: "Email already exists" });
//       } else if (err.code === 11000 && err.keyPattern.username === 1) {
//         res.status(400).json({ success: false, message: "Username already exists" });
//       } else {
//         res.status(500).json({ success: false, error: err.message });
//       }
//     });
// });

// router.post("/user/signin", (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     return res.status(400).json({ success: false, error: "Send needed params" });
//   }
//   User.findOne({
//     email: req.body.email,
//   })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ success: false, error: "User does not exist" });
//       }
//       if (!bcrypt.compareSync(req.body.password, user.password)) {
//         return res.status(401).json({ success: false, error: "Password doesn't match" });
//       }
//       const token = jwt.sign(
//         { id: user._id, email: user.email },
//         Secret_JWT_TOKEN,
//       );
//       res.json({
//         success: true,
//         token: token,
//         result: "Login successful",
//         user: user,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({ success: false, error: err });
//     });
// });
const validator = require('validator');

// router.post("/user/signup", (req, res) => {
//   const { email, password, username } = req.body;

//   // Validate email, password, and username
//   if (!email || !password || !username) {
//     return res.status(400).json({ success: false, error: "Please fill all required fields" });
//   }
//   if (!validator.isEmail(email)) {
//     return res.status(400).json({ success: false, error: "Invalid email format" });
//   }
//   if (!validator.isLength(password, { min: 6 })) {
//     return res.status(400).json({ success: false, error: "Password must be at least 6 characters long" });
//   }
//   if (!validator.isAlphanumeric(username)) {
//     return res.status(400).json({ success: false, error: "Username must be alphanumeric" });
//   }

//   User.findOne({ email })
//     .then((user) => {
//       if (user) {
//         return res.status(400).json({ success: false, error: "Email already exists" });
//       }
//       return User.findOne({ username });
//     })
//     .then((user) => {
//       if (user) {
//         return res.status(400).json({ success: false, error: "Username already exists" });
//       }
//       // All validations passed, create user
//       return User.create({
//         email,
//         username,
//         password: bcrypt.hashSync(password),
//       });
//     })
//     .then((user) => {
//       const token = jwt.sign(
//         { id: user._id, email: user.email },
//         Secret_JWT_TOKEN,
//       );
//       res.json({ success: true, token, user });
//     })
//     .catch((err) => {
//       res.status(500).json({ success: false, error: err.message });
//     });
// });

router.post("/user/signup", async (req, res) => {
  const { email, password, username } = req.body;

  // Validate email, password, and username
  if (!email || !password || !username) {
    return res.status(400).json({ success: false, error: "Please fill all required fields" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false, error: "Invalid email format" });
  }
  if (!validator.isLength(password, { min: 6 })) {
    return res.status(400).json({ success: false, error: "Password must be at least 6 characters long" });
  }
  if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ success: false, error: "Username must be alphanumeric" });
  }

  try {
    // Check if email already exists
    let existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ success: false, error: "Email already exists" });
    }

    // Check if username already exists
    let existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ success: false, error: "Username already exists" });
    }

    // All validations passed, create user
    let newUser = await User.create({
      email,
      username,
      password: bcrypt.hashSync(password),
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      Secret_JWT_TOKEN,
    );

    res.json({ success: true, token, user: newUser });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post("/user/signin", (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return res.status(400).json({ success: false, error: "Please provide email and password" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false, error: "Invalid email format" });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: "User does not exist" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ success: false, error: "Incorrect password" });
      }
      const token = jwt.sign(
        { id: user._id, email: user.email },
        Secret_JWT_TOKEN,
      );
      res.json({
        success: true,
        token,
        result: "Login successful",
        user,
      });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err.message });
    });
});

router.post("/user/update", checkToken, (req, res) => {
  if (!req.body.role && !req.body.interests) {
    return res.status(400).json({ success: false, error: "Please provide userId and at least one field to update" });
  }

  const updateFields = {};

  if (req.body.role) {
    updateFields.role = req.body.role;
  }

  if (req.body.interests) {
    updateFields.interests = req.body.interests;
  }

  if(req.body.skills) {
    updateFields.skills = req.body.skills;
  }
  if(req.body.about) {
    updateFields.about = req.body.about;
  }
  if(req.body.experience) {
    updateFields.experience = req.body.experience;
  }

  User.findByIdAndUpdate(
    req.token.id,
    { $set: updateFields },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ success: false, error: "User not found" });
      }
      res.json({ success: true, user: user });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err.message });
    });
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
router.get('/user/followers/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('followers');
      res.json(user.followers);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});

// Get users followed by a user
router.get('/user/following/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('following');
      res.json(user.following);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/user/follow/:followerId/:followingId', async (req, res) => {
  try {
      const userId = req.params.followingId;
      const currentUser = req.params.followerId; 
      console.log(currentUser, userId)
      // Check if the user is trying to follow themselves
      if (userId === currentUser) {
          return res.status(400).json({ message: "You can't follow yourself" });
      }
      
      // Find the current user
      const user = await User.findById(currentUser);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Check if the user is already following the target user
      if (user.following.includes(userId)) {
          return res.status(400).json({ message: "You are already following this user" });
      }

      // Find the user to follow
      const userToFollow = await User.findById(userId);
      if (!userToFollow) {
          return res.status(404).json({ message: "User to follow not found" });
      }

      // Update the current user's following list
      user.following.push(userId);
      await user.save();

      // Update the target user's followers list
      userToFollow.followers.push(currentUser);
      await userToFollow.save();

      res.json({ message: "User followed successfully" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});

// router.get('/users/search/:query',checkToken,async (req, res) => {
//   try {
//       const filters= req.params; // Get the query parameters for filtering
//       console.log(filters)
//       // Build the query object based on the filters
//       const query = {};

//       if (filters.username) {
//           query.username = new RegExp(filters.username, 'i'); // Case-insensitive search
//       }

//       if (filters.interests) {
//           query.interests = { $in: filters.interests }; // Search for users with any of the provided interests
//       }

//       if (filters.skills) {
//           query.skills = { $in: filters.skills }; // Search for users with any of the provided skills
//       }

//       // Execute the query
//       const users = await User.find(query);

//       res.json(users);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server Error' });
//   }
// });
router.get('/users/search/:username', checkToken, async (req, res) => {
  try {
    const username = req.params.username;
    const users = await User.find();

    const filteredUsers = users.filter(user => user.username.toLowerCase().includes(username.toLowerCase()));

    res.json(filteredUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/users/:userId',checkToken, async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

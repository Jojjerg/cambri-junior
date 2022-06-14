const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User");
const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/*
    @route POST api/users/register
    //Регистрация пользователя
    @access Public
 */

router.post("/register", upload.single("avatar"), (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    payed_date: req.body.payed_date,
    avatar: req.file.path
  })
  //Проверка уникальности имени пользователя
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Это имя пользователя занято",
      });
    }
  });
  //Проверка уникальности электронной почты
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Такая почта уже есть",
      });
    }
  });
  //Пользователь прошел проверку и может быть зарегистрирован
  //Хэширование пароля
  bcrypt.genSalt(7, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      user.save().then((user) => {
        return res.status(201).json({
          user: user,
          success: true,
          msg: "Вы были успешно зарегистрированы",
        });
      });
    });
  });
});

/*
    @route POST api/users/login
    //Вход пользователя
    @access Public
 */
router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "Имя пользователя неверное",
      });
    }
    //Если имя пользователя верное, то проверяем пароль
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          _id: user._id,
          name: user.name,
          surname: user.surname,
          username: user.username,
          email: user.email,
        };
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 604800,
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              user: user,
              msg: "Вы успешно вошли",
            });
          }
        );
      } else {
        return res.status(404).json({
          success: false,
          msg: "Неверный пароль",
        });
      }
    });
  });
});

/*
    @route POST api/users/profile
    //Пользовательские данные
    @access Private
 */
// Получение пользовательских данных
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

router.get('/', async(req, res) => {
  try{
      const users = await User
      .find()
      if(!users) throw new Error('Список пуст')
      const sorted = users.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
      res.status(200).json({
          allUsers: sorted
      }) 
  }
  catch(err){
      res.status(500).json({ msg: err.message })
  }
})

router.get("/profile/:id", (req, res) => {
  console.log("Получение данных конкретного пользователя");
  User.findById(req.params.id).exec(function (err, user) {
    if (err) {
      return res.status(404).json({
        success: false,
        msg: "Нет такого пользователя",
      });
    } else {
      res.status(200).json({
        users: user,
        success: true,
        msg: "Пользователи успешно получены",
      });
    }
  });
});

router.patch("/profile/:id", (req, res) => {
  console.log("Обновление данных пользователя");
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        username: req.body.username,
      },
    },
    {
      new: true,
    },
    function (err, updatedProfile) {
      if (err) {
        return res.status(400).json({
          success: false,
          msg: "Ошибка обновления данных",
        });
      } else {
        res.status(200).json({
          user: updatedProfile,
          success: true,
          msg: "Вы успешно обновили данные",
        });
      }
    }
  );
});

router.delete("/profile/:id", (req, res) => {
  console.log("Удаление данных пользователя");
  User.findByIdAndRemove(req.params.id, function (err, deletedProfile) {
    if (err) {
      return res.status(400).json({
        success: false,
        msg: "Ошибка удаления данных",
      });
    } else {
      res.json(deletedProfile);
    }
  });
});
module.exports = router;

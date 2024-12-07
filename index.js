// // const express = require("express");
// import session from "express-session";
// import express from "express";
// import Hello from "./Hello.js";
// import Lab5 from "./Lab5/index.js";
// import UserRoutes from "./Kanbas/Users/routes.js";
// import courses from "./Kanbas/Database/courses.js";
// import cors from "cors";
// import mongoose from "mongoose";
// import "dotenv/config";
// import CourseRoutes from "./Kanbas/Courses/routes.js";
// import ModuleRoutes from "./Kanbas/Modules/routes.js";

// const CONNECTION_STRING =
//   process.env.MONGO_CONNECTION_STRING ||
//   "mongodb://127.0.0.1:27017/kanbas";
// mongoose.connect(CONNECTION_STRING);

// const app = express();
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.NETLIFY_URL || "http://localhost:3000",
//   })
// );
// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || "kanbas",
//   resave: false,
//   saveUninitialized: false,
// };
// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//     domain: process.env.NODE_SERVER_DOMAIN,
//   };
// }
// app.use(session(sessionOptions));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to Full Stack Development!')})

// Hello(app);
// Lab5(app);
// UserRoutes(app);
// CourseRoutes(app);
// ModuleRoutes(app);

// app.listen(process.env.PORT || 4000);

import express from 'express';
import mongoose from "mongoose";
import "dotenv/config";

import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
// import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import EnrollmentRoutes from './Kanbas/Enrollments/routes.js';
import QuizzesRoutes from './Kanbas/Quizzes/routes.js';
import QuestionsRoutes from './Kanbas/Questions/routes.js';



// const CONNECTION_STRING = "mongodb://127.0.0.1:27017/kanbas"
// const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/kanbas"
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"

mongoose.connect(CONNECTION_STRING);
// mongodb://localhost:27017/
// const express = require('express')
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  }
 ));                    // make sure cors is used right after creating the app
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
app.use(session(sessionOptions));
  
app.use(express.json());
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
ModuleRoutes(app);
// QuizzesRoutes(app);
// QuestionsRoutes(app);
// AssignmentRoutes(app);

Hello(app)

// app.listen(4000);
app.listen(process.env.PORT || 4000)


import * as dao from "./dao.js"

export default function QuestionRoutes(app) {

  const findQuestionsForQuiz = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.findQuestionsForQuiz(quizId);
    res.json(status);
};

  const findQuestionById = async (req, res) => {
    const {quizId, questionId} = req.params;
    const status = await dao.findQuestionsForQuiz(questionId);
    res.json(status);
  };

  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const newQuestion = { ...req.body, quiz: quizId, _id: new Date().getTime().toString() };
    const status = await dao.createQuestion(newQuestion);
    res.json(status);
};


  const updateQuestion = async (req, res) => {
    const { quizId, questionId} = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };


  const deleteQuestion = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.deleteQuestion(quizId);
    res.json(status);
  };

  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionById);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion);
  app.delete("/api/quizzes/:quizId", deleteQuestion);

}
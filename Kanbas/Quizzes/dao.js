import model from "./model.js";

export const createQuiz = (quiz) => {
    return model.create(quiz);
};
export const findAllQuizzes = (courseId) => model.find({ courseId: courseId });
export const findQuizById = (quizId) => model.findById(quizId);
export const findQuizByName = (quizName) => model.findOne({quizName});
export const updateQuiz = (id, quiz) =>
    model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id }); 

export const findAllQuiz = () => {
    return model.find();
  }
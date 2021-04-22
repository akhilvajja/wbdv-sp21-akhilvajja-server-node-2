
const quizzes = require("./quizzes.json")

const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
    // return quizzes
}
const findQuizById = (qid) => {
    return quizzesModel
        .findById(qid)
        .populate("questions")
        .exec()
    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })
}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}
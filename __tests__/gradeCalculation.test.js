// const { averageExams, isStudentPassExam } = require("../src/latihantesting/gradeCalculation")
import { averageExams, isStudentPassExam }  from "../src/latihantesting/gradeCalculation"
describe('Grade Calculation Test', () => {
    test('it should return exact average number', () => {
        const listValueOfExams = [80, 100, 100, 80]
        expect(averageExams(listValueOfExams)).toEqual(90);
    })
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80]
        expect(isStudentPassExam(listValueOfExams,"Budi")).toEqual(true);
    })
    test('it should return exam failed status', () => {
        const listValueOfExams = [80, 50, 50, 80]
        expect(isStudentPassExam(listValueOfExams,"Budi")).toEqual(false);
    })
    
})

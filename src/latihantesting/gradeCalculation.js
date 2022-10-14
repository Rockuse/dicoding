const averageExams = (averageExam) => {
    const numberValidation = averageExam.every(exam => typeof exam === "number");
    if (!numberValidation) throw Error("please input number");
    const sumValues = averageExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (sumValues / averageExam.length)
}

const isStudentPassExam = (valueExam, name) => {
    const minValue = 75
    const average = averageExams(valueExam);

    if (average > minValue) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
}

module.exports={averageExams,isStudentPassExam}
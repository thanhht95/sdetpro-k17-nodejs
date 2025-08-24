// Data
const teo = { name: "Teo", grades: [9, 8, 6] }; // 7.67

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [8, 8, 9]; // 8.33

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6, 7, 8]; // 7

// Usage
const { bestStudentName, avgScore } = findBestStudent([teo, ti, tun]);
console.log(`Best student is: ${bestStudentName} with average score: ${avgScore}`);


// Controller
function findBestStudent(studentList) {
    let bestStudent = studentList[0];
    let currentHighestScore = calculateAgeScore(bestStudent);

    for (const student of studentList) {
        const avgScore = calculateAgeScore(student);
        if (avgScore > currentHighestScore) {
            bestStudent = student;
            currentHighestScore = avgScore;
        }
    }
    return {
        bestStudentName: bestStudent.name,
        avgScore: currentHighestScore,
        metaData: {} // muốn return gì thêm nữa không thì tuỳ mình
    }
}

// Support function - DRY
function calculateAgeScore({ grades }) {
    let totalScore = 0;
    for (const grade of grades) {
        // totalScore += grade;
        totalScore = totalScore + grade;
    }
    return Math.ceil(totalScore / grades.length);
}


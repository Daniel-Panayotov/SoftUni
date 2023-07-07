function attachHandlers() {
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
    });
    document.getElementById('submit').addEventListener('click', createStudent);
}

async function createStudent() {
    let [firstName, lastName, facNum, grade] = document.querySelectorAll('.inputs input');

    if (
        firstName.value.length > 0 &&
        lastName.value.length > 0 &&
        facNum.value.length > 0 &&
        Number(facNum.value) &&
        grade.value.length > 0 &&
        Number(grade.value)
    ) {
        let student = {
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facNum.value,
            grade: grade.value,
        };

        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        };
        let res = await fetch('http://localhost:3030/jsonstore/collections/students', options);
        loadStudents();
    }
}

async function loadStudents() {
    document.querySelector('tbody').replaceChildren();
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();

    Object.entries(data).forEach(([key, val]) => {
        let tr = document.createElement('tr');
        let fName = document.createElement('td');
        fName.textContent = val.firstName;
        let lName = document.createElement('td');
        lName.textContent = val.lastName;
        let facN = document.createElement('td');
        facN.textContent = val.facultyNumber;
        let grade = document.createElement('td');
        grade.textContent = val.grade;

        tr.appendChild(fName);
        tr.appendChild(lName);
        tr.appendChild(facN);
        tr.appendChild(grade);

        document.querySelector('tbody').appendChild(tr);
    });
}

attachHandlers();
loadStudents();

let studentBody = {}

function submitForm() {
    test(studentBody)
}

function getStudentId(e) {
    studentBody.id  = e.value;
}
function getStudentName(e) {
    studentBody.name  = e.value;
}
function getStudentAge(e) {
    studentBody.age  = e.value;
}
function getStudentMarks(e) {
    studentBody.marks  = e.value;
}
function getStudentDepartment(e) {
    studentBody.department  = e.value;
}
function getData(){
    console.log("workes")
    getAllStudent();
}
const test = (data) =>{
    console.log(data);
}

const postStudent = async () => {
    const response = await fetch('http://example.com/test.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}

const getAllStudent = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson.value);
    alert(myJson.value);
}
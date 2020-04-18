const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'maaaanaaaaaaa'},
    {id: 41, name: 'Mayuri'},
    {id: 71, name: 'DeepJol'}
];
// const studentName = [];
// for(let i = 0; i < student.length; i++){
//     let name = student.name;
//     console.log(student.name);
//     studentName.push(name);
// }
const studentName = student.map(s => s.name);
const studentId = student.map(x => x.id);
const bigger = student.filter(x => x.id>40);
console.log(bigger);
console.log(studentName);
console.log(studentId);
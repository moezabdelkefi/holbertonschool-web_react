const cppSubject = new Cpp();
const reactSubject = new React();
const javaSubject = new Java();

const teacher: Subjects.Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	experienceTeachingC: 5,
	experienceTeachingReact: 3,
	experienceTeachingJava: 0,
};

cppSubject.setTeacher(teacher);
reactSubject.setTeacher(teacher);
javaSubject.setTeacher(teacher);

console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());

console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

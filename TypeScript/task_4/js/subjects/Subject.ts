namespace Subjects {
    export class Subject {
      protected _teacher: Teacher;
  
      setTeacher(teacher: Teacher) {
        this._teacher = teacher;
      }
    }
  }
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface Student {
  new (firstName: string, lastName: string): StudentAttr;
}

interface StudentAttr {
  workOnHomework(): string;
  displayName(): string;
}

class studentClass implements StudentAttr {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

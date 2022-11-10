enum Gender {
    MALE,
    FEMALE,
    OTHER 
  }

class Employee {

    fullname: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";

    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
      this.fullname = fullname;
      this.gender = gender;
      this.birthday = birthday;
      this.email = email;
      this.fullname = fullname;
      this.phoneNumber = phoneNumber;
    }


}

let employeeList: Employee[] = [];

employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

function showEmployee(employee: Employee) {
    console.log(employee);
}

function addEmployee(employee: Employee) {
    employeeList.push(employee);
    console.log(employeeList);
}

function removeEmployee(index: number) {
    employeeList.splice(index, 1);
    console.log(employeeList);
}

employeeList.forEach(showEmployee);

let new Employee("Nguyen Dai B", Gender.MALE, new Date("1995-05-17"), "bnguyen@gmail.com", "0853456789");

removeEmployee(0);
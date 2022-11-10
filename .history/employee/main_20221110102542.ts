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
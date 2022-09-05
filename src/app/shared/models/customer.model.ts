// export class CustomerModel implements ICustomerModel {
//   id: number;
//   Firstname: string;
//   Lastname: string;
//   email: string;
//   DateOfBirth: string;
//   BankAccountNumber: string;
//   constructor() {}
// } 

export interface ICustomerModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bankAccountNumber: string;
}

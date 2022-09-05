export class BaseComponent {
  customers: any = [];

  dataSource: any;
  isLoading = true;
  pageNumber: number = 1;
  isEditableNew: boolean = true;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dateOfBirth',
    'phoneNumber',
    'bankAccountNumber',
    'action',
  ];
}


//
// Implement a logic of actions and invoke those actions below:
// Реализуйте логику действий и вызовите эти действия ниже:
//

// Invoke "Submit for Approval" for softwareEngineerVacancy
// Invoke "Approve" for softwareEngineerVacancy
//Вызвать "Отправить на утверждение" для softwareEngineerVacancy
// Вызвать команду "Утвердить" для вакансии softwareEngineerVacancy

// Invoke "Submit for Approval" for frontEndEngineerVacancy
// Invoke "Reject" for frontEndEngineerVacancy
//Вызвать "Отправить на утверждение" для frontEndEngineerVacancy
// Пригласить "Отклонить" для вакансии frontEndEngineerVacancy

// Implement the service below the comment block
//Внедрите услугу под блоком комментариев

class Service {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  SubmitForApproval() {
    console.log(`Submitted for approval Vacancy: ${this.id}`);
  }

  Approve() {
    console.log(`Approved Record: ${this.id}`);
  }

  Reject() {
    console.log(`Reject Record: ${this.id}`);
  }
}

class Record extends Service {
  constructor(config, config2) {
    super(config, config2);
    this.Record(config, config2);
  }
  id;
  type;

  Record(id, type) {
    this.id = id;
    this.type = type;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }
  //  pipe(SubmitForApproval, Approve, Reject)({});
}

const recordType = "Vacancy";

const softwareEngineerVacancy = new Record("SoftwareEngineer0001", recordType);
const frontEndEngineerVacancy = new Record("FrontEndEngineer0020", recordType);
softwareEngineerVacancy.SubmitForApproval();
softwareEngineerVacancy.Approve();

frontEndEngineerVacancy.SubmitForApproval();
frontEndEngineerVacancy.Reject();
// pipe(SubmitForApproval, Approve, Reject)();

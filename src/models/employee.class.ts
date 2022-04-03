export class Employee{

    firstName: string;
    lastName: string;
    email: string;
    id: number;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.id = obj ? obj.id : '';
    }

    toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            id: this.id
        }
    }
}
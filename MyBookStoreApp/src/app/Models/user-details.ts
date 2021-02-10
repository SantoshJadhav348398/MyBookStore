import { Book } from "./book";

export class UserDetails {
    Id:number;
    Firstname: string;
    LastName:string;
    UserName:string;
    Password:string;
    IsAdmin:number;
    Language:string;
    BookIds:number[];
    MobileNumber:number;
    EmailId:string;
    BookDetails:Book[];

}

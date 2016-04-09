import {IUser} from './iuser';

export class User implements IUser{
    username:string;
    email:string;
    password:string;
    country:string;
    birthday:Date;

    constructor(authData:any){
        this.email = authData.password.email;
    }
}
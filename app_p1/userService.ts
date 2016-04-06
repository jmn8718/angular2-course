import { Injectable } from 'angular2/core'

@Injectable()
export class UserService{
    private user = {
        firstName : 'Jose Miguel',
        lastName : 'Navarro'
    }

    getUser(){
        return this.user;
    }

    deleteCurrentUser(){
        this.user = undefined;
    }
}
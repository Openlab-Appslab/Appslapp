export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    authority: any;

    constructor(
        email: string,
        username: string,
        password: string,
    ) { }
}

export class UserLogin {
    username: string;
    password: string;

    constructor(
        username: string,
        password: string,
    ) { }
}
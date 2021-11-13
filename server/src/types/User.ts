// User

export default interface User {
    username: string;
    hash: string,
    salt: string,
    age: number;
    joined_date: Date;
};

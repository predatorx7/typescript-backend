import { CRUD } from "../crud";

interface AddUserDto {

}

interface PatchUserDto {

}

interface PutUserDto {

}

export abstract class UsersApi implements CRUD {
    abstract create(resource: AddUserDto): Promise<any>;

    abstract deleteById(id: string): Promise<string>;

    abstract list(limit: number, page: number): Promise<any>;

    abstract patchById(id: string, resource: PatchUserDto): Promise<string>;

    abstract readById(id: string): Promise<any>;

    abstract putById(id: string, resource: PutUserDto): Promise<string>;

    abstract getUserByEmail(email: string): Promise<any>;

    abstract getUserByMobile(dialingCode: string, mobileNumber: string): Promise<any>;
}

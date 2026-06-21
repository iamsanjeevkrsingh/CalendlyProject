import { CreateUserDto } from "../dtos/user.dto.js";
import { create, findByEmail, getAll, getById } from "../repositories/user.repository.js";
import { conflict, notFound } from "../utils/api-error.js";

export async function findAllUsers() {
    const users = await getAll();
    return users;
}

export async function findById(id: number) {
    console.log("Inside service");
    const user = await getById(id);
    if(!user) {
        throw notFound('User not found');
    }

    return user;
}

export async function createUser(data: CreateUserDto) {
    // Check if the user already exists or not 
    const existingUser = await findByEmail(data.email);
    if(existingUser) {
        throw conflict('User already exists');
    }

    return create(data);
}
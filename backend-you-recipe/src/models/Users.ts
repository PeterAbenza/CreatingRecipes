import {model, Schema } from "mongoose"

interface IUser {
    image: string,
    id: number,
    nome: string,
    email: string,
    password: string,
    credential: string
}

const userSchema = new Schema<IUser>({
    image: {type: String},
    id: {type: Number, require: true},
    nome: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, required: true},
    credential: {type: String, required: true, default: "CLI"},
},{
    timestamps: true
});

const User = model<IUser>('users', userSchema)

export default User;
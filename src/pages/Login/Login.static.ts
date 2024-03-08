import * as yup from "yup";

export interface LoginFormDataType {
    username: string;
    email: string;
    age: number;
    password: string;
}

export const schema = yup.object().shape({
    username: yup.string().min(3).max(20).required("username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup.number().typeError("Age must be a number").min(18).required("Age is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
});

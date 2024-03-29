import * as yup from "yup";

export interface LoginFormDataType {
    username: string;
    email: string;
    age: number;
    password: string;
}

export const schema = yup.object().shape({
    username: yup.string().min(3, "Username must be at least 3 characters").max(20, "Username can't exceed 20 characters").required("username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup.number().typeError("Age must be a number").min(18, "Age must be at least 18").required("Age is required"),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20, "Password can't exceed 20 characters").required("Password is required"),
});

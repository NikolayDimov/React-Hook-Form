import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormDataType, schema } from "./Register.static";
import { yupResolver } from "@hookform/resolvers/yup";

const useLogin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RegisterFormDataType>({
        mode: "onBlur",
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<RegisterFormDataType> = (data) => {
        console.log(data);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default useLogin;

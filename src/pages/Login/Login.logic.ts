import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormDataType, schema } from "./Login.static";
import { yupResolver } from "@hookform/resolvers/yup";

const useLogin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormDataType>({
        mode: "onBlur",
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<LoginFormDataType> = (data) => {
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

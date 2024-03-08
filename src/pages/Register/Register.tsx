import { Link } from "react-router-dom";
import { Container, ErrorStyles, FormBlock, FormGroup, LabelForm, LeftPanel, Logo, RightPanel, StyledButton, StyledInput, Title } from "../StyledComponents"; // Make sure to adjust imports based on your actual project structure
import { AuthLink } from "../StyledComponents";
import useLogin from "./Register.logic";

function Register() {
    const { register, handleSubmit, onSubmit, errors } = useLogin();

    return (
        <Container>
            <LeftPanel>
                <Logo>MyFarm</Logo>
                <FormBlock>
                    <Title>
                        <h3>Register</h3>
                    </Title>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <LabelForm htmlFor="Username">Username</LabelForm>
                            <StyledInput placeholder={`Enter your username`} type="text" id="username" {...register("username")} />
                            <ErrorStyles>{errors.username?.message}</ErrorStyles>
                        </FormGroup>

                        <FormGroup>
                            <LabelForm htmlFor="Email">Email</LabelForm>
                            <StyledInput placeholder={`Enter your email`} type="email" id="email" {...register("email")} />
                            <ErrorStyles>{errors.email?.message}</ErrorStyles>
                        </FormGroup>

                        <FormGroup>
                            <LabelForm htmlFor="Age">Age</LabelForm>
                            <StyledInput placeholder={`Enter your age`} type="number" id="age" {...register("age")} />
                            <ErrorStyles>{errors.age?.message}</ErrorStyles>
                        </FormGroup>

                        <FormGroup>
                            <LabelForm htmlFor="Password">Password</LabelForm>
                            <StyledInput placeholder={`Enter your password`} type="password" id="password" {...register("password")} />
                            <ErrorStyles>{errors.password?.message}</ErrorStyles>
                        </FormGroup>

                        <FormGroup>
                            <LabelForm htmlFor="ConfirmPassword">Confirm Password</LabelForm>
                            <StyledInput placeholder={`Enter your confirm password`} type="password" id="confirmPassword" {...register("confirmPassword")} />
                            <ErrorStyles>{errors.confirmPassword?.message}</ErrorStyles>
                        </FormGroup>

                        <StyledButton type="submit">
                            <span>Log In</span>
                        </StyledButton>
                    </form>

                    <AuthLink>
                        <Link to="/login">Have an account Login here</Link>
                    </AuthLink>
                </FormBlock>
            </LeftPanel>
            <RightPanel />
        </Container>
    );
}

export default Register;

import styled from "styled-components";
import {Button, InputAdornment, TextField, Typography} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import {FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import StyledLink from "@material-ui/core/Link";
import {AccountCircle, AccountCircleOutlined, Email, Lock, LockOutlined} from "@material-ui/icons";

const CenteredColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignUpBox = styled.div`
  background: rgba(0, 0, 0, .1);
  border-radius: 0.5em;
  padding: 2em;
  display: flex;
  flex-direction: column;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledField = styled(TextField)`
  margin-bottom: 1em !important;
`

const BottomCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`

const StyledButton = styled(Button)`
  background-color: rgba(255, 255, 255, .5) !important;
  margin: 0.2em !important;
  padding: 0.5em 2em !important;

  &:hover {
    background-color: rgba(255, 255, 255, .8) !important;
  }
`

const SignUpPage = () => {


    //Error Functions
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const addError = (field: string, message: string) => {
        setErrors({
            ...errors,
            [field]: message
        })
    }

    const hasError = (field: string): boolean => {
        if (Object.keys(errors).indexOf(field) > -1) {
            return true
        } else {
            return false
        }
    }

    const getErrorText = (field: string): string | undefined => {
        if (hasError(field)) {
            return errors[field]
        } else {
            return undefined
        }
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()

        setErrors({})

        //Getting Form Values
        let formData = new FormData(event.target as HTMLFormElement)
        let formValues: { [key: string]: string } = {}
        formData.forEach((value, key, parent) => {
            formValues = {
                ...formValues,
                [key]: key === "password" || key === "confirm_password" ? value.toString() : value.toString().trim()
            }
        })

        //Checking For Errors
        Object.keys(formValues).forEach(key => {
            if (formValues[key] === "" || formValues[key].length < 4 || formValues[key].length > 60) {
                addError(key, "Incorrect Length Specified")
            }
        })

        //Password Health Check
        let password = formValues["password"]
        if (password == null || password.length < 9 || password.indexOf(" ") > -1) {
            addError("password", "Password must be 8 characters long without any spaces")
        }

        let confirmPassword = formValues["confirm_password"]
        if (password !== confirmPassword) {
            addError("confirm_password", "Both passwords must match")
        }

        if (Object.keys(errors).length < 1) {
            //Submit Form
            console.log(JSON.stringify(formValues))
        }

    }

    return (
        <CenteredColumn>
            <SignUpBox>
                <FormStyled onSubmit={onSubmit}>
                    <StyledField
                        label={"Full Name"}
                        variant="outlined"
                        name={"name"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color={"primary"}/>
                                </InputAdornment>
                            ),
                        }}
                        error={hasError("name")}
                        helperText={getErrorText("name")}
                        required
                    />
                    <StyledField
                        label={"Username"}
                        variant="outlined"
                        name={"username"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color={"primary"}/>
                                </InputAdornment>
                            ),
                        }}
                        error={hasError("username")}
                        helperText={getErrorText("username")}
                        required
                    />
                    <StyledField
                        label={"Email"}
                        variant="outlined"
                        type={"email"}
                        name={"email"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email color={"primary"}/>
                                </InputAdornment>
                            ),
                        }}
                        error={hasError("email")}
                        helperText={getErrorText("email")}
                        required
                    />
                    <StyledField
                        label={"Password"}
                        variant="outlined"
                        type={"password"}
                        name={"password"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color={"primary"}/>
                                </InputAdornment>
                            ),
                        }}
                        error={hasError("password")}
                        helperText={getErrorText("password")}
                        required
                    />
                    <StyledField
                        label={"Confirm Password"}
                        variant="outlined"
                        type={"password"}
                        name={"confirm_password"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color={"primary"}/>
                                </InputAdornment>
                            ),
                        }}
                        error={hasError("confirm_password")}
                        helperText={getErrorText("confirm_password")}
                        required
                    />
                    <StyledButton type={"submit"}>Sign Up</StyledButton>
                </FormStyled>
                <StyledButton startIcon={<GoogleIcon/>}>Sign up With Google</StyledButton>
                <StyledButton startIcon={<FacebookIcon/>}>Sign up With Facebook</StyledButton>
                <BottomCentered>
                    <Typography variant={"subtitle2"}>
                        Already have an account ? <Link to={"/signin"} component={StyledLink}>Sign in</Link>
                    </Typography>
                </BottomCentered>
            </SignUpBox>
        </CenteredColumn>
    )
}

export default SignUpPage
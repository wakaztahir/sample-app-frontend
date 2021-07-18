import styled from "styled-components";
import {Button, InputAdornment, TextField, Typography} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import {FormEvent} from "react";
import {Link} from "react-router-dom";
import StyledLink from "@material-ui/core/Link";
import {AccountCircle, AccountCircleOutlined, Lock, LockOutlined} from "@material-ui/icons";

const CenteredColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignInBox = styled.div`
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

const SignInPage = () => {

    let onSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <CenteredColumn>
            <SignInBox>
                <FormStyled onSubmit={onSubmit}>
                    <StyledField
                        label={"Username"}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        required
                    />
                    <StyledField
                        label={"Password"}
                        variant="outlined"
                        type={"password"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                        required
                    />
                    <StyledButton type={"submit"}>Sign In</StyledButton>
                </FormStyled>
                <StyledButton startIcon={<GoogleIcon/>}>Sign In With Google</StyledButton>
                <StyledButton startIcon={<FacebookIcon/>}>Sign In With Facebook</StyledButton>
                <BottomCentered>
                    <Typography variant={"subtitle2"}>
                        <Link to={"/signup"} component={StyledLink}>Click Here To Sign up</Link>
                    </Typography>
                    <Typography variant={"caption"}>Forgot Password ? <Link to={"/forgot-password"}
                                                                            component={StyledLink}>Click
                        Here</Link></Typography>
                </BottomCentered>
            </SignInBox>
        </CenteredColumn>
    )
}

export default SignInPage
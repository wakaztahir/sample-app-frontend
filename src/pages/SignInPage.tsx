import styled from "styled-components";
import {Button, Input, Typography} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import {FormEvent} from "react";
import {Link} from "react-router-dom";
import StyledLink from "@material-ui/core/Link";

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
  padding: 1em;
  display: flex;
  flex-direction: column;
`

const SignInTable = styled.table`
  margin-bottom: 1em;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

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
  margin:0.2em !important;
  
  &:hover{
    background-color:rgba(255,255,255,.8) !important;
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
                    <SignInTable>
                        <tbody>
                        <tr>
                            <td><label htmlFor="username"><Typography>Username</Typography></label></td>
                            <td><Input type={"text"} required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password"><Typography>Password</Typography></label></td>
                            <td><Input type={"password"} required/></td>
                        </tr>
                        </tbody>
                    </SignInTable>
                    <StyledButton type={"submit"}>Sign In</StyledButton>
                </FormStyled>
                <StyledButton startIcon={<GoogleIcon/>}>Sign In With Google</StyledButton>
                <StyledButton startIcon={<FacebookIcon/>}>Sign In With Facebook</StyledButton>
                <BottomCentered>
                    <Typography variant={"subtitle2"}>
                        <Link to={"/signup"} component={StyledLink}>Click Here To Sign up</Link>
                    </Typography>
                    <Typography variant={"caption"}>Forgot Password ? <Link to={"/forgot-password"}  component={StyledLink}>Click
                        Here</Link></Typography>
                </BottomCentered>
            </SignInBox>
        </CenteredColumn>
    )
}

export default SignInPage
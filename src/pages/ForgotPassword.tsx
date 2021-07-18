import styled from "styled-components";
import {Button, Input, Typography} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import {FormEvent} from "react";
import {Link} from "react-router-dom"

const CenteredColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormBox = styled.div`
  background: rgba(0, 0, 0, .1);
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
`

const Table = styled.table`
  margin-bottom: 1em;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

`

const SignInButton = styled(Button)`
  .MuiButton-startIcon {
    align-self: flex-start;
  }
`

const BottomCentered = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:1em;
`

const ForgotPassword = () => {

    let onSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <CenteredColumn>
            <FormBox>
                <StyledForm onSubmit={onSubmit}>
                    <Table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="username">Username</label></td>
                            <td><Input type={"text"} required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><Input type={"password"} required/></td>
                        </tr>
                        </tbody>
                    </Table>
                    <SignInButton type={"submit"}>Sign In</SignInButton>
                </StyledForm>
                <SignInButton startIcon={<GoogleIcon/>}>Sign In With Google</SignInButton>
                <SignInButton startIcon={<FacebookIcon/>}>Sign In With Facebook</SignInButton>
                <BottomCentered>
                    <Typography variant={"subtitle2"}><Link to={"/signup"}>Click Here To Sign up</Link></Typography>
                    <Typography variant={"caption"}>Forgot Password ? <Link to={"/forgot-password"}>Click Here</Link></Typography>
                </BottomCentered>
            </FormBox>
        </CenteredColumn>
    )
}

export default ForgotPassword
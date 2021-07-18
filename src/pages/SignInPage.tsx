import styled from "styled-components";
import {Button, Input} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import {FormEvent} from "react";

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
  display:flex;
  flex-direction:column;
  
`

const SignInButton = styled(Button)`
  .MuiButton-startIcon {
    align-self: flex-start;
  }
`

const SignInPage = () => {

    let onSubmit = (event:FormEvent) => {
        event.preventDefault()
    }

    return (
        <CenteredColumn>
            <SignInBox>
                <FormStyled onSubmit={onSubmit}>
                    <SignInTable>
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
                    </SignInTable>
                    <SignInButton type={"submit"}>Sign In</SignInButton>
                </FormStyled>
                <SignInButton startIcon={<GoogleIcon/>}>Sign In With Google</SignInButton>
                <SignInButton startIcon={<FacebookIcon/>}>Sign In With Facebook</SignInButton>
                <CenteredColumn>
                    <span><a href="#!">Click Here To Sign up</a></span>
                    <span>Forgot Password ? <a href={"#!"}>Click Here</a></span>
                </CenteredColumn>
            </SignInBox>
        </CenteredColumn>
    )
}

export default SignInPage
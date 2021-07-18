import styled from "styled-components";
import {Button, Input, Typography} from "@material-ui/core";
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

const SignUpBox = styled.div`
  background: rgba(0, 0, 0, .1);
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
`

const SignUpTable = styled.table`
  margin-bottom: 1em;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

`

const SignUpButton = styled(Button)`
  .MuiButton-startIcon {
    align-self: flex-start;
  }
`

const BottomCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`

const SignUpPage = () => {

    let onSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <CenteredColumn>
            <SignUpBox>
                <FormStyled onSubmit={onSubmit}>
                    <SignUpTable>
                        <tbody>
                        
                        </tbody>
                    </SignUpTable>
                    <SignUpButton type={"submit"}>Sign Up</SignUpButton>
                </FormStyled>
                <BottomCentered>
                    <Typography variant={"subtitle2"}>Already have an account </Typography>
                    <Typography variant={"subtitle2"}><Link to={"/signin"}>Click Here To Sign In</Link></Typography>
                </BottomCentered>
            </SignUpBox>
        </CenteredColumn>
    )
}

export default SignUpPage
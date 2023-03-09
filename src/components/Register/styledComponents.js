import styled from 'styled-components'

export const WebsiteLogo = styled.img`
  width: 200px;
  margin: 20px;
`
export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const RegisterImage = styled.img`
  width: 30%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #7b8794;
  padding-top: 20px;
  padding-bottom: 10px;
`
export const InputContainer = styled.input`
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
`
export const SelectContainer = styled.select`
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
`
export const SelectOption = styled.option``

export const RegisterButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px;
  margin-top: 30px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  align-self: flex-start;
  width: 130px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 13px;
  margin-top: 0px;
  padding-top: 4px;
`

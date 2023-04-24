import styled from "@emotion/styled"
import { colors } from "../styles"
import { Link } from "react-router-dom";


const ButtonContainer = styled.div`
  width: 414px;
  height: 90px;
  background: ${colors.gray[150]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`
const ButtonSecondaryContainer = styled.div`
  width: 414px;
  height: 90px;
  background: ${colors.gray[150]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 90px;
`

const Button = styled.button`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.44rem;
  color: ${colors.white};
  background: ${colors.orange};
  border-radius: 30px;
  width: 310px;
  height: 70px;
  border: none;
  &:hover {
    background:  #FA4A0C;
    cursor: pointer;
  };
`

export function ButtonFooter({children, type, link = false, to}){
  return (
    <>
    <ButtonContainer>
      {link ? <Link to={to}> <Button>{children}</Button> </Link> :
      <Button type={type}>{children}</Button>
      }
    </ButtonContainer>
    </>
  )
}

export function ButtonSecondary({children, type, link = false, to}){
  return (
    <>
    <ButtonSecondaryContainer>
      {link ? <Link to={to}> <Button>{children}</Button> </Link> :
      <Button type={type}>{children}</Button>
      }
    </ButtonSecondaryContainer>
    </>
  )
}
import styled from "@emotion/styled"
import { colors } from "../styles"
import { RiEditBoxFill } from 'react-icons/ri';
import { HiTrash } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const FoodImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 120px;
  left: 13px;
  pointer-events: none;
`

const FoodDiv = styled.div`
  margin-top: 58px;
  width: 156px;
  height: 212px;
  border-radius: 30px;
  background: ${colors.white};
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  position: relative;
`
const FoodTitle = styled.h2`
  padding-top: 106px;
  padding-bottom: 8px;
  color: ${colors.black};
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
  text-align: center;
`
const FoodPrice = styled.p`
  color: ${colors.orange};
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
  text-align: center;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 68.73px;
  margin-top: 9.4px;
`
const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

export function FoodCard ({price, title, image, id, onProductChange}) {

  return (
    <div>
       
      <FoodDiv>
      <StyleLink to={`/show/${id}`}>
        <FoodImage src={image} />

        <FoodTitle>{capitalize(title)}</FoodTitle>
        <FoodPrice>${price/100}</FoodPrice>
      </StyleLink>

        <IconContainer>
          <Link to={`/edit/${id}`}><RiEditBoxFill color={colors.orange}/></Link>
          <HiTrash className={css`cursor:pointer;`} color={colors.orange} onClick={() => {
            onProductChange.handleId(id);
            onProductChange.handleModal(!onProductChange.open);  
          }
          }/>
        </IconContainer>

      </FoodDiv>
    </div>
  )
} 
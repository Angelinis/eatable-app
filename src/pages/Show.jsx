import styled from "@emotion/styled";
import { ButtonFooter } from "../components/ButtonFooter";
import { getProductDetail } from "../services/productServices";
import { useEffect, useState } from "react";
import { colors } from "../styles";
import { capitalize } from "../components/FoodCard";
import { useParams } from "react-router-dom";


const FoodTitle = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.19rem;
  text-align: center;
  margin-bottom: 10px;
`
const FoodImage = styled.img`
  width: 241px;
  height: 241px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 91px;
  margin-top: 94px;
  margin-right: auto;
  margin-left: auto;
`
const FoodPrice = styled.p`
  color: ${colors.orange};
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.19rem;
  text-align: center;
  margin-bottom: 27px;
`
const FoodDescriptionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.44rem;
  text-align: left;
  margin-bottom: 4px;
`
const FoodDescriptionContent = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: justify;
`


export function Show(){
  const  { id } = useParams()
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductDetail(id).then((data)=> setProduct(data))
    .catch(console.log);
  }, [])

  return (
    <>
    {product === null ? (<p>...Loading</p>) : 
    (<>
    <FoodImage src={product.picture_url}/>
     <FoodTitle>{capitalize(product.name)}</FoodTitle> 
     <FoodPrice>${product.price/100}</FoodPrice>
     <FoodDescriptionTitle>Description</FoodDescriptionTitle>
     <FoodDescriptionContent>{product.description}</FoodDescriptionContent>
     </>)
    }
    <ButtonFooter link={true} to="/">Back</ButtonFooter>
    </>
  )
}
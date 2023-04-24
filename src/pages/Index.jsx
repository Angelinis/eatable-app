import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { FoodCard } from "../components/FoodCard";
import { ButtonFooter } from "../components/ButtonFooter";
import { getProducts, deleteProduct } from "../services/productServices";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 72px;
`

const FoodContainer = styled.div`
 display: grid;
 grid-template-columns: auto auto; 
 justify-content: center;
 gap: 20px;
`

export function Index(){
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [height, setHeight] = useState(0);
  const carousel = useRef();
  const otherHeight = 600;


  useEffect(() => {
    getProducts().then((data)=> setProducts(data))
    .catch(console.log);
  }, [refresh])
  useEffect(()=> {
    setHeight(carousel.current.scrollHeight - otherHeight);
  }, [products])

  function handleRefresh(value){
    setRefresh(value);
  };

 

  function handleAction(id, handleModal, open, onProductChange ){
    deleteProduct(id).then((u)=>console.log(u)).catch((e)=> console.log(e));
    console.log("Succesfully deleted product");
    setTimeout(() => {
      onProductChange.handleRefresh(!onProductChange.refresh);
    }, 500);      
    handleModal(!open);
  }

  return (
    <>
    <Modal 
    onProductChange={{handleRefresh: handleRefresh, refresh: refresh}}
    open={isOpen} 
    id={id} 
    handleAction={handleAction} 
    handleOpen={setIsOpen} 
    children={{title: "Are you sure?", actionButton: "Yes, delete it!"}}
    />
    <Title>Products Dashboard</Title>
    <motion.div ref={carousel} className={css` 
    cursor:grab;
    overflow: hidden;
    `}>
      <motion.div dragConstraints={{bottom: 0, top: -height}} drag="y" className={css`
      display: grid;
      grid-template-columns: auto auto; 
      justify-content: center;
      gap: 20px;`}>
      {products === null ? (<p>...Loading</p>) : products.map((product)=> 
        (
        <motion.div key={product.name} className="item">
        <FoodCard key={product.name} image={product.picture_url} title={product.name} price={product.price} id={product.id} onProductChange={{handleModal: setIsOpen, open: isOpen, handleId: setId}}/>
        </motion.div>
        ) 
      ) }
      </motion.div>
    </motion.div>
    <ButtonFooter link={true} to="/create">Create Product</ButtonFooter>
    </>
  )
}
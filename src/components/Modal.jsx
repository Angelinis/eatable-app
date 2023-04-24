import { colors } from "../styles";
import styled from "@emotion/styled";
import React from 'react'
import ReactDOM from 'react-dom'

const MODAL_STYLES = {
  width: "301px",
  height: "218px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: `${colors.gray[150]}`,
  padding: "32px 19.5px",
  borderRadius: "20px",
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `${colors.transparentBlack}`,
  zIndex: 1000
}

const Title = styled.p`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
  text-align: center;
  margin-bottom: 16px;
`

const Button = styled.button`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.44rem;
  color: ${colors.white};
  background: ${colors.orange};
  border-radius: 30px;
  width: 262px;
  height: 47px;
  margin-bottom: 16px;
  border: none;
  &:hover {
    background:  #FA4A0C;
    cursor: pointer;
  };
`

const ButtonSecondary = styled.button`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.44rem;
  color: ${colors.white};
  background: ${colors.yellow};
  border-radius: 30px;
  width: 262px;
  height: 47px;
  border: none;
  &:hover {
    background:  #FA4A0C;
    cursor: pointer;
  };
`

const modalRoot = document.getElementById("modal-root");

export default function Modal({open, id, children, handleOpen, handleAction, onProductChange}){
  if (!open) return null;
  return( 
    ReactDOM.createPortal(
      <>
  <div style={OVERLAY_STYLES}>
  <div style={MODAL_STYLES}>
    <Title>{children.title}</Title>
    <Button onClick={() => handleAction(id, handleOpen, open, onProductChange)}>
      {children.actionButton}</Button>
    <ButtonSecondary onClick={() => handleOpen(!open)}>No, cancel!</ButtonSecondary>
  </div>
  </div>
  </>, modalRoot 
  )
  )
}
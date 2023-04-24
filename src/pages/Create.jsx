import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { ButtonFooter, ButtonSecondary } from "../components/ButtonFooter";
import { createProduct } from "../services/productServices";
import { colors, font } from "../styles";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Title } from "./Index";
import { PersistFormikValues } from 'formik-persist-values';

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 16px;
` 
function onSubmit(values, {setSubmitting, resetForm}){
  const body = {
    name: values.name,
    price: values.price,
    category: values.category,
    description: values.description,
    picture_url: values.picture_url
  }
  createProduct(body).then((u)=> console.log("Succesfully created with id: "+u.id)).catch((e)=>console.log(e));
  // resetForm(initialValues);
  // setSubmitting(false);
}

function validate(values){
  const errors = {}
  if (!values.name) {
    errors.name = "Name is mandatory";
  }
  if (!values.price) {
    errors.price = "Price is mandatory";
  }
  if (!values.category) {
    errors.category = "Category is mandatory";
  }
  if (!values.description) {
    errors.description = "Description is mandatory";
  }
  if (!values.picture_url) {
    errors.picture_url = "Picture URL is mandatory";
  }
  return errors;
}

const CustomInputComponentTextArea = ({field, form: { touched, errors }, label, ...props}) => (
  <InputDiv>
    <label className={css`
    color: ${colors.gray[250]};
    font-family: ${font.secondary};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.06rem;
    `}
    >{label}
    </label>
    <textarea className={css`
    border: none;
    background: none;
    border-bottom: 1px solid #333333;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.44rem;
    `} 
    type="text" {...field}  {...props} />
  </InputDiv>
);

const CustomInputComponent = ({field, form: { touched, errors }, label, ...props}) => (
  <InputDiv>
    <label className={css`
    color: ${colors.gray[250]};
    font-family: ${font.secondary};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.06rem;
    `}
    >{label}
    </label>
    <input className={css`
    border: none;
    background: none;
    border-bottom: 1px solid #333333;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.44rem;
    `} 
    type="text" {...field}  {...props} />
  </InputDiv>
);

export function Create(){

  return (
    
    <div>        
      <Title>Create Product</Title>
      <Formik 
      initialValues={
        // get the form data from local storage or use defaults
        {
          name: "",
          price: "",
          description: "",
          category: "",
          picture_url: ""
        }
      }
      onSubmit={onSubmit}
      validate={validate}
      >    
      {({values, errors, touched}) => (
      <Form>
            <Field type="text" id="name" name="name" label="Name" component={CustomInputComponent}/>
            <ErrorMessage name="name" className="form-error" component="p" />

            <Field type="text" name="price" label="Price" component={CustomInputComponent}/>
            <ErrorMessage name="price" className="form-error" component="p" />

            <Field type="text" name="description" label="Description" component={CustomInputComponentTextArea}/>
            <ErrorMessage name="description" className="form-error" component="p" />
            
            <Field type="text" name="category" label="Category" component={CustomInputComponent}/>
            <ErrorMessage name="category" className="form-error" component="p" />

            <Field type="text" name="picture_url" label="Picture URL" component={CustomInputComponentTextArea}/>
            <ErrorMessage name="picture_url" className="form-error" component="p" />
        <ButtonFooter type="submit">Create</ButtonFooter>
        <PersistFormikValues name="create-form" />
      </Form>
      )}
      </Formik>
      <ButtonSecondary link={true} to="/">Back</ButtonSecondary>
    </div>
  )
}
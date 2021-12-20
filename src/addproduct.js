import React,{useState} from 'react';
import Axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Routes } from "react-router-dom";

const schema = yup.object().shape({
	title : yup.string().required(),
	price : yup.string().required(),
	description : yup.string().required(),
	category : yup.string().required(),
    image : yup.string().required(),
  });

function Addproduct(props) {
   
    var[show,setShow]=useState('');

    const {register,handleSubmit, formState } = useForm({
        resolver : yupResolver(schema),
    });
    const { errors } = formState;
       
const addProduct=({title,price,description,category,image})=>{
           
    Axios.post("https://fakestoreapi.com/products",{
        title:title,
        price:price,
        description:description,
        category:category,
        image:image,
    }).then((response)=>{
            if(response.data.message){
                setShow(response.data.message)
            }else{
                setShow("Registered Successfully");
                Routes.reload(window.location.pathname)
            }
    });
}
       
 return (
       <div>
             <div className="container mainbody">
                 <div className="top-btn">
             </div>
            <div className="addform">
                <form>
                    <div className="form-group">
                        <label className="label">title</label>
                        <input className="form-input" name="title" type="text" {...register('title')} />
                        <p className="me-2 text-danger">{errors.title?.message}</p>
                    </div>
                    <div className="form-group">
                        <label className="label">price</label>
                        <input className="form-input" name="price" type="number" {...register('price')} />
                        <p className="me-2 text-danger">{errors.price?.message}</p>
                    </div>
                    <div className="form-group">
                        <label className="label">description</label>
                        <input className="form-input" name="description" type="text" {...register('description')} />
                        <p className="me-2 text-danger">{errors.description?.message}</p>
                    </div>
                    <div className="form-group">
                        <label className="col label">category</label>
                        <input className="form-input" name="category" type="text" {...register('category')} />
                        <p className="me-2 text-danger">{errors.category?.message}</p>
                    </div>
                    <div className="form-group">
                        <label className="col label">image</label>
                        <input className="form-input" name="image" type="file" {...register('image')} />
                        <p className="me-2 text-danger">{errors.image?.message}</p>
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <button type="submit" onClick={handleSubmit(addProduct)} className="btn2 float-end"> Add product</button>
                        </div>
                    </div>
                </form>
                <h4 className="alert1 text-center">{show}</h4>
            </div>
        </div>
       </div>
    );
}
export default Addproduct ;

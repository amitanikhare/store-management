import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'

function AddProduct() {
  const {register , handleSubmit , reset , setValue , formState:{errors}} = useForm();
  const {id}   =useParams()
  function saveProduct(product){
    if(!id){
    axios.post('http://localhost:5000/products' , product).then(response=>{
      if(response.status==201){
        alert("Product is successfully stored into the store app!")
        reset();
      }
    }).catch(error=>{
      console.log(error)
      alert("something went wrong")
    })}else{
      axios.put(`http://localhost:5000/products/${id}` ,product )
                 .then(res=>{
                     if(res.status===200){
                        alert("Product Details updated..!")
                     }
                 })
                 .catch(error=>console.log(error));

    }
  }
  const getEditData=()=>{
    if(id)
    {
      axios.get(`http://localhost:5000/products/${id}`)
           .then(res=>{
                for(let prop in res.data)
                {
                  setValue(prop,res.data[prop])
                }
           })

    }      
 }
 useEffect(getEditData,[]);

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50 border border-black mt-3 p-3'>
        <h1 className='text-warning text-center fs-3'>
          <i className='bi bi-box-fill'></i>&nbsp;
          Add new product to the store
        </h1>
        <form onSubmit={handleSubmit(saveProduct)}>
        <div>
                  <label className='form-label'>Enter Product Id</label>
                  <input type='text' {...register('id')}  disabled={id} className='form-control border border-dark'/>
                  </div>
          <div className='mb-3'>
            <label htmlFor='prodName' className='text-black form-lable'>Enter Product Name:</label>
            <input type='text' className='form-control' id='prodName'{...register("productName")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='desc' className='text-black form-lable'>Enter Product Description:</label>
            <input type='text' className='form-control' id='desc'{...register("description")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='category' className='text-black form-lable'>Enter Product Category:</label>
            <input type='text' className='form-control' id='category'{...register("category")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='price' className='text-black form-lable'>Enter Product price:</label>
            <input type='text' className='form-control' id='price'{...register("price")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='supp' className='text-black form-lable'>Enter supplier Name:</label>
            <input type='text' className='form-control' id='supp'{...register("supplier")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='stock' className='text-black form-check-lable me-4'>Is product in stock?:</label>
            <input type='checkbox' className='form-check-input' id='stock'{...register("stock")}/>
          </div>
          <div className='text-center'>
            <button type='submit' className='btn btn-primary w-25'>Submit</button>
            </div>
        </form>
      </div>
    </div>
    )
}

export default AddProduct
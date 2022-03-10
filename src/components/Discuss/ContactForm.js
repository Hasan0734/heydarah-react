import React from 'react';
import { useForm } from "react-hook-form";
import './Discuss.css'
const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex gap-4'>
                <div className='w-100'>
                    <input className='form-control bg-dark  mb-1 input-focus' {...register("name", { required: true })} placeholder="Name" />
                    {errors.name && <span className='text-color'>You Must Enter Your Name.</span>}

                </div>
                <div className='w-100'>
                    <input className='form-control bg-dark mb-1 input-focus' {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span className='text-color'>You Must Enter Your Email.</span>}
                </div>
            </div>
            <br />
            <textarea rows={5} className='form-control bg-dark  mb-1 input-focus' {...register("message", { required: true })} placeholder="Message" />
            {errors.message && <span className='text-color'>Yea, You Have To Write Something To Send This Form.</span>}
            <br />
            
            <input className='common-btn mt-3' type="submit" value="Send Message"/>
        </form>
    );
};

export default ContactForm;
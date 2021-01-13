import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import ImageUploader from "react-images-upload";
import { FormContainer } from '../../styles/components';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    const [pictures, setPictures] = useState([]);
    
    const onDrop = picture => {
        setPictures([...pictures, picture]);
        console.log(pictures)
    };
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <legend><span class="number">1</span> Upload Product Image </legend>
                <ImageUploader
                    // {...props}
                    withIcon={true}
                    withPreview={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    />
            <legend><span class="number">2</span>Product Detail </legend>
                <input type="hidden" name="Image" defaultValue={pictures} ref={register} />
                <label>Product Name:</label>
                <input type="text" name="Product Name" placeholder="Product Name" ref={register({ required: true })} />
                <label>Product Id:</label>
                <input type="text" name="Product Id" placeholder="Product Id" ref={register({ required: true} )} />
                <label>Price in $:</label>
                <input type="text" name="Price" placeholder="Price" ref={register({ min: { value: 1, message: 'input valid price' }})} />
                <label>Quantity:</label>
                <input type="number" name="Qty" placeholder="5" ref={register({ min: { value: 1, message: 'add 1 or more' }})} />
                <input type="submit" value="SUBMIT" />
        </FormContainer>
    )
}

export default AddProduct
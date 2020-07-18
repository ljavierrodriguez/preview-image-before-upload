import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

const Test = props => {
    const [state, setState] = useState({
        avatar: null,
        imgSrc: null,
    })

    const { store, actions } = useContext(Context);

    const handleFile = e => {
        const { name, files } = e.target;


        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onloadend = function (e) {
            setState(prevState => {
                return { ...prevState, [name]: files[0], imgSrc: [reader.result] }
            });
        }.bind(this);
    }

    const test = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>
            <img src={state.imgSrc} alt="" width="400" height="400" style={{ "border": "2px solid red" }}
            data-toggle="popover" 
            data-placement="right" 
            data-content="Selecciona una imagen para previsualizar"
            />

            <input type="file" name="avatar" id="avartar" onChange={handleFile} />

            <button onClick={test}>Click Me</button>
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                Popover on top
            </button>
        </>
    );
}

export default Test;
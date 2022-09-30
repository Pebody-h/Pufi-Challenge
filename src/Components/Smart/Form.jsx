import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { UilArrowRight } from '@iconscout/react-unicons'

export const Form = () => {
    const [state, handleSubmit] = useForm("moqbwqwz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form_Container'>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Ingresa tu email'
                    className='form_email'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className='form_buton'>
                    <UilArrowRight />
                </button>
            </div>
        </form>
    )
}
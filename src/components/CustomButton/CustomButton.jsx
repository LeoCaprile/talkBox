import React from 'react'
import { useSpechApi } from '../../context/SpechContextProvider'
import './CustomButton.style.css'

export default function CustomButton({ children }) {

    const { setItsSpeaking } = useSpechApi()

    return (
        <button onClick={() => { setItsSpeaking(true) }} className='custombutton'>{children}</button>
    )
}

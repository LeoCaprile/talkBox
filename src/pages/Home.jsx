import React from 'react'
import mensaje from '../assets/speaking.png'
import CustomButton from '../components/CustomButton/CustomButton'
import TextBox from '../components/TextBox/TextBox'
import VoiceSelector from '../components/VoiceSelector/VoiceSelector'

export default function Home() {
    return (
        <div className='home'>
            <img className='logo' height={200} src={mensaje}></img>
            <TextBox></TextBox>
            <VoiceSelector></VoiceSelector>
            <CustomButton>Text To Speech</CustomButton>
        </div>
    )
}


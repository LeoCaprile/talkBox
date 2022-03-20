import React, { useRef, useEffect } from 'react'
import { useSpechApi } from '../../context/SpechContextProvider'
import './TextBox.style.css'

const TextBox = () => {
  const { spechApi, itsSpeaking, setItsSpeaking, textToSpeach, setTextToSpeach, selectedVoice } = useSpechApi()

  const speak = () => {

    if (spechApi.speaking) {
      console.error('Already Speaking')
      return;
    }

    if (textToSpeach != '' && itsSpeaking === true) {

      const speakText = new SpeechSynthesisUtterance(textToSpeach)

      speakText.onend = e => {
        setItsSpeaking(false)
      }

      speakText.onerror = e => {
        alert('Ha ocurrido un error, porfavor intentelo de nuevo')

      }

      speakText.rate = 1;
      speakText.pitch = 1;
      speakText.voice = selectedVoice;

      spechApi.speak(speakText)
    }
  }

  if (itsSpeaking === true) {
    speak()
  }

  return (
    <textarea className='textbox' onChange={e => { setTextToSpeach(e.target.value) }}></textarea>
  )
}

export default TextBox

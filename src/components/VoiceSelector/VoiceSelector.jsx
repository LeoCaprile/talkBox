import React, { useState, useEffect } from 'react'
import { useSpechApi } from '../../context/SpechContextProvider'

import './VoiceSelector.style.css'

const VoiceSelector = () => {
    const [voices, setVoices] = useState([])
    const { spechApi, itsSpeaking, setSelectedVoice, textToSpeach } = useSpechApi()

    const getVoices = async () => {
        const voices = await spechApi.getVoices()
        setVoices(voices)
    }

    useEffect(() => {
        getVoices()
        setSelectedVoice(voices[0])
    }, [])

    return (
        <select className='voice-selector' onChange={e => { voices.forEach((voice) => { if (voice.name === e.target.value) { setSelectedVoice(voice) } }) }} disabled={spechApi.speaking} >
            {
                voices.map((voice) => {
                    return <option key={voice.name}>{voice.name}</option>
                })
            }
        </select >
    )
}

export default VoiceSelector
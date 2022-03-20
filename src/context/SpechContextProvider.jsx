import React, { createContext, useState, useContext } from 'react'

const SpechContext = createContext()

export function useSpechApi() {
  return useContext(SpechContext)
}

export default function SpechContextProvider({ children }) {
  const [spechApi] = useState(window.speechSynthesis)
  const [itsSpeaking, setItsSpeaking] = useState(false)
  const [selectedVoice, setSelectedVoice] = useState('')
  const [textToSpeach, setTextToSpeach] = useState('')

  return (
    <SpechContext.Provider value={{ spechApi, itsSpeaking, setItsSpeaking, textToSpeach, setTextToSpeach, setSelectedVoice, selectedVoice }}>
      {children}
    </SpechContext.Provider>
  )
}

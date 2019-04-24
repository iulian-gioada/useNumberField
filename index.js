import { useRef, useEffect } from 'react'

const onPasteHandler = e => {
  const clipboardData = e.clipboardData || window.clipboardData
  let paste = clipboardData.getData('text')
  paste = paste.replace(new RegExp('[^-+,\\.0-9]+', 'ig'), '')
  e.target.value = paste.length ? paste : e.target.value
  e.preventDefault()
  e.stopPropagation()
}

const keyPressHandler = e => {
  if (e.key.toLowerCase() === 'v' && (e.metaKey || e.ctrlKey)) {
    return true
  }
  const regex = new RegExp('[-+,\\.0-9]+', 'i')
  if (!regex.test(e.key)) {
    return false
  }
}

export const useNumberField = existingRef => {
  const generatedRef = useRef(null)
  const ref = existingRef || generatedRef

  useEffect(() => {
    ref.current.onkeypress = keyPressHandler
    ref.current.onpaste = onPasteHandler
    return () => {
      ref.current.onkeypress = null
      ref.current.onpaste = null
    }
  }, [])

  return ref
}

export default useNumberField

import { useRef, useEffect } from 'react'

const keyPressHandler = e => {
  const regex = new RegExp('[-+,e\\.\\s\\d]+', 'i')
  if (!regex.test(e.key)) {
    return false
  }
}

export const useNumberField = existingRef => {
  const generatedRef = useRef(null)
  const ref = existingRef || generatedRef

  useEffect(() => {
    ref.current.onkeypress = keyPressHandler
    return () => {
      ref.current.onkeypress = null
    }
  }, [])

  return ref
}

export default useNumberField

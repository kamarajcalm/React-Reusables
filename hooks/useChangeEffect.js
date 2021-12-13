import React, { useEffect, useRef } from 'react';
const useChangeEffect = (callback, dependencies) => {
  const firstRenderRef = useRef(true)
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}

export default useChangeEffect;
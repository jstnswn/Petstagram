import React, { useEffect, useState } from 'react'

export default function Sidebar() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/follows/suggestions/');
      const data = await res.json()

      setSuggestions(data.suggestions);
    })()
  }, [])

  console.log('suggestions: ', suggestions)

  return (
    <>
      <div className='side-profile-container'>

      </div>
      <div className='side-suggestions-container'>
        
      </div>

    </>
  )
}

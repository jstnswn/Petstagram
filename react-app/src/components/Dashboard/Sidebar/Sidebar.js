import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FollowSuggestion from './FollowSuggestion';

export default function Sidebar() {
  const [suggestions, setSuggestions] = useState([]);
  const user = useSelector(({ session }) => session.user);

  console.log(suggestions)
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/follows/suggestions/');
      const data = await res.json()

      setSuggestions(data.suggestions);
    })()
  }, [])

  return (
    <>
      <div className='side-profile-container'>
        <img className='side-profile-avatar' alt='profile avatar' src={user.image_url} />
        <div className='side-user-info'>
          <p className='username'>{user.username}</p>
          <p className='full-name'>{user.full_name}</p>

        </div>
      </div>
      <div className='side-suggestions-container'>
        <h3 className='suggestion-header'>Suggestions For You</h3>
        {suggestions.map((user, idx) => (
          <FollowSuggestion key={idx} user={user} setSuggestions={setSuggestions}/>
        ))}
      </div>

    </>
  )
}

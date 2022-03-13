import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowSuggestion from './FollowSuggestion';

export default function Sidebar() {
  const [suggestions, setSuggestions] = useState([]);
  const user = useSelector(({ session }) => session.user);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/follows/suggestions/');
      const data = await res.json()

      setSuggestions(data.suggestions);
    })()
  }, [])

  return (
    <div className='dashboard-sidebar-inner'>
      <div className='side-profile-container'>
        <Link to={`/${user.username}`}>
          <img className='side-profile-avatar' alt='profile avatar' src={user.image_url} />
        </Link>
        <div className='side-user-info'>
          <Link to={`/${user.username}`}>
            <p className='username'>{user.username}</p>
          </Link>
          <p className='full-name'>{user.full_name}</p>
        </div>
      </div>
      <div className='side-suggestions-container'>
        {suggestions.length > 0 && <h3 className='suggestion-header'>Suggestions For You</h3>}
        {suggestions.map((user, idx) => (
          <FollowSuggestion key={idx} user={user} setSuggestions={setSuggestions} />
        ))}
      </div>

    </div>
  )
}

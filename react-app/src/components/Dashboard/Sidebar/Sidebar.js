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
      <section className='sidebar-footer'>
        <ul>
          {/* <li>Developers:</li> */}
          <li>
            <a href='https://www.linkedin.com/in/chris-young-96453917/' target='_blank' rel="noopener noreferrer">Chris Young</a>
          </li>
          <li className='spacing-dot'>.</li>
          <li>
            <a href='https://www.linkedin.com/in/djlee777/' target='_blank' rel="noopener noreferrer">David Lee</a>
          </li>
          <li className='spacing-dot'>.</li>
          <li>
            <a href='https://www.linkedin.com/in/justin-chau-1123a9142/' target='_blank' rel="noopener noreferrer">Justin Chau</a>
          </li>
          {/* <li className='spacing-dot'>.</li> */}
          <li>
            <a href='https://www.linkedin.com/in/jstnswn/' target='_blank' rel="noopener noreferrer">Justin Sweeney</a>
          </li>
          <li className='spacing-dot'>.</li>
          <li>
            <a href='https://www.linkedin.com/in/srdanvorkapic/' target='_blank' rel="noopener noreferrer">Srdan Vorkapic</a>
          </li>
          <li className='placeholder'>
            Placeholder
          </li>
        </ul>
        <p>© 2022 ALL RIGHTS RESERVED</p>
      </section>
    </div>
  )
}

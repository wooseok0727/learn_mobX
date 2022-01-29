import { useEffect } from 'react'

export default function UserList({ getUsers, users }) {
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.login}</li>
        ))}
      </ul>
    </div>
  )
}

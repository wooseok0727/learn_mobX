import { inject, observer } from 'mobx-react'
import React, { useCallback } from 'react'
import UserList from '../components/UserList'

const UserListContainer = ({ userStore }) => {
  // const getUsers = useCallback(async () => {
  //   try {
  //     userStore.pending()
  //     const response = await axios.get('https://api.github.com/users')
  //     userStore.success(response.data)
  //   } catch (error) {
  //     userStore.fail(error)
  //   }
  // }, [userStore])

  const getUsers = useCallback(() => {
    userStore.getUsersFlow()
  }, [userStore])

  const users = userStore.state.users

  return <UserList getUsers={getUsers} users={users} />
}

export default inject('userStore')(observer(UserListContainer))

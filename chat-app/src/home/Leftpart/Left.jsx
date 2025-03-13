import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <>
    <div>
    <div className="w-[50%] text-gray-300 bg-gray-900"></div>
    <Search />
    <Users />
    <Logout />
    </div>
    </>
  )
}

export default Left
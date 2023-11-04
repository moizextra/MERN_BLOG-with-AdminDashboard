import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
const UserProfile = () => {
const Username=useSelector((state)=>state.User.userData.user.name);
  return (
    <Stack direction="row" spacing={2} className='cursor-pointer'>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>{Username.slice(0,2)}</Avatar>
  </Stack>
  )
}

export default UserProfile
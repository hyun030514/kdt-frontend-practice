import React from 'react'
import { logoutAction } from '../actions';
import { Button } from '@/components/ui/button';

function LogoutButton() {

const handleLogout =  () => {
  logoutAction()
  }
    return (
    <Button onClick = {handleLogout} variant='ghost'>로그아웃</Button>

  )
}


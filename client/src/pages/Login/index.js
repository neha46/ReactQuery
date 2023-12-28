import React, { useEffect } from 'react'
import {Button, Form, Input} from 'antd'

const Login = () => {
  const onFinish=async(values)=>{
    console.log(
      values
    )
    
  }
  useEffect(()=>{
    
  },[])
  return (
    <div className='p-3'>   
      <Form layout='vertical' onFinish={onFinish}>
    <Form.Item label="Email" name="email">
      <Input type='text' ></Input>
    </Form.Item>
    <Form.Item label="Password" name="password">
      <Input type='text' ></Input>
    </Form.Item>
    <Button type='primary'>
      login
    </Button>
    </Form>
  
  </div>
  )
}

export default Login;
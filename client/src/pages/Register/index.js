import { Form, Input } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <div>
       <Form layout='vertical'>
    <Form.Item label="Name" name="name">
      <Input type='text' ></Input>
    </Form.Item>
    <Form.Item label="Email" name="email">
      <Input type='text' ></Input>
    </Form.Item>
    
    <Form.Item label="Password" name="password">
      <Input type='number' ></Input>
    </Form.Item>
    </Form>
    </div>
  )
}

export default Register
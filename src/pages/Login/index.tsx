import React from 'react';

import { 
    Link 
} from 'react-router-dom';

import { 
    Container
} from './styles';

import Block from '../../components/Block';
import Form from '../../components/Form';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';

const Login: React.FC = () => {
    return (
        <Container>
            <Block type='content'>
                <Block type='header'>
                    <Text type='title'>Login</Text>
                    <Text type='subtitle'>Sistema de autenticação</Text>
                </Block>

                <Form type='login'>
                    <Text type='input'>Email</Text>
                    <Input type='text' placeholder='Digite seu Email'/>
                
                    <Text type='input'>Password</Text>
                    <Input type='password' placeholder='Digite sua Senha'/>

                    <Block type='form'>
                        <Label>
                            <Input type='checkbox'/>
                            <Text type='label'>Remember me</Text>
                        </Label>

                        <Text type='password'>Forgot password?</Text>
                    </Block>

                    <Button type='submit'>
                        <Text type='submit'>Login</Text>
                    </Button>

                    <Text type='register'>Não possui conta? <Link to='/register'>Registre-se</Link> agora!</Text>
                </Form>
            </Block>
        </Container>
    );
};

export default Login;
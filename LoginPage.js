import React from 'react';
import {Modal, Header, Image, Tab, Form, Grid, Button, Icon} from 'semantic-ui-react';
import {logo} from './logo-sm.png';

export default function LoginPage() {

    const panes = [
        {
            menuItem: 'Log In',
            render: () => (
                    <Tab.Pane>
                       <Grid>
                           <Grid.Row>
                               <Grid.Column>
                                    <Form size="small">
                                        <Form.Input 
                                            fluid
                                            label='Username'
                                            required
                                            labelPosition="left"
                                            placeholder="Username"
                                            style={{marginBottom:'1rem', marginTop:'1rem'}}
                                        />
                                        <Form.Input 
                                            fluid
                                            label='Password'
                                            required
                                            labelPosition="left"
                                            placeholder="Username"
                                            type="password"
                                            style={{marginBottom:'1rem', marginTop:'1rem'}}
                                        />
                                        <Form.Checkbox
                                            label='Remember Me'
                                            style={{marginBottom:'1rem', marginTop:'1rem'}}
                                        />
                                        <Button fluid primary style={{marginTop:'1rem'}}>
                                            <Icon name="log out"/>
                                            Log In
                                        </Button>
                                        <Header  textAlign="center">
                                            <Header.Content as='h6'>
                                                Don't have an account? 
                                            </Header.Content>
                                        </Header>
                                    </Form>
                                    
                               </Grid.Column>
                           </Grid.Row>
                       </Grid>
                    </Tab.Pane>
            )
        },
        {
            menuItem: 'Register',
            render: () => (
                    <Tab.Pane>
                        Register Form
                    </Tab.Pane>
            )
        }
    ];

    return (
        <Modal open={true} size="tiny">
            <Header textAlign='center' style={{color:'#ffffff',backgroundColor:'#303e67',paddingBottom:'3rem'}}>
                    <Image src='./logo-sm-png'/>
                    <Header.Content as='h1'>
                        Let's Get Started With Fas Dashboard
                    </Header.Content>
                    <Header.Content as='p'>
                        Sign in to Continue
                    </Header.Content>
                </Header>
            <Modal.Content>
                <Tab 
                    panes={panes}
                    menu={{
                        secondary:true,
                        pointing: true,
                        attached: false,
                        tabular: true,
                        color:'blue'
                    }}
                    menuPosition="left"
                    style={{marginBottom:'4rem', marginTop:'2rem'}}
                />
            </Modal.Content>
        </Modal>
    )
}

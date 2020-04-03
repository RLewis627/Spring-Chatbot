import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Conversation from './components/Conversation';
import UserLoginBox from './components/UserLoginBox';
import Register from './components/Register';
import Thanks from './components/Thanks';
import "./css/MainStyle.css";

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={UserLoginBox} />
            <Route path='/register' component={Register} />
            <Route path='/talk' component={Conversation} />
            <Route path='/thankyou' component={Thanks} />
        </Layout>
    );
};

export default App;

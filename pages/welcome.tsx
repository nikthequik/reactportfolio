
import { Component } from 'react';
import MainLayout from '../components/MainLayout';
import { Button } from 'reactstrap';

export default class Welcome extends Component {
    render() {
        return (
            <MainLayout>
                <Button>Bootstrap Button</Button>
            </MainLayout>
        )
    }
}
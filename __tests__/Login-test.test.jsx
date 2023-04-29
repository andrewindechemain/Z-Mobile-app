import React from "react"; 
import renderer from 'react-test-renderer';
import Login from '../components/Login.jsx';

test('renders correctly', () =>{
    const tree = renderer.create( <Login />).toJson();
    expect(tree).toMatchSnapshot();
});
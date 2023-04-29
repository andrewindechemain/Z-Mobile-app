import React from "react"; 
import renderer from 'react-test-renderer';
import Homepage from '../components/Homepage.jsx';

test('renders correctly', () =>{
    const tree = renderer.create( <Homepage />).toJson();
    expect(tree).toMatchSnapshot();
});
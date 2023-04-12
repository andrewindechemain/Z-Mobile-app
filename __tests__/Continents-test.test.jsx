import React from "react"; 
import renderer from 'react-test-renderer';
import Continents from '../components/Continents.jsx';

test('renders correctly', () =>{
    const tree = renderer.create( <Continents />).toJson();
    expect(tree).toMatchSnapshot();
});
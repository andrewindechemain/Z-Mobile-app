import React from "react"; 
import renderer from 'react-test-renderer';
import Menubar from '../components/Menubar.jsx';

test('renders correctly', () =>{
    const tree = renderer.create( <Menubar />).toJson();
    expect(tree).toMatchSnapshot();
});
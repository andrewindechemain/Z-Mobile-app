import React from "react"; 
import renderer from 'react-test-renderer';
import StaffPage from '../components/StaffPage.jsx';

test('renders correctly', () =>{
    const tree = renderer.create( <StaffPage />).toJson();
    expect(tree).toMatchSnapshot();
});
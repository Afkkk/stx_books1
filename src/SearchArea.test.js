import React from 'react';
import { render, screen ,fireEvent,cleanup } from '@testing-library/react';

import SearchArea from "./SearchArea.js";

afterEach(cleanup);

it('Test',()=>{
    screen.debug();
    
    render(<SearchArea/>);
    fireEvent.click(screen.getByRole("button"))
 });

 it('test2',()=>{
     screen.debug();
     render(<SearchArea/>);
     fireEvent.change(screen.getByPlaceholderText("Enter Author name"),{
         target: {value:'e'}
     })
 });

 it('test3',()=>{
    screen.debug();
    render(<SearchArea/>);
    fireEvent.change(screen.getByPlaceholderText("Enter Subjet"),{
        target: {value:'e'}
    })
});
it('test4',()=>{
    screen.debug();
    render(<SearchArea/>);
    fireEvent.change(screen.getByPlaceholderText("Enter book name"),{
        target: {value:'e'}
    })
});
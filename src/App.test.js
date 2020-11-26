import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import JSAPP from './App';

test('render without crashing', () => {
  const div = document.createElement("div")
  ReactDOM.render(<JSAPP/>, div)
  ReactDOM.unmountComponentAtNode(div)
  // const { getByText } = render(<JSAPP />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

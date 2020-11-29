import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title="Fourth card
    " content={4}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
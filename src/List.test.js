import React from 'react';
import ReactDOM from 'react-dom';
import List from './App';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders in the UI', () => {
    const tree = renderer
    .create(<List header='First list' />)
    .toJSON()
    expect(tree).toMatchSnapshot();  
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Timer component', () => {
  it('renders Timer', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Timer />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

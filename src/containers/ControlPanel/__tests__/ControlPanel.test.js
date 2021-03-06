import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store';
import ControlPanel from '..';

const audio = new Audio();

describe('<ControlPanel />', () => {
  it('component render', () => {
    const panel = renderer.create(
      <Provider store={store}>
        <ControlPanel delay={1} audioMove={audio} audioPopup={audio} />
      </Provider>,
    ).toJSON();
    expect(panel).toMatchSnapshot();
  });
});

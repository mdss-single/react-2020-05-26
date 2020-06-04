import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const component = mount(<Review key={review.id} {...review} />);
    expect(component.find('[data-id="review"]').length).toBe(1);
  });
  it('has name', () => {
    const component = mount(<Review key={review.id} {...review} />);
    expect(component.find('[data-id="review-name"]').text()).not.toBeNull();
  });
  it('has text', () => {
    const component = mount(<Review key={review.id} {...review} />);
    expect(component.find('[data-id="review-text"]').text()).not.toBeNull();
  });
  it('has rating', () => {
    const component = mount(<Review key={review.id} {...review} />);
    expect(component.find('[data-id="review-rating"]').html()).not.toBeNull();
  });
});

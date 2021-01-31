import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/app.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import ItemHeading from '../client/src/components/itemHeading.jsx';
import ItemPriceDetails from '../client/src/components/itemPriceDetails.jsx';
import ItemConfiguration from '../client/src/components/itemConfiguration.jsx';
import ItemColorOptions from '../client/src/components/itemColorOptions.jsx';
import ItemDescription from '../client/src/components/itemDescription.jsx';
import ColorOption from '../client/src/components/colorOption.jsx';
import ConfigurationOption from '../client/src/components/configurationOption.jsx';
import DescriptionPoint from '../client/src/components/descriptionPoint.jsx';


//test whether each component renders
describe('Components Should Render', () => {

  test('App component should render correctly onto the page', () => {
    const appWrapper = shallow(<App />);
    expect(toJson(appWrapper)).toMatchSnapshot();
  });

  test('ItemHeading component should render correctly', () => {
    const itemHeadingWrapper = shallow(<ItemHeading/>);
    expect(toJson(itemHeadingWrapper)).toMatchSnapshot();
  });

  test('ItemPriceDetails component should render correctly', () => {
    const itemPriceWrapper = shallow(<ItemPriceDetails />);
    expect(toJson(itemPriceWrapper)).toMatchSnapshot();
  });

  test('ItemColorOptions component should render correctly', () => {
    const itemColors = shallow(<ItemColorOptions />);
    expect(toJson(itemColors)).toMatchSnapshot();
  });

  test('ItemConfiguration component should render correctly', () => {
    const itemConfiguration = shallow(<ItemConfiguration />);
    expect(toJson(itemConfiguration)).toMatchSnapshot();
  });

  test('ItemDescription component should render correctly', () => {
    const itemDescription = shallow(<ItemDescription />);
    expect(toJson(itemDescription)).toMatchSnapshot();
  });

  test('Rating component should render correctly', () => {
    const rating = shallow(<Rating />);
    expect(toJson(rating)).toMatchSnapshot();
  });

  test('AnsweredQuestions component should render correctly', () => {
    const AnsweredQuestions = shallow(<AnsweredQuestions/>);
    expect(toJson(AnsweredQuestions)).toMatchSnapshot();
  });

  test('ColorOption component should render correctly', () => {
    const ColorOption = shallow(<ColorOption/>);
    expect(toJson(colorOption)).toMatchSnapshot();
  });

  test('ConfigurationOption component should render correctly', () => {
    const ConfigurationOption = shallow(<ConfigurationOption/>);
    expect(toJson(ConfigurationOption)).toMatchSnapshot();
  });

  test('DescriptionPoint component should render correctly', () => {
    const DescriptionPoint = shallow(<DescriptionPoint/>);
    expect(toJson(DescriptionPoint)).toMatchSnapshot();
  });
});
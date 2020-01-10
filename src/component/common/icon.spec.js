import {mount} from 'enzyme';
import React from 'react';
import Icon from './icon.component.jsx';


describe('Icon component', () => {

    it('uses extra prop', () => {

        const extra = 'some extra classes';
        const icon = mount(<Icon extra={extra}/>);

        expect(icon.props()).toEqual({extra: 'some extra classes'});

    });
});

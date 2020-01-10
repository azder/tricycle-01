import {mount} from 'enzyme';
import React from 'react';
import SimpleSearch from './simple-search.component.jsx';


describe('SimpleSearch component', () => {

    it('displays Icon for search', () => {

        const searchWrapper = mount(<SimpleSearch/>);
        const iconWrapper = searchWrapper.find('Icon');

        expect(iconWrapper.length).toEqual(1);

    });
});

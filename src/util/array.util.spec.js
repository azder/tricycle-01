/* eslint-disable no-magic-numbers */

import {rowsFrom} from './array.util.js';

describe('rowsFrom function', () => {

    it('splits array in pairs', () => {

        const actual = rowsFrom(2, [1, 2, 3, 4]);
        const expected = [[1, 2], [3, 4]];

        expect(actual).toEqual(expected);

    });

    it('splits array in triplets', () => {

        const actual = rowsFrom(3, [1, 2, 3, 4]);
        const expected = [[1, 2, 3], [4]];

        expect(actual).toEqual(expected);

    });


    it('returns empty array on null or undefined', () => {

        const actual = rowsFrom(3, null);
        const expected = [];

        expect(actual).toEqual(expected);

        expect(rowsFrom(void 0, void 6)).toEqual([]);

    });

});

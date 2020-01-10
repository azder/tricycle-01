/* eslint-disable no-magic-numbers */

// README:
// this will usually be a separate project
// not just a mock server with mock database
// but for the front end purpose
// it's rolled up in a file or two in the same one


import {int} from './lib.mjs';


const K = 1000;
const M = 1000000;


export const videosFilter = (

    (criteria, {videos: value}) => {

        criteria = int(criteria);

        if (1 === criteria && 100 <= value && 500 >= value) {
            return true;
        }

        if (2 === criteria && 500 <= value && K >= value) {
            return true;
        }
        if (3 === criteria && K <= value && 3 * K >= value) {
            return true;
        }

        return 4 === criteria && 3 * K <= value;

    }

);


export const viewsFilter = (

    (criteria, {views: value}) => {

        criteria = int(criteria);

        if (1 === criteria && 10 * K <= value && 50 * K >= value) {
            return true;
        }
        if (2 === criteria && 50 * K <= value && 100 * K >= value) {
            return true;
        }
        if (3 === criteria && 100 * K <= value && M >= value) {
            return true;
        }
        if (4 === criteria && M <= value && 300 * M >= value) {
            return true;
        }

        return 5 === criteria && 300 * M <= value;

    }

);


export const followersFilter = (

    (criteria, {followers: value}) => {

        criteria = int(criteria);

        if (1 === criteria && K <= value && 10 * K >= value) {
            return true;
        }
        if (2 === criteria && 10 * K <= value && 20 * K >= value) {
            return true;
        }
        if (3 === criteria && 20 * K <= value && 50 * K >= value) {
            return true;
        }
        if (4 === criteria && 50 * K <= value && 100 * K >= value) {
            return true;
        }

        return 5 === criteria && 100 * K <= value && 500 * K >= value;

    }

);

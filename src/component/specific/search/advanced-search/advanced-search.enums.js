import PLAT from '../../../../etc/platform.enum.mjs';
import GENR from '../../../../etc/genre.enum.mjs';


const {freeze} = Object;


const platform = freeze({
    All:      '',
    Youtube:  PLAT.youtube,
    Vimeo:    PLAT.vimeo,
    Facebook: PLAT.facebook,
});

const genre = freeze({
    All:       '',
    Adventure: GENR.adventure,
    Action:    GENR.action,
    Thriller:  GENR.thriller,
});

const available = freeze({
    Available:       true,
    'Not Available': false,
});

const videos = freeze({
    '100 - 500': 1,
    '500 - 1k':  2,
    '1k - 3k':   3,
    '3k+':       4,
});

const views = freeze({
    '100k - 500k': 1,
    '500k - 100k': 2,
    '100k - 1M':   3,
    '1M - 300M':   4,
    '300M+':       5,
});

const followers = freeze({
    '1k - 10k':    1,
    '10k - 20k':   2,
    '20k - 50k':   3,
    '50k - 100k':  4,
    '100k - 500k': 5,
});


export default freeze({
    platform,
    genre,
    available,
    videos,
    views,
    followers,
});

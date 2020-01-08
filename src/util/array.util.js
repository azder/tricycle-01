export const rowsFrom = (

    (perRow, array) => {

        array = array ?? [];
        const len = array.length;
        const result = [];

        // eslint-disable-next-line init-declarations
        let from = 0;

        while (from < len) {
            const to = from + perRow;
            result.push(array.slice(from, to));
            from = to;
        }

        return result;
    }

);

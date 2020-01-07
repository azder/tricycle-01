export const getText = (

    async uri => (await fetch(uri)).text()

);


export const getJson = (

    async uri => {
        const response = await fetch(uri);
        if (!response.ok) {
            const {statusText, status} = response;
            console.error('getJson()', status, statusText); // eslint-disable-line no-console
            throw response;
        }
        return response.json();
    }

);

/**
 * Description [Access endpoint for videos.]
 * @params { String } searchQuery
 * @return { Array }
 */
export const mockableVideos = () => {
    const MOVIES_API_ENDPOINT = `https://demo2697834.mockable.io/movies`;

    return fetch(MOVIES_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then(json => {
            return json.entries.map(({ title, contents, images }) => ({
                id: contents[0].id,
                title,
                mediaUrl: contents[0].url,
                thumbnail: images[0].url
            }));
        });
};

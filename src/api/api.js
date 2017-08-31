/**
 * Description [Access endpoint for videos.]
 * @return { Array }
 */
export const mockableVideos = () => {
    const MOVIES_API_ENDPOINT = `https://demo2697834.mockable.io/movies`;

    return fetch(MOVIES_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then(json => {
            return json.entries.map(({ title, description, contents, images }) => ({
                id: contents[0].id,
                title,
                description,
                mediaUrl: contents[0].url,
                thumbnail: images[0].url
            }));
        });
};

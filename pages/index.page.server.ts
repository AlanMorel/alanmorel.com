export { onBeforeRender };

async function onBeforeRender() {
    return {
        pageContext: {
            documentProps: {
                title: "Alan Morel - Software Engineer, Photographer, Music Producer",
                description: "Alan Morel - Software Engineer, Photographer, Music Producer"
            }
        }
    };
}

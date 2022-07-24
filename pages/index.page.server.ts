export { onBeforeRender };

async function onBeforeRender() {
    return {
        pageContext: {
            documentProps: {
                title: "Alan Morel",
                description: "Alan Morel - Software Engineer, Photographer, Music Producer"
            }
        }
    };
}

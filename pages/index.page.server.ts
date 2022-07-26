export { onBeforeRender };

async function onBeforeRender(): Promise<any> {
    return {
        pageContext: {
            documentProps: {
                title: "Alan Morel",
                description: "Alan Morel - Software Engineer, Photographer, Music Producer"
            }
        }
    };
}

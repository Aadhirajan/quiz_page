function prefetchResource(resourceURL){
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET',resourceURL,true);
    xhrRequest.send();
}
prefetchResource('https://extraone.netlify.app/script.js');
prefetchResource('https://extraone.netlify.app/styles.js');
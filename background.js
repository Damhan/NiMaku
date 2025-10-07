async function handleSubtitleResponse(requestDetails) {

  if (
    requestDetails.url.includes("nflxvideo") &&
    requestDetails.url.includes("o=1&v=") &&
    !requestDetails.url.includes("range")
  ) {
    console.log("Potential subtitle found:");

    if (requestDetails.originUrl.includes("netflix")) {
      console.log(requestDetails.originUrl);
      language_xml = await fetchXML(requestDetails.url);
      const lang = language_xml.activeElement.attributes.getNamedItem("xml:lang").value;
    
      try {
        localStorage.setItem(
          `subtitle_url_language_${lang}`, requestDetails.url,
        );
        console.log(`Language ${lang} stored.`);
        console.log(localStorage.getItem('subtitle_url_language_ja'));
      } catch (e) {
        console.log(e);
      }
    }
  }
}

async function fetchXML(url) {
  const response = await fetch(url);

  const xmlText = await response.text();
  const parser = new DOMParser();
  const xmlTree = parser.parseFromString(xmlText, "text/xml");
  return xmlTree;
}

i=0;

browser.webRequest.onBeforeRequest.addListener(handleSubtitleResponse, {
  urls: ["*://*.nflxvideo.net/*"],
});
console.log("NiMaku background script loaded");

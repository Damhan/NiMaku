function handleSubtitleResponse(requestDetails) {
  i = 0;

  if (
    requestDetails.url.includes("nflxvideo") &&
    requestDetails.url.includes("o=1&v=") &&
    !requestDetails.url.includes("range")
  ) {
    console.log("Potential subtitle found:");
    console.log(`${requestDetails.url}`);
    console.log(requestDetails);

    if (requestDetails.originUrl.includes("netflix")) {
      browser.storage.local.set({
        [`subtitle_url_language_${i}`]: requestDetails.url,
      });
      i++;
    }
  }
}

browser.webRequest.onBeforeRequest.addListener(handleSubtitleResponse, {
  urls: ["*://*.nflxvideo.net/*"],
});

console.log("NiMaku background script loaded");

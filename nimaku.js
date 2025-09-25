async function getStoredLanguages() {
  let language_1 = await browser.storage.local.get();
  console.log(language_1.subtitle_url_language_0);
}

getStoredLanguages();

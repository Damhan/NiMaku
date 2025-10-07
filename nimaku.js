async function getStoredLanguages() {
  await new Promise(r=> setTimeout(r,1000));
  let lang_ja = localStorage.getItem('subtitle_url_language_ja');
  await new Promise(r=> setTimeout(r,1000));
  console.log(lang_ja);

  // NOTE: This is sutpid, use messaging for it instead.
  // content --> background
  // GET GETLANG
  // background --> content
  // lang
}

getStoredLanguages();

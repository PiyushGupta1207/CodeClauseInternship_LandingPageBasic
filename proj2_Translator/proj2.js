async function translateText() {
    const text = document.getElementById('source-text').value;
    const targetLanguage = document.getElementById('target-language').value;
    
    if (!text) {
        alert("Please enter some text to translate.");
        return;
    }

    try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`);
        const data = await response.json();
        console.log(data);
        const translatedText = data.responseData.translatedText;
        document.getElementById('translated-text').innerText = translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        document.getElementById('translated-text').innerText ="Error in translation.";
    }
}

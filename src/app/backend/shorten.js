const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env.local') });
export default async function Shorten(longUrl, alias) {
  // Check if the longUrl is provided
  if (!longUrl) {
    alert("Url is required")
    return
  }

  try {
    // request to TinyURL API to shorten the URL
    // Note: The API key should be stored securely, not hardcoded in the code.
    const response = await fetch(`https://api.tinyurl.com/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.TINYURL_API_KEY}`, // Use your TinyURL API key
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            url: longUrl,
            domain:`tinyurl.com`,
            alias: alias, // Use the provided alias or leave it undefined
        })})

    
    const textData = await response.text();
    let JSONdata = JSON.parse(textData);
    console.log(JSONdata);


    if (JSONdata.errors && JSONdata.errors.length > 0) {
      // Handle errors returned by the API
      return JSONdata.errors[0];
    }

    // Check if the response is successful
    if (!JSONdata.data || !JSONdata.data.tiny_url) {
      throw new Error('tiny_url is missing in the response body');
    }
    
    // Return the shortened URL
    return JSONdata.data.tiny_url

  } catch (error) {
    console.error("Error shortening URL:", error.message || error);
  }
}


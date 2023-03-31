import fetch from "node-fetch";

export default async function handler(req, res) {
  // Code to handle the API request goes here
  const response = await fetch(
    "https://api.github.com/repos/signalhub/api-fetch-data/contents/data.json"
  );

  if (response.ok) {
    const data = await response.json();
    const decodedContent = atob(data.content);
    const jsonData = JSON.parse(decodedContent);
    res.status(200).json(jsonData);
  } else {
    res.status(response.status).json({ error: response.statusText });
  }
}

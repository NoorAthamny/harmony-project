const API_URL = "https://api.mediastack.com/v1/news";
const KEY = import.meta.env.VITE_KEY;

export async function fetchNews() {
  const params = new URLSearchParams({
    languages: "en",
    countries: "us,il,ae",
    access_key: KEY,
    keywords: "israel,palestine",
    limit: 10,
  });

  try {
    const response = await fetch(`${API_URL}?${params}`);

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return { data: [] };
  }
}

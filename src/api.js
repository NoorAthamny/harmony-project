const API_URL = "http://api.mediastack.com/v1/news";

export async function fetchNews() {
  const params = new URLSearchParams({
    languages: "en",
    countries: "us,il,ae",
    access_key: "e6767783a76befb47e148063cbad3cf8",
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

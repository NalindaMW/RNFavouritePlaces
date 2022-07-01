const GOOGLE_API_KEY = "";

// for this we need google maps static api
export function getMapPreview(lat, lng) {
  const imagePreviewURL = "";
  return imagePreviewURL;
}

// for this we need to use google maps geocode api
export async function getAddress(lat, lng) {
  const url = "";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address.");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}

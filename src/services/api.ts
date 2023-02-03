const apiKey: string = import.meta.env.VITE_GEO_API_KEY;

export async function getIpLocation(ip: string) {
    const response = await
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
    return response.json();
}
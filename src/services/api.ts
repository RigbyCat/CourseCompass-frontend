export async function fetchBackendStatus() {
    const COURSE_COMPASS_API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  
    try {
      const res = await fetch(`${COURSE_COMPASS_API_URL}/health`);
  
      if (!res.ok) {
        return { message: `Error: ${res.status}` };
      }
  
      const data = await res.json();
      console.log("Backend response:", data);  // Check what you actually get
      return { message: data.message || data.status || JSON.stringify(data) };
    } catch (error) {
      return { message: `Connection failed: ${error}` };
    }
  }
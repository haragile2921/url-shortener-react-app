import React, { useState } from "react";
function App() {
 const [longUrl, setLongUrl] = useState("");
 const [shortUrl, setShortUrl] = useState("");
 const handleShorten = async () => {
   if (!longUrl) return;
   const res = await fetch("http://localhost:8080/shorten", {
     method: "POST",
     headers: { "Content-Type": "text/plain" },
     body: longUrl
   });
   const text = await res.text();
   setShortUrl(text);
 };
 return (
<div style={{ padding: "20px", fontFamily: "Arial" }}>
<h2>URL Shortener</h2>
<input
       type="text"
       placeholder="Enter long URL"
       value={longUrl}
       onChange={(e) => setLongUrl(e.target.value)}
       style={{ width: "300px", marginRight: "10px" }}
     />
<button onClick={handleShorten}>Shorten</button>
     {shortUrl && (
<div style={{ marginTop: "20px" }}>
         Short URL:{" "}
<a href={shortUrl} target="_blank" rel="noopener noreferrer">
           {shortUrl}
</a>
</div>
     )}
</div>
 );
}
export default App;
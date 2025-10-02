// path: src/app/test/page.tsx

// This is a special page to test the direct connection to your backend.
export default async function TestPage() {
  // We will test the exact URL that is failing in your other pages.
  const API_URL = "http://localhost:1337/api/products";
  
  try {
    console.log(`--- TEST PAGE: Attempting to fetch from ${API_URL} ---`);
    
    const res = await fetch(API_URL, { cache: 'no-store' });
    
    console.log(`--- TEST PAGE: Response status: ${res.status} ---`);
    
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', color: 'green' }}>
        <h1>✅ Fetch Successful!</h1>
        <p>This means your Next.js server CAN connect to your backend.</p>
        <hr/>
        <p>Data received:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
    
  } catch (err: any) {
    console.error("--- TEST PAGE: FETCH FAILED ---", err);
    
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace', color: 'red' }}>
        <h1>❌ Fetch Failed!</h1>
        <p>
          This confirms the problem. Your Next.js server cannot make a network connection to your local backend.
        </p>
        <p>The error is a system-level issue on your machine (proxy, firewall, etc.).</p>
        <hr/>
        <p>Error message:</p>
        <pre>{err.toString()}</pre>
      </div>
    );
  }
}
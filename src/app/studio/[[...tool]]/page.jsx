export default function StudioPage() {
  return (
    <main className="simple-page">
      <div className="container">
        <h1>Sanity Studio</h1>
        <p>
          The frontend is wired for Sanity content fetching. Embedded Studio packages are intentionally
          not installed in this first pass because the full Sanity Studio dependency tree was failing
          in this OneDrive-backed workspace. Once the base Next.js app is verified, Studio can be added
          back with <code>npm install sanity @sanity/vision next-sanity styled-components</code>.
        </p>
      </div>
    </main>
  );
}

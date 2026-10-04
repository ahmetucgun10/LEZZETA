export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: "0 0 0.75rem" }}>Lezzetai</h1>
      <p style={{ fontSize: "1.125rem", maxWidth: "32rem", lineHeight: 1.6, margin: 0 }}>
        Platformumuz hazırlanıyor. Çok yakında yayındayız.
      </p>
    </main>
  );
}

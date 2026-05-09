export const metadata = {
  title: "NFG Studio",
  description: "Content management studio for Nigerian Foundries Group"
};

export default function StudioLayout({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        backgroundColor: "#101112"
      }}
    >
      {children}
    </div>
  );
}

import { dataset, isProductionDataset, projectId } from "@/lib/sanity.env";

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
      <div
        style={{
          position: "fixed",
          top: 12,
          right: 12,
          zIndex: 10000,
          padding: "8px 12px",
          borderRadius: 999,
          border: `1px solid ${isProductionDataset ? "rgba(255, 108, 108, 0.45)" : "rgba(97, 218, 251, 0.32)"}`,
          background: isProductionDataset ? "rgba(73, 18, 18, 0.88)" : "rgba(12, 28, 39, 0.88)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.03em",
          backdropFilter: "blur(8px)"
        }}
      >
        {projectId}/{dataset || "missing-dataset"}
      </div>
      {children}
    </div>
  );
}

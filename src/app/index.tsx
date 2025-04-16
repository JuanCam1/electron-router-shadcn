import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className="flex flex-col justify-between items-center gap-8 bg-background pb-8 text-foreground"
    >
      <h2>Electron App </h2>
    </div>
  );
}

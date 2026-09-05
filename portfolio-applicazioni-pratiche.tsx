import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio-applicazioni-pratiche")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "casi" });
  },
  component: () => null,
});

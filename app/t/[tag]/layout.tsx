import { ColorsProvider } from "lib/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ColorsProvider>{children}</ColorsProvider>;
}

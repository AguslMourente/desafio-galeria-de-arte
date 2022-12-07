import "./global.css";
import { Raleway } from "@next/font/google";
import "keen-slider/keen-slider.min.css";

const raleway = Raleway();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={raleway.className}>{children}</body>
    </html>
  );
}

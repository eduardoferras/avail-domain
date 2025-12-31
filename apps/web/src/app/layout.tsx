import type { Metadata } from "next";
import "@/styles/globals.scss";
import AppHeader from "@components/AppHeader";
import Footer from "@/components/Footer";
import Loading from "@/components/UI/Loading";
import { openSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Avail Domain - Verificar disponibilidade domínios",
  description:
    "Importe uma lista de nomes para verificar se já possuem domínios registrados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={openSans.className}>
      <body>
        <AppHeader />
        <Loading>{children}</Loading>
        <Footer />
      </body>
    </html>
  );
}

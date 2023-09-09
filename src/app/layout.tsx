import "./styles/globals.scss";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import { LayoutFooter, LayoutHeader, SearchHeaderSection } from "@/widgets";
import { CONFIG_APP } from "@/shared";

export const metadata: Metadata = CONFIG_APP.META_TAGS.homePage;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
        <LayoutHeader
          title={CONFIG_APP.PROJECT_NAME}
          backgroundSrc={CONFIG_APP.BACGROUND_HEADER}
        >
          <SearchHeaderSection  
          apiKey={CONFIG_APP.GOOGLE_BOOK_KEY!} 
          baseUrl={CONFIG_APP.BASE_BOOK_URL}
          />
        </LayoutHeader>
          {children}
        <LayoutFooter />
          </Providers>
      </body>
    </html>
  );
}

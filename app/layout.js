import "./_styles/globals.css";
import "./_styles/styles.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="LRBD6N2-Cw79KTYktR68wqj2-dIYktUTvUvJhirxYuE"
        />
      </head>
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}

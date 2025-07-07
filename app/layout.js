import "./_styles/globals.css";
import "./_styles/styles.css";

export const metadata = {
  title: {
    template: "%s - Alao Abdul-salam Olayinka",
    default: "Home / Alao Abdul-salam Olayinka",
  },
  description: "A Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Alao Abdulsalam.jpg" type="image/jpg" />
        <meta
          name="google-site-verification"
          content="LRBD6N2-Cw79KTYktR68wqj2-dIYktUTvUvJhirxYuE"
        />
      </head>
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}

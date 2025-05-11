import BookNestProject from "./book-nest-project";
import Head from "next/head";
export const metadata = {
  title: "Booknest Project | Alao Abdul-salam Olayinka Portfolio",
  description:
    "A hotel reservation app with room filtering, date selection, and a smooth booking experience built using React, Next.js, and Supabase.",
  keywords: [
    "Hotel Booking App",
    "Hotel",
    "Booking system",
    "Booknest",
    "NextJS Projects",
    "Supabase",
    "React Portfolio",
    "Hotel Management System",
  ],
  openGraph: {
    title: "Booknest Project | Alao Abdul-salam Olayinka Portfolio",
    description:
      "A responsive hotel booking system with full reservation flow built with React and Supabase.",
    url: "https://abdulsalamalao.com/booknest-project",
    images: ["/booknesthero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booknest Project | Alao Abdul-salam Olayinka Portfolio",
    description:
      "Explore my Booknest hotel booking project built with modern web technologies.",
    images: ["/booknesthero.png"],
  },
  alternates: {
    canonical: "https://abdulsalamalao.com/booknest-project",
  },
};

export default function booknest() {
  return (
    <>
      <BookNestProject />;
    </>
  );
}

export const metadata = {
  title: "The Wild Oasis Project | Alao Abdul-salam Olayinka Portfolio",
  description:
    "The Wild Oasis is a mock hotel admin system featuring bookings, guest management, and dark mode.",
  keywords: [
    "The Wild Oasis",
    "Admin Dashboard",
    "Hotel System",
    "NextJS",
    "React",
  ],
  openGraph: {
    title: "The Wild Oasis Project | Alao Abdul-salam Olayinka Portfolio",
    description:
      "Admin dashboard for managing bookings, guests, and cabins in a hotel environment.",
    url: "https://abdulsalamalao.com/the-wild-oasis-project",
    images: ["/WebWildOasisLanding.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wild Oasis Project | Alao Abdul-salam Olayinka Portfolio",
    description:
      "Explore this admin hotel dashboard made with React, styled-components and Next.js.",
    images: ["/WebWildOasisLanding.webp"],
  },
  alternates: {
    canonical: "https://abdulsalamalao.com/the-wild-oasis-project",
  },
};

import TheWildOasisProject from "./the-wild-oasis-project";

export default function SavourProjectPage() {
  return <TheWildOasisProject />;
}

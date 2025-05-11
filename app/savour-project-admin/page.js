import TomattsAdmin from "./savour-project-admin";

export const metadata = {
  title: "Savour Admin Panel | Alao Abdul-salam Olayinka Portfolio",
  description:
    "The admin dashboard for Savour, where restaurant owners manage reservations and menu items.",
  keywords: [
    "Admin Dashboard",
    "Restaurant Admin",
    "Savour Admin",
    "NextJS Admin Panel",
    "Restaurant Admin Panel",
    "Restaurant Reservation system",
  ],
  openGraph: {
    title: "Savour Admin Panel | Alao Abdul-salam Olayinka Portfolio",
    description:
      "Admin dashboard for managing restaurant orders and reservations in the Savour app.",
    url: "https://abdulsalamalao.com/savour-project-admin",
    images: ["/Admin-dashboard.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savour Admin | Abdul-salam Portfolio",
    description:
      "Take a look at the admin panel for my Savour restaurant application.",
    images: ["/Admin-dashboard.png"],
  },
  alternates: {
    canonical: "https://abdulsalamalao.com/savour-project-admin",
  },
};

export default function Page() {
  return <TomattsAdmin />;
}

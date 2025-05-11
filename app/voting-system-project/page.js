import VotingSystemProject from "./voting-system-project";

export const metadata = {
  title: "Voting System Project | Alao Abdul-salam Olayinka Portfolio",
  description:
    "A secure online voting system with NIN verification and live vote count, built with React and Supabase.",
  keywords: [
    "Voting App",
    "Online Voting System",
    "NextJS",
    "Supabase",
    "Secure Voting",
    "Voting system",
  ],
  openGraph: {
    title: "Voting System | Alao Abdul-salam Olayinka Portfolio",
    description:
      "Explore my voting system web app with authentication, vote tracking, and data analytics.",
    url: "https://abdulsalamalao.com/voting-system-project",
    images: ["/voting-home-page.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voting System | Alao Abdul-salam Olayinka Portfolio",
    description:
      "A full-featured online voting system with secure NIN validation and chart analytics.",
    images: ["/voting-home-page.png"],
  },
  alternates: {
    canonical: "https://abdulsalamalao.com/voting-system-project",
  },
};

export default function Page() {
  return <VotingSystemProject />;
}

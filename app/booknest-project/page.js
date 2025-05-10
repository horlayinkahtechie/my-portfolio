import BookNestProject from "./book-nest-project";
import Head from "next/head";
export const metadata = {
  title: "Booknest – Hotel Booking App | Abdul-salam",
  description:
    "Booknest is a hotel booking app built with Next.js and Tailwind CSS. View project details, features, and tech stack.",
};

export default function booknest() {
  return (
    <>
      <BookNestProject />;
    </>
  );
}

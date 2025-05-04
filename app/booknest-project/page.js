import BookNestProject from "./book-nest-project";

export const metadata = {
  title: "Booknest project",
  description:
    "Booknest is an online platform where users can book a room, pay for the room from the comfort of their home",
};

export default function booknest() {
  return <BookNestProject />;
}

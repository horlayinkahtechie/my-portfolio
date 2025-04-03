import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30%] justify-between items-center max-w-[90%] mx-auto pl-[30px] pr-[30px] pb-[40px] mt-[20px] lg:mt-[180px]">
      <div className="text-white lg:text-[20px] text-[19px]">
        <p className="font-bold font-[Inconsolata] text-center">
          Designed and Developed by Alao Abdul-salam Olayinka
        </p>
      </div>
      <div className="flex gap-5 text-white items-center text-[19px] lg:text-[20px] font-[Inconsolata]">
        <Link className="font-bold" href="#">
          GitHub
        </Link>
        <Link className="font-bold" href="#">
          Download Resume
        </Link>
        <Link className="font-bold" href="#">
          LinkedIn
        </Link>
        <Link className="font-bold" href="#">
          Email
        </Link>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import myPicture from "../../public/My-picture.jpg";

export default function Carousel() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:pt-[300px] mt-[200px] lg:mt-[0px] ml-[10px] mr-[10px] mb-[50px] lg:ml-[150px] lg:mr-[150px] min-h-[60vh] h-screen"
    >
      <div className="font-[Inconsolata] text-[33px] text-center lg:text-start lg:text-[3rem] font-bold text-white w-[100%]">
        <h3 className="lg:leading-[60px] leading-[40px]">
          Hi there, I&apos;m Abdul-salam.
        </h3>
        <span className="lg:leading-[60px]  leading-[40px]">
          Front End Developer
        </span>
        <h3 className="lg:leading-[60px]  leading-[40px]">
          Focuses on building a user-friendly websites and web applications.
        </h3>
      </div>

      {/* <Image
        src={myPicture}
        quality={70}
        width={700}
        height={200}
        placeholder="blur"
        alt="Alao Abdul-salam Olayinka"
      /> */}
    </section>
  );
}

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="lg:mt-[300px] p-10 lg:p-0 lg:ml-[150px] lg:mr-[150px]"
    >
      <h2 className="text-white text-4xl font-bold relative inline-block mb-3">
        About <span className="ml-2">Me</span>
        <span className="absolute left-0 bottom-[-6px] w-[100%] h-2 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          I&apos;m a 22-year-old introvert who found peace of mind in writing
          code.
          <p className="lg:mt-[130px] mt-5">
            My first experience with programming was when I was 16, but I
            didn&apos;t last long: I was a big fan of gaming and I enjoyed more
            playing games. Once in a class we started doing basic c and right
            after c++, and it was totally inscrutable to me.
          </p>
        </p>
        <p className="text-white mt-5 text-[19px] lg:text-[20px] lg:tracking-tight tracking-wide">
          Years later, I had a whole summer free for myself and decided to try
          learning HTML and CSS. The learning experience was radically different
          from high school because I loved creating something that was
          accessible to everyone on the web.
          <p className="lg:mt-[70px] mt-5">
            Since then, I&apos;ve been honing my skills and studying JavaScript
            with other third-party libraries. When I&apos;m not programming, I
            like to workout in the gym. My aim is to assist a company in
            constructing enjoyable products and accomplishing their goals.
          </p>
        </p>
      </div>
    </section>
  );
}

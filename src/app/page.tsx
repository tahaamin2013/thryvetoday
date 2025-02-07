import Image from "next/image";
import Head from "next/head";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Thryve was created by two nurses that take pride and joy in helping the community.  Thryve has been dedicated to providing high-quality education and training for our students. Each class is taught one on one with love and compassion. ",
      name: "Our History",
      src: "/hero2.webp",
    },
    {
      quote:
        "Our team of educators includes some of the most respected and experienced medical professionals in the industry. Each teacher brings a unique set of skills and expertise to our  training center, and is committed to providing excellent expertise to our students.",
      name: "Our Educators",
      src: "/hero3.webp",
    },
    {
      quote:
        "We offer a wide range of medical training, including Advance Life support, Basic Life Support, Pediatric Life Support, Nurse- aid training program, Phlebotomy, and more services to come.  Our services are designed to meet the diverse training needs of our students, from all diverse backgrounds.",
      name: "Our Services",
      src: "/hero1.webp",
    },
  
  ];
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <Head>
        <title>Thryve - Transforming Health and Wellness</title>
        <meta name="description" content="Thryve - Personalized Health Solutions" />
      </Head>
      
      {/* Blurred Circles */}
      <div className="absolute top-10 left-10 w-[400px] h-72 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-[120px]"></div>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl text-center md:text-left md:text-5xl mt-6 sm:mt-0 text-gray-900 dark:text-white mb-4">
              Transform Your Life with More Education
            </h1>
            <p className="text-xl text-center md:text-left text-gray-600 dark:text-gray-300 mb-6">
              Our expert guidance and skills can help you become the best version of yourself.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-[#2DB188] transition-all duration-500 text-white px-6 py-3 rounded-lg hover:bg-[#258a6a]">
                Get Started
              </button>
              <button className="border-[#2DB188] transition-all duration-500 text-[#2DB188] border px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <div className="mb-12 flex w-full h-fit sm:h-[450px] md:mb-16 lg:w-2/2 relative">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <Image
                  src='/hero2.webp'
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  width={700}
                  height={500}
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                <Image
                  src='/hero1.webp'
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section 
      className="relative max-w-6xl mx-auto px-4  sm:px-6 lg:px-8 mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <h1 className="text-center text-5xl md:text-7xl font-bold flex justify-center items-center gap-2">
        About <span className="font-thryez text-[#2DB188]">Thryve</span>.today
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />

    </section>
    </div>
  );
}

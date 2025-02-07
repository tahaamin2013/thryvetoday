import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
            <h1 className="text-5xl text-gray-900 dark:text-white mb-4">
              Transform Your Life with More Education
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Our expert guidance and skills can help you become the best version of yourself.
            </p>
            <div className="flex space-x-4">
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
                  src='/hero1.jpg'
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  width={700}
                  height={500}
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                <Image
                  src='/hero2.jpg'
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
    </div>
  );
}

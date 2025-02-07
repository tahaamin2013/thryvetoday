import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <Head>
        <title>Thryve - Transforming Health and Wellness</title>
        <meta name="description" content="Thryve - Personalized Health Solutions" />
      </Head>


      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Life with More Education
            </h1>
            <p className="text-xl text-gray-600 mb-6">
            Our expert guidance and skills can help you become the best version of yourself.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <Image 
              src="/health-dashboard.png" 
              alt="Thryve Dashboard" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

      </main>
    </div>
  );
}
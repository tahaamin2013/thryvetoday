import Image from "next/image";
import Head from "next/head";
import ContactForm from "@/components/EmailForm";
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },  {
    name: "Natalie Carter",
    role: "Customer Success Agent",
    image: "/Man1.jpg",
  },
]


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
  <div className="grid md:grid-cols-2 items-center">
    {/* Left Column - Text Content */}
    <div>
      <div className="flex mt-5 tracking-wide text-4xl">
        Welcome to <span className="font-thryez text-[#2DB188]">Thryve</span>
      </div>
      
      <p className="text-[10px]  tracking-wide italic font-extralight text-gray-600 dark:text-gray-300">
        Built by nurses, inspired by care, and driven by education.
      </p>

      <h1 className="text-2xl  tracking-wide mb-4 md:text-2xl mt-6 sm:mt-0 text-gray-900 dark:text-white">
        Transform Your Life with Quality Medical Training
      </h1>

      <p className="text-md  tracking-wide text-gray-600 dark:text-gray-300 mb-6">
        Empower yourself with medical skills guided by experienced educators who care about your growth.
      </p>

      <p className="text-md  tracking-wide border-t-2 py-2 border-white text-gray-600 dark:text-gray-300 mb-1">
        Start your journey today to become the best version of yourself.
      </p>

      <div className="flex   tracking-wide mb-5 space-x-4">
        <button className="bg-[#2DB188] transition-all duration-500 text-white px-6 py-3 rounded-lg hover:bg-[#258a6a]">
          Apply Now
        </button>
        <button className="border-[#2DB188] transition-all duration-500 text-[#2DB188] border px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
          Explore Courses
        </button>
      </div>
    </div>

    {/* Right Column - Images */}
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

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
      Why Choose <span className="font-thryez  text-[#2DB188]">Thryve</span>?
    </h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">Personalized Learning</h3>
      <p className="text-gray-600 dark:text-gray-300">
        One-on-one training with love and compassion.
      </p>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">Expert Educators</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Learn from experienced and respected medical professionals.
      </p>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">Diverse Offerings</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Training tailored to various medical disciplines and skill levels.
      </p>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">Community Impact</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Founded by nurses who prioritize helping the community.
      </p>
    </div>
  </div>
</section>
{/* Our Trainings Section */}
<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
      Our <span className="font-thryez text-[#2DB188]">Trainings</span>
    </h2>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
      We offer a variety of medical training programs to suit your needs:
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">
        Advanced Life Support (ALS)
      </h3>
      <div className="w-16 h-1 bg-[#2DB188] mb-4"></div>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">
        Basic Life Support (BLS)
      </h3>
      <div className="w-16 h-1 bg-[#2DB188] mb-4"></div>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">
        Pediatric Life Support (PALS)
      </h3>
      <div className="w-16 h-1 bg-[#2DB188] mb-4"></div>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">
        Nurse-Aid Training Program
      </h3>
      <div className="w-16 h-1 bg-[#2DB188] mb-4"></div>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">
        Phlebotomy Training
      </h3>
      <div className="w-16 h-1 bg-[#2DB188] mb-4"></div>
    </div>

    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3 text-gray-500 dark:text-gray-400 italic">
        ... and more to come!
      </h3>
      <div className="w-16 h-1 bg-gray-300 mb-4"></div>
    </div>
  </div>

  <div className="text-center">
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      Join us to gain essential skills that make a difference.
    </p>
    <button className="bg-[#2DB188] transition-all duration-500 text-white px-8 py-3 rounded-lg hover:bg-[#258a6a] font-semibold">
      View All Courses
    </button>
  </div>
</section>

{/* Meet Our Educators Section */}
<section className="py-16 ">
<div className="text-center  mb-12">
          <a href="#contact" className="text-primary hover:underline mb-4 inline-block">
            Contact us
          </a>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our team of educators </h2>

          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              Book a call
            </Button>
            <Button>Book a demo</Button>
          </div>
        </div>
        <div className="overflow-x-hidden">
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-screen"
  >
    {/* Margin adjust kiya taake first image aadhi dikhe */}
    <CarouselContent className="-ml-[7%] md:-ml-[12%] md:-mr-[8%]">
      {teamMembers.map((member, index) => (
        <CarouselItem
          key={index}
          className={`pl-2 md:pl-4 ${
            index === 0 || index === teamMembers.length - 1
              ? "basis-[14.28%]" // First & Last image aadhi dikhe
              : "basis-1/7"
          }`}
        >
          <div className="group cursor-pointer">
            <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-transparent border-none">
              <CardContent className="p-0  relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-[204px] hover:shadow-2xl  mb-0 shadow-none h-[250px] grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-4 right-4 p-2 backdrop-blur-xl bg-white/60 rounded-lg   text-black">
                  <h3 className="font-semibold text-sm">{member.name}</h3>
                  <p className="text-[9px]">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

</section>


{/* Contact Us Section */}
<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
 <div className="text-center mb-12">
   <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
   <div className="absolute top-1/6 right-1/7 w-96 h-96 bg-pink-400 opacity-20  blur-[120px]"></div>
     Contact <span className="font-thryez text-[#2DB188]">Us</span>
   </h2>
   <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
     Have questions or want to enroll? Get in touch!
   </p>
 </div>

 <div className="grid md:grid-cols-2 gap-5">

 <div className="space-y-8">
   <ContactForm />
   </div>
   {/* Contact Information */}
 <div>
 <div className="bg-white h-fit dark:bg-gray-800 rounded-2xl shadow-lg p-8">
     <div className="space-y-6">
       <div className="flex items-start space-x-4">
         <div>
           <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
           <p className="text-gray-600 dark:text-gray-300">
             1800 Roswell Road, Suite 2100<br />
             Marietta, Georgia 30062
           </p>
         </div>
       </div>

       <div className="flex items-start space-x-4">
         <div>
           <h3 className="font-semibold text-gray-900 dark:text-white">Contact</h3>
           <p className="">Mon - Fri, 9:00 Am - 5:00 PM.</p>
           <p className="text-gray-600 dark:text-gray-400">
           979-484-7983<br />
             info@thryve.today
           </p>
         </div>
       </div>


     </div>
     
   
   </div>
   <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.340578475919!2d-84.4997119198651!3d33.95808467356412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f513c2259ee893%3A0x5e94ecb7f0d816af!2s1800%20Roswell%20Rd%2C%20Marietta%2C%20GA%2030068%2C%20USA!5e0!3m2!1sen!2s!4v1739035682596!5m2!1sen!2s" className="rounded-xl mt-5 w-[500px]" height="250"  loading="lazy" ></iframe> </div>
   {/* Visit & Subscribe */}

 </div>
  
 </div>

</section>

{/* Testimonials Section */}
<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
 <div className="text-center mb-12">
   <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
     <span className="font-thryez text-[#2DB188]">Testimonials</span>
   </h2>
 </div>

 <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center max-w-3xl mx-auto">
   <div className="relative">
     {/* Decorative quote marks */}
     <div className="absolute -top-6 left-0 text-6xl text-[#2DB188]/20">&quot;</div>
     <div className="absolute -bottom-6 right-0 text-6xl text-[#2DB188]/20">&quot;</div>
     
     <p className="text-xl italic text-gray-600 dark:text-gray-300 mb-6">
       Reviews coming soon!
     </p>
     
     <p className="text-gray-500 dark:text-gray-400">
       Check back to hear from students who&apos;ve transformed their lives through Thryve.
     </p>
   </div>
 </div>

 {/* Optional decorative elements */}
 <div className="absolute -z-10 left-1/4 top-1/2 w-64 h-64 bg-[#2DB188]/5 rounded-full blur-3xl"></div>
 <div className="absolute -z-10 right-1/4 bottom-0 w-48 h-48 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
</section>


{/* Footer Section */}
<footer className="bg-white dark:bg-gray-900 mt-20 border-t border-gray-200 dark:border-gray-800">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
   <div className="flex flex-col md:flex-row justify-between items-center">
     {/* Logo and Copyright */}
     <div className="flex items-center mb-4 md:mb-0">
       <span className="font-thryez text-[#2DB188] text-2xl mr-2">Thryve</span>
       <span className="text-gray-600 dark:text-gray-400">
         © 2025 – All Rights Reserved.
       </span>
     </div>

     {/* Navigation Links - Optional */}
     <nav className="flex space-x-6">
       <a 
         href="#terms" 
         className="text-gray-600 dark:text-gray-400 hover:text-[#2DB188] transition-colors"
       >
         Terms
       </a>
       <a 
         href="#privacy" 
         className="text-gray-600 dark:text-gray-400 hover:text-[#2DB188] transition-colors"
       >
         Privacy
       </a>
       <a 
         href="#sitemap" 
         className="text-gray-600 dark:text-gray-400 hover:text-[#2DB188] transition-colors"
       >
         Sitemap
       </a>
     </nav>
   </div>
 </div>
</footer>
    </div>
  );
}

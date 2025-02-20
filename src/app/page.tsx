import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, PhoneCall, Users, Badge as BadgeIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import ContactPage from "@/components/Contact/contact_section";
import FeaturesSection from "@/components/features-section";
import Courses from "@/components/Courses";


interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Natalie Carter",
    role: "Educator",
    image: "/Man1.jpg",
  },
  {
    name: "Arron Austin",
    role: "Educator",
    image: "/Man2 (2).jpg",
  },  {
    name: "Charlie River",
    role: "Educator",
    image: "/Man3.jpg",
  },  {
    name: "Ethan Alan",
    role: "Educator",
    image: "/Man4.jpg",
  },  {
    name: "Lily",
    role: "Educator",
    image: "/Girl 5.jpg",
  },
]


export default function Home() {
  const courses = [
    {
      title: "Nurse Aide Training",
      price: 2500,
      duration: "3.5 weeks",
      totalHours: 138,
      icon: "👩‍⚕️",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Phlebotomy Class",
      price: 1300,
      duration: "3.5 weeks",
      totalHours: 110,
      icon: "💉",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "ACLS",
      price: 150,
      duration: "4 hours",
      totalHours: 4,
      icon: "🫀",
      color: "bg-red-100 text-red-800",
    },
    {
      title: "Basic Life Support",
      price: 65,
      duration: "4 hours",
      totalHours: 4,
      icon: "🩺",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "PALS",
      price: 165,
      duration: "4 hours",
      totalHours: 4,
      icon: "👶",
      color: "bg-purple-100 text-purple-800",
    },
  ]
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden">
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

 <FeaturesSection />

<div>
<Courses />
</div>

{/* Meet Our Educators Section */}
<section className="py-16 ">
<div className="text-center  mb-12">
          <a href="#contact" className="text-primary hover:underline mb-4 inline-block">
            Contact us
          </a>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Team of educators </h2>

          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              Book a call
            </Button>
            <Button>Book a demo</Button>
          </div>
        </div>
        <div className="">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-screen"
      >
        {/* Margin adjust kiya taake first image aadhi dikhe */}
<div className="flex justify-center items-center">
<CarouselContent className="py-6 m grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center ">
  {teamMembers.map((member, index) => (
    <CarouselItem key={index} className="pl-2 md:pl-4">
      <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-4">
        <Card className="rounded-2xl transition-all duration-300 hover:shadow-lg bg-transparent border-none">
          <CardContent className="p-0 relative">
            <div className="relative">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                height={250}
                width={204}
                className="object-cover rounded-xl w-[204px] h-[250px] grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            <div className="absolute bottom-2 left-4 w-[170px] right-4 p-2 backdrop-blur-xl bg-white/60 rounded-lg text-black">
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-[9px]">{member.role}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>
</div>


      </Carousel>
    </div>

</section>


{/* Contact Us Section */}
<ContactPage/>
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
         2025 – All Rights Reserved.
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
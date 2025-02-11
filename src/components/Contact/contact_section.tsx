import { Card, CardContent, CardHeader } from "../ui/card"
import { ContactForm } from "./contact-form"

export default function ContactPage() {
  return (
    <main className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-semibold text-foreground sm:text-5xl">
          Contact
        </h1>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm />
          <div className="grid grid-rows-2 gap-6">
          <Card className="bg-background dark:[#09090B] flex flex-col w-full justify-between p-2 rounded-3xl border border-border">
      <CardHeader className="space-y-1">
      <div className="flex items-start mb-[30px] space-x-4">
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

      </CardHeader>

    </Card>
    <Card className="bg-background dark:[#09090B] flex flex-col w-full justify-between p-2 pt-4 rounded-3xl border border-border">

      <CardContent>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.358611223558!2d-84.50198192524634!3d33.9576210731927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f513c22519b2b7%3A0x2f633ba8098338a3!2s1800%20Roswell%20Rd%20%232100%2C%20Marietta%2C%20GA%2030062%2C%20USA!5e0!3m2!1sen!2s!4v1739297630564!5m2!1sen!2s" className="w-full rounded-3xl h-[270px]"  loading="lazy" ></iframe>
      </CardContent>
    </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

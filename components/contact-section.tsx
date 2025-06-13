import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-sm font-bold text-red-600">CONTACT US</h2>
            <h3 className="mb-6 text-4xl font-bold">Get in Touch</h3>
            <p className="mb-8 text-gray-600">
              Interested in learning more about Mona Mooca? Our team of experts is ready to assist you with any
              questions you may have about our properties or services.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Address</h4>
                  <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP, Brazil</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-600">+55 11 9999-9999</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600">contact@monamooca.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

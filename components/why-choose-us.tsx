export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-sm font-bold text-red-600">WHY CHOOSE US</h2>
            <h3 className="mb-6 text-4xl font-bold">Uncompromising Quality and Service</h3>
            <p className="mb-8 text-gray-300">
              At Mona Mooca, we believe in delivering an exceptional experience from the first consultation to the final
              handover. Our commitment to quality and attention to detail sets us apart in the luxury real estate
              market.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <span>Premium Locations</span>
                <span>95%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="h-2 rounded-full bg-red-600" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <span>Design Excellence</span>
                <span>90%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="h-2 rounded-full bg-red-600" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <span>Client Satisfaction</span>
                <span>98%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="h-2 rounded-full bg-red-600" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <span>Investment Value</span>
                <span>92%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div className="h-2 rounded-full bg-red-600" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

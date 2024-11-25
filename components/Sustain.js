import Image from "next/image"

const Sustain = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-orange-50">
      <div className="bg-orange-50 overflow-hidden flex flex-col md:flex-row gap-x-32">
        {/* Left Content Section */}
        <div className="md:w-1/2 bg-orange-50">
          <div className="mb-8">
            <span className="bg-orange-400 text-xs px-3 py-1 font-medium">
              Sustainability
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Our Commitment to <br />
            <span className="text-orange-400">Sustainable Farming</span>
            <br />
            Practices
          </h1>

          <p className="text-gray-600 mb-8">
            We prioritize sustainable farming to protect our planet. Our
            practices ensure that we support local farmers while providing
            high-quality spices.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-200 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Our Impact</h3>
              <p className="text-sm text-gray-600">
                Over 20,000 acres cultivated by 3,500 dedicated farmers
                committed to sustainability.
              </p>
            </div>

            <div className="bg-orange-200 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Join Us</h3>
              <p className="text-sm text-gray-600">
                Support sustainable agriculture and enjoy the finest spices
                sourced responsibly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative hidden md:block">
          <Image
            src="/images/sustainability.png"
            alt="Spices and herbs in earthen bowls"
            width={588}
            height={640}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Sustain

import Link from "next/link"
import { ArrowRight, Brain, Zap, Shield } from "lucide-react"
import Image from "next/image"
import products from "../data/products.json";

export default function HomePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/newway-labs-logo.png" alt="NewWay Labs" width={360} height={120} className="h-28 w-auto" />
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="#about"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#products"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/privacy"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#contact"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-black hover:text-gray-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black mb-8">
              Our products use AI to help users in work and life.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming industries through cutting-edge artificial intelligence solutions. We create intelligent
              systems that solve real-world problems and drive innovation forward.
            </p>
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition-colors rounded-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">About Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of AI researchers, engineers, and innovators dedicated to pushing the boundaries
              of what's possible with artificial intelligence. Our diverse backgrounds in machine learning, software
              engineering, and product design enable us to create solutions that are both technically sophisticated and
              user-friendly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">AI Research</h3>
              <p className="text-gray-600">Leading research in machine learning and neural networks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Innovation</h3>
              <p className="text-gray-600">Transforming ideas into scalable AI-powered solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Ethics</h3>
              <p className="text-gray-600">Building responsible AI with privacy and safety at the core</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our AI-powered mobile applications designed to enhance your daily productivity
            </p>
          </div>
          <div className="space-y-8">
            {products.map((product, index) => {
              return (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <Image src={product.iconPath} alt={product.title} width={200} height={200} className="w-[200px] h-[200px] rounded-[40px] flex items-center justify-center"/>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-4xl font-bold text-black mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={product.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white rounded-lg transition-colors text-sm"
                      >
                        <Image src="/images/download-on-the-app-store.png" alt="Download on the App Store" width={150} height={50} className="h-auto"/>
                      </a>
                      <a
                        href={product.googlePlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white rounded-lg transition-colors text-sm"
                      >
                        <Image src="/images/get-it-on-google-play.png" alt="Get it on Google Play" width={150} height={50} className="h-auto"/>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-black mb-4">Company Address</h3>
              <div className="space-y-2 text-gray-600">
                <p>NewWay Labs</p>
                <p>No 1, 55 Huynh Thuc Khang Street</p>
                <p>DongDa District, Ha Noi City</p>
                <p>Vietnam</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
               
                <p>
                  <span className="font-medium">Support:</span>{" "}
                  <a href="mailto:support@newwaylabs.com" className="text-blue-600 hover:text-blue-800">
                    support@newwaylabs.com
                  </a>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">© {currentYear} NewWay Labs</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

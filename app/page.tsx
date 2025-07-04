"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ExternalLink, Globe, User, Moon, Sun, Mail, Phone, MapPin, Send, Award, Target, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

export default function DigitalUniverseLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const themeClasses = {
    bg: isDark ? "bg-black" : "bg-gray-50",
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    cardBg: isDark ? "bg-gray-900" : "bg-white",
    navHover: isDark ? "hover:text-orange-400" : "hover:text-orange-600",
    border: isDark ? "border-gray-800" : "border-gray-200",
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text} overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isDark ? "bg-orange-500/10" : "bg-orange-200/20"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            left: "5%",
            top: "10%",
          }}
        />
        <div
          className={`absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isDark ? "bg-purple-500/10" : "bg-purple-200/20"
          }`}
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
            right: "5%",
            top: "30%",
          }}
        />
        <div
          className={`absolute w-72 h-72 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isDark ? "bg-blue-500/10" : "bg-blue-200/20"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
            left: "50%",
            bottom: "10%",
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className={`${isDark ? "bg-black/80" : "bg-white/80"} backdrop-blur-md ${themeClasses.border} border-b`}>
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-lg font-medium transition-all duration-300 relative group ${themeClasses.text} ${themeClasses.navHover}`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-lg font-medium transition-all duration-300 relative group ${themeClasses.text} hover:text-purple-600`}
              >
                About Me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-lg font-medium transition-all duration-300 relative group ${themeClasses.text} hover:text-blue-600`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className={`${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"} transition-all duration-300`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-24">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${themeClasses.text}`}>
              Explore My Digital
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Universe
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-16 max-w-2xl mx-auto ${themeClasses.textSecondary}`}>
              From creative content to valuable digital assets
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Etsy Store Card */}
            <div
              className={`transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <Card
                className={`group border-0 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer h-80 ${
                  isDark
                    ? "bg-gradient-to-br from-orange-900/30 to-orange-800/30"
                    : "bg-gradient-to-br from-orange-50 to-orange-100"
                }`}
              >
                <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 mb-6 bg-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-white font-bold text-2xl">E</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>Etsy Store</h3>
                  <Button
                    className={`${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 hover:bg-gray-800 text-white"} transition-all duration-300 transform group-hover:scale-105 px-8 py-3 rounded-full`}
                  >
                    View Store
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Domain Names Portfolio Card */}
            <div
              className={`transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <Card className="group bg-gradient-to-br from-purple-800 to-purple-900 border-0 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer h-80">
                <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="relative">
                      <Globe className="h-8 w-8 text-white" />
                      <span className="absolute -bottom-1 -right-2 text-xs text-white font-bold bg-white/20 px-1 rounded">
                        .com
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Domain Names</h3>
                  <h3 className="text-2xl font-bold mb-6 text-white">Portfolio</h3>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform group-hover:scale-105 px-8 py-3 rounded-full">
                    View Portfolio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* LinkedIn Profile Card */}
            <div
              className={`transition-all duration-1000 delay-900 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <Card
                className={`group border-0 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer h-80 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-900/30 to-blue-800/30"
                    : "bg-gradient-to-br from-blue-50 to-blue-100"
                }`}
              >
                <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 mb-6 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <span className="text-white font-bold text-2xl">in</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${themeClasses.text}`}>Professional</h3>
                  <h3 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>LinkedIn Profile</h3>
                  <Button
                    className={`${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 hover:bg-gray-800 text-white"} transition-all duration-300 transform group-hover:scale-105 px-8 py-3 rounded-full`}
                  >
                    Visit Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div
            className={`transition-all duration-1000 delay-1100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="group">
                <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className={themeClasses.textSecondary}>Etsy Sales</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className={themeClasses.textSecondary}>Premium Domains</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1K+
                </div>
                <div className={themeClasses.textSecondary}>LinkedIn Connections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`py-20 px-6 ${isDark ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-sm`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              About{" "}
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${themeClasses.textSecondary}`}>
              Digital entrepreneur passionate about creating valuable online assets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-800/50" : "bg-gray-100/50"} backdrop-blur-sm`}>
                <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>My Journey</h3>
                <p className={`mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                  I'm a passionate digital entrepreneur who has built a diverse portfolio of online assets over the past
                  5 years. My journey began with a simple Etsy store selling digital maps, which has now grown into a
                  thriving business with over 500 satisfied customers.
                </p>
                <p className={`mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                  What started as a creative outlet has evolved into a comprehensive digital empire, including premium
                  domain investments and professional networking that spans across multiple industries and continents.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-600 rounded-full text-sm font-medium">
                    Creative Design
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-600 rounded-full text-sm font-medium">
                    Domain Investment
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-sm font-medium">
                    Business Strategy
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Award className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className={`text-lg ${themeClasses.text}`}>Achievements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 ${themeClasses.textSecondary}`}>
                    <li>• 500+ successful Etsy sales with 4.9★ rating</li>
                    <li>• Built portfolio of 25+ premium domains</li>
                    <li>• 1000+ professional LinkedIn connections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className={`text-lg ${themeClasses.text}`}>Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={themeClasses.textSecondary}>
                    To help others discover the potential of digital entrepreneurship and build sustainable online
                    businesses.
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className={`text-lg ${themeClasses.text}`}>Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={themeClasses.textSecondary}>
                    Creating a digital ecosystem where creativity meets profitability, inspiring the next generation of
                    online entrepreneurs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${themeClasses.textSecondary}`}>
              Ready to collaborate or have questions about my digital assets? Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl ${themeClasses.text}`}>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className={themeClasses.text}>
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className={`mt-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} transition-all duration-300 focus:scale-105`}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className={themeClasses.text}>
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className={`mt-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} transition-all duration-300 focus:scale-105`}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className={themeClasses.text}>
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`mt-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} transition-all duration-300 focus:scale-105`}
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className={themeClasses.text}>
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Collaboration Opportunity"
                    className={`mt-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} transition-all duration-300 focus:scale-105`}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className={themeClasses.text}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or question..."
                    rows={5}
                    className={`mt-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} transition-all duration-300 focus:scale-105`}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 hover:from-orange-700 hover:via-purple-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-500/20 rounded-lg">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${themeClasses.text}`}>Email</h3>
                      <p className={themeClasses.textSecondary}>hello@digitaluniverse.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${themeClasses.text}`}>Phone</h3>
                      <p className={themeClasses.textSecondary}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${themeClasses.text}`}>Location</h3>
                      <p className={themeClasses.textSecondary}>San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div
                className={`p-6 rounded-2xl ${isDark ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50" : "bg-gradient-to-br from-gray-100/50 to-gray-200/50"} backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>Response Time</h3>
                <p className={`${themeClasses.textSecondary} mb-4`}>
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via
                  LinkedIn for faster response.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${themeClasses.border} hover:scale-105 transition-transform duration-300`}
                  >
                    LinkedIn
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${themeClasses.border} hover:scale-105 transition-transform duration-300`}
                  >
                    Twitter
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-6 ${isDark ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-sm`}>
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-1300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Ready to Explore
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Together?
              </span>
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${themeClasses.textSecondary}`}>
              Let's connect and discover how we can collaborate on your next digital venture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 hover:from-orange-700 hover:via-purple-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full"
              >
                Get In Touch
                <User className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${themeClasses.border} ${themeClasses.text} hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full bg-transparent ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
              >
                View All Assets
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? "bg-gray-900" : "bg-gray-100"} ${themeClasses.border} border-t py-12 px-6`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className={`font-bold text-lg mb-4 ${themeClasses.text}`}>Digital Assets</h3>
              <ul className={`space-y-2 ${themeClasses.textSecondary}`}>
                <li>
                  <a href="#" className="hover:text-orange-600 transition-colors duration-300">
                    Etsy Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors duration-300">
                    Domain Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                    Professional Network
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-4 ${themeClasses.text}`}>Services</h3>
              <ul className={`space-y-2 ${themeClasses.textSecondary}`}>
                <li>
                  <a href="#" className="hover:text-orange-600 transition-colors duration-300">
                    Creative Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors duration-300">
                    Domain Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                    Business Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-4 ${themeClasses.text}`}>Connect</h3>
              <ul className={`space-y-2 ${themeClasses.textSecondary}`}>
                <li>
                  <a href="#" className="hover:text-orange-600 transition-colors duration-300">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${themeClasses.border} border-t mt-8 pt-8 text-center ${themeClasses.textSecondary}`}>
            <p>&copy; 2024 Digital Universe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

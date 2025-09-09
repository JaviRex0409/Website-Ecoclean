"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Truck, Droplets, Wrench, Building, Star, Shield } from "lucide-react"

export default function HomePage() {
  const phoneNumber = "+526677297474"

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 p-2 rounded-full">
                <Droplets className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold">ECOCLEAN</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Contacto
              </button>
            </nav>

            <div className="flex space-x-4">
  
          {/* Botón de Instagram */}
          <Button 
            asChild
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full"
          >
            <a 
              href="https://www.instagram.com/ecocleanservicecln?igsh=NzYwcXp4N2E5d2w2#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-5 w-5 inline-block mr-2">
                <path d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
              </svg>
              Instagram
            </a>
          </Button>

          {/* Botón de Facebook */}
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
          >
            <a 
              href="https://www.facebook.com/ecocleanculiacan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-5 w-5 inline-block mr-2">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
              </svg>
              Facebook
            </a>
          </Button>
        </div>

            <Button onClick={handleCall} className="bg-green-500 hover:bg-green-600">
              <Phone className="h-4 w-4 mr-2" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ECOCLEAN <span className="text-green-400">Culiacán</span>
          </h2>
          <p className="text-2xl mb-4 font-semibold">Servicios Ambientales Profesionales</p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Especialistas en renta de baños portátiles, limpieza de fosas sépticas, sondeos de drenajes, venta de agua
            potable y maquinaria pesada. Más de 10 años sirviendo a Culiacán y sus alrededores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCall} className="bg-green-500 hover:bg-green-600">
              <Phone className="h-5 w-5 mr-2" />
              (667) 729-7474
            </Button>
            <Button 
            size="lg"
            variant="outline"
            className="border-white text-blue-600 hover:bg-white hover:text-blue-900"
            onClick={() => scrollToSection("servicios")}
            >
             Ver Servicios
            </Button>

          </div>
        </div>
      </section>

      {/* Company Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Servicios/IMG_7542-e.jpg?height=400&width=600"
                alt="Instalaciones y equipos de Ecoclean"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ECOCLEAN - Líderes en Servicios Ambientales</h2>
              <p className="text-lg text-gray-600 mb-6">
                Con más de una década de experiencia en Culiacán, Sinaloa, somos la empresa de confianza para todos sus
                servicios ambientales. Contamos con el equipo más moderno y personal altamente capacitado.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Servicio Disponible</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Servicios Realizados</div>
                </div>
              </div>
              <Button onClick={handleCall} className="bg-green-500 hover:bg-green-600">
                <Phone className="h-4 w-4 mr-2" />
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para todas sus necesidades ambientales y sanitarias en Culiacán, Sinaloa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Renta de Baños Portátiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Baños portátiles para eventos, construcciones, obras y festivales
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Entrega e instalación gratuita
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mantenimiento y limpieza incluida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diferentes modelos disponibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precios competitivos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Sondeos de Drenajes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Inspección y diagnóstico profesional de sistemas de drenaje y alcantarillado
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tecnología de video inspección
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes detallados con imágenes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal especializado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Limpieza de Fosas Sépticas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Limpieza, mantenimiento y reparación de fosas sépticas y biodigestores
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equipo de succión especializado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal certificado y capacitado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Manejo ecológico de residuos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Programas de mantenimiento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Venta de Agua Potable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Pipas con agua potable certificada para construcciones, eventos y emergencias
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Agua potable certificada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Entrega rápida y puntual
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diferentes volúmenes disponibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precios accesibles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Maquinaria Pesada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Renta de maquinaria pesada para construcción y movimiento de tierras
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excavadoras y retroexcavadoras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Operadores certificados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mantenimiento incluido
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tarifas por hora o proyecto
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Servicios de Gruas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Atención inmediata para arrastre o traslado
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Disponible en horarios de atención
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Respuesta inmediata
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equipo especializado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cobertura en toda la región
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de Servicios</h2>
            <p className="text-xl text-gray-600">Conoce nuestro trabajo y equipos especializados</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7669-e.jpg?height=300&width=400"
                alt="Baños portátiles en construcción"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Baños Portátiles</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7721-e.jpg?height=300&width=400"
                alt="Limpieza de fosa séptica"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Limpieza de Fosas</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7823.JPG?height=300&width=400"
                alt="Entrega de agua potable"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Venta de Agua</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7567-e.jpg?height=300&width=400"
                alt="Sondeo de drenajes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Sondeos de Drenaje</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7536-e.jpg?height=300&width=400"
                alt="Maquinaria pesada"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Maquinaria Pesada</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7757-e.jpg?height=300&width=400"
                alt="Limpieza de trampas de grasa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Limpieza de trampas de grasa</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7648-e.jpg?height=300&width=400"
                alt="Servicio de Montacargas"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Servicio de Montacargas</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7628-e.jpg?height=300&width=400"
                alt="Servicio de gruas"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Servicio de gruas</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/Servicios/IMG_7556-e.jpg?height=300&width=400"
                alt="Equipo de trabajo"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Nuestro Equipo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir ECOCLEAN?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa líder en servicios ambientales en Culiacán, Sinaloa, con más de una década de
                experiencia. Nos especializamos en brindar soluciones integrales y sostenibles para empresas,
                constructoras, eventos y particulares en toda la región.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-4 w-4" />
                  </Badge>
                  <span>Más de 15 años de experiencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-4 w-4" />
                  </Badge>
                  <span>Personal certificado y capacitado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-4 w-4" />
                  </Badge>
                  <span>Equipos de última tecnología</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-4 w-4" />
                  </Badge>
                  <span>Cobertura en Culiacán y región</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-4 w-4" />
                  </Badge>
                  <span>Precios competitivos</span>
                </div>
              </div>
              <Button size="lg" onClick={handleCall} className="bg-blue-900 hover:bg-blue-800">
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-green-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
              <p className="text-lg mb-6">
                Proporcionar servicios ambientales de la más alta calidad en Culiacán y sus alrededores, contribuyendo
                al cuidado del medio ambiente y la salud pública a través de soluciones innovadoras, sostenibles y con
                el mejor servicio al cliente.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">1000+</div>
                  <div className="text-sm">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">15+</div>
                  <div className="text-sm">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">11 Horas</div>
                  <div className="text-sm">De Servicios Disponibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Constructora del Pacífico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Excelente servicio de renta de baños portátiles. Siempre puntuales en la entrega y muy limpios. Los
                  recomendamos ampliamente para cualquier obra de construcción."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Hotel Plaza Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Nos salvaron con el servicio de emergencia para limpieza de fosas. Llegaron rápido y solucionaron el
                  problema de manera profesional. Muy recomendables."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Eventos Sinaloa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Para nuestros eventos siempre contratamos sus baños portátiles. Son muy profesionales, puntuales y
                  sus equipos siempre están en excelentes condiciones."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-teal-600">
        <div className="grid lg:grid-cols-2">
          {/* Map */}
          <div className="h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8234567890123!2d-107.4963019!3d24.8226061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcc5d110aab70d%3A0x6a1369c24671c93d!2sECOCLEAN%20SINALOENSE!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Ecoclean Culiacán"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-teal-600 text-white p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 text-center">Matriz</h3>
            <p className="text-xl mb-8 text-center">Culiacán, Sinaloa</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Dirección</p>
                  <p className="text-teal-100">Culiacán, Sinaloa, México</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Teléfono</p>
                  <button onClick={handleCall} className="text-xl font-bold hover:text-teal-200 transition-colors">
                    (667) 729-7474
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-teal-100">noymac@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button onClick={handleCall} className="bg-white text-teal-600 hover:bg-teal-50 font-bold px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Envíanos un mensaje</h2>
            <p className="text-center text-gray-300 mb-12">Te responderemos a la brevedad</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      placeholder="(667) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="baños">Renta de Baños Portátiles</option>
                      <option value="fosas">Limpieza de Fosas Sépticas</option>
                      <option value="sondeos">Sondeos de Drenajes</option>
                      <option value="agua">Venta de Agua Potable</option>
                      <option value="maquinaria">Maquinaria Pesada</option>
                      <option value="emergencia">Servicio de Emergencia</option>
                    </select>
                  </div>
                </form>
              </div>

              <div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  ></textarea>
                </div>

                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 py-3">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </Button>

                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-300 text-center">¿Necesitas atención inmediata?</p>
                  <Button onClick={handleCall} className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar (667) 729-7474
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300">Estamos listos para atender sus necesidades las 24 horas del día</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Llamadas y WhatsApp</p>
                <Button
                  onClick={handleCall}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl mb-2"
                >
                  (667) 729-7474
                </Button>
                <p className="text-gray-400 text-sm">Clic para llamar directamente</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-2">Envíanos un correo</p>
                <p className="text-lg text-green-400">noymac@hotmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-2">Nos encontramos en</p>
                <p className="text-green-400 font-semibold">Culiacán, Sinaloa</p>
                <p className="text-green-400">Cobertura en toda la región</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-green-400" />
              <span className="text-lg">Horarios de Atención</span>
            </div>
            <p className="text-gray-300">Lunes a Sabado: De 7:00 AM a 6:00 PM</p>
            <p className="text-green-400 font-semibold text-lg">¡Servicios disponibles!</p>

            <div className="mt-8 p-6 bg-green-600 rounded-lg inline-block">
              <h3 className="text-xl font-bold mb-2">¿Necesitas una cotización?</h3>
              <p className="mb-4">Llámanos ahora y te atenderemos de inmediato</p>
              <Button onClick={handleCall} size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold">
                <Phone className="h-5 w-5 mr-2" />
                (667) 729-7474
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">ECOCLEAN</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Servicios ambientales profesionales en Culiacán, Sinaloa. Comprometidos con un futuro más limpio y
                sostenible.
              </p>
              <p className="text-green-400 font-semibold">¡Síguenos en Facebook y en instagram!</p>
              <div className="flex space-x-4">
           
            {/* Botón de Instagram */}
            <Button 
              asChild
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full"
            >
              <a 
                href="https://www.instagram.com/ecocleanservicecln?igsh=NzYwcXp4N2E5d2w2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="h-5 w-5 inline-block mr-2">
                  <path d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
                Instagram
              </a>
            </Button>

            {/* Botón de Facebook */}
<Button
  asChild
  className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 p-0 shadow-md ring-1 ring-white/20"
>
  <a
  href="https://www.facebook.com/ecocleanculiacan"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook de Ecoclean"
  className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-md"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-8 w-8 text-white"
  >
    <path
      fill="currentColor"
      d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 
      1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 
      1.2v1.7h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"
    />
  </svg>
</a>
</Button>

          </div>

            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Renta de Baños Portátiles</li>
                <li>Sondeos de Drenajes</li>
                <li>Limpieza de Fosas Sépticas</li>
                <li>Venta de Agua Potable</li>
                <li>Maquinaria Pesada</li>
                <li>Servicios de Gruas</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Acerca de Nosotros</li>
                <li>Nuestro Equipo</li>
                <li>Certificaciones</li>
                <li>Casos de Éxito</li>
                <li>Testimonios</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (667) 729-7474
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  noymac@hotmail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Culiacán, Sinaloa
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Servicio desde la 7:00 AM hasta las 6:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2008 ECOCLEAN Culiacán. Todos los derechos reservados.</p>
            <p className="mt-2">Servicios ambientales profesionales en Sinaloa</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

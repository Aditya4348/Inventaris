import Logo from "@/Components/Logo"
import { Head, Link } from "@inertiajs/react"
import { ArrowRight, Shield, Zap, BarChart3, Users} from "lucide-react"

export default function Welcome({ auth }) {

  return (
    <>
      <Head title="Selamat Datang - InventarisKu" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-3 lg:px-8">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">
                <Logo />
            </h2>
          </div>
          <div className="flex items-center md:space-x-4 space-x-2 ">
            {auth.user ? (
              <Link
                href={route("dashboard")}
                className="inline-flex items-center md:px-6 md:py-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <>
                <Link
                  href={route("login")}
                  className="md:px-6 md:py-3 px-3 py-2 md:text-base text-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Masuk
                </Link>
                <Link
                  href={route("register")}
                  className="inline-flex items-center md:px-6 md:py-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold md:text-base text-xs rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Daftar Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  InventarisKu
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Revolusi cara Anda mengelola inventaris dengan teknologi modern.
                <span className="text-blue-400 font-semibold"> Mudah, Cepat, dan Efisien.</span>
              </p>

              {!auth.user && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Link
                    href={route("register")}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                  >
                    Mulai Gratis Sekarang
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                  <Link
                    href={route("login")}
                    className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    Sudah Punya Akun?
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-900 to-black"></div>

        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6">
              ✨ ધોરણ 1 થી 12 માટે શ્રેષ્ઠ શિક્ષણ
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Student
              <span className="block text-cyan-400">Classes</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              આધુનિક ટેકનોલોજી અને અનુભવી શિક્ષકો સાથે વિદ્યાર્થીઓના ભવિષ્યને નવી દિશા આપતું પ્રીમિયમ ટ્યુશન ક્લાસ.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all shadow-2xl">
                Inquiry Now
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <form
              action="https://formsubmit.co/YOUR_GMAIL@gmail.com"
              method="POST"
              className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl"
            >
              <h2 className="text-4xl font-black mb-2">Inquiry Form</h2>

              <p className="text-slate-300 mb-8">
                આજે જ સંપર્ક કરો અને admission શરૂ કરો.
              </p>

              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="વિદ્યાર્થીનું નામ"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-slate-300"
                  required
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="મોબાઇલ નંબર"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-slate-300"
                  required
                />

                <input
                  type="text"
                  name="standard"
                  placeholder="ધોરણ"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-slate-300"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="તમારો મેસેજ"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-slate-300"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.02] transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">અમારી વિશેષતાઓ</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "સ્મોલ બેચ સાઇઝ",
              "અનુભવી શિક્ષકો",
              "બેસ્ટ રિઝલ્ટ",
              "પર્સનલ ગાઇડન્સ"
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all"
              >
                <div className="text-5xl mb-5">🚀</div>
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">અમારા કોર્સ</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "ધોરણ 1 થી 5",
              "ધોરણ 6 થી 8",
              "ધોરણ 9 થી 10",
              "ધોરણ 11-12"
            ].map((course) => (
              <div
                key={course}
                className="group rounded-3xl p-10 bg-gradient-to-br from-cyan-500 to-blue-700 hover:scale-105 transition-all shadow-2xl"
              >
                <div className="text-6xl mb-6">📘</div>
                <h3 className="text-3xl font-black">{course}</h3>
                <p className="mt-4 text-slate-100">
                  સંપૂર્ણ માર્ગદર્શન અને પરીક્ષા તૈયારી.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <h3 className="text-3xl font-black text-white">Student Classes</h3>
        <p className="mt-3">Modern Education • Better Future</p>
      </footer>

      {/* WhatsApp */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-all"
      >
        💬
      </a>
    </div>
  );
}

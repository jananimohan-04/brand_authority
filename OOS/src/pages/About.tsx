import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="mb-6">About OutOfSyllabuss</h1>
              <p className="text-xl text-muted-foreground">
                Empowering the next generation with real-world wisdom from industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Our Purpose */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-12 animate-fade-up">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    OutOfSyllabuss exists to bridge the gap between academic education and real-world success. We believe that while college provides fundamental knowledge, the most valuable lessons come from those who've navigated the challenges of building businesses, leading teams, and creating impact.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our mission is to democratize access to industry wisdom, connecting students directly with the CEOs, founders, and leaders who've walked the path they aspire to follow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-cyan" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">How It Started</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    OutOfSyllabuss was born from a simple observation: college students are hungry for practical guidance, but traditional education systems rarely provide direct access to industry leaders. The gap between classroom theory and workplace reality leaves many graduates unprepared for the challenges ahead.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We started by organizing intimate conversations between students and successful professionals. What began as small campus events evolved into a movement that now reaches thousands of students across the country.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why Students Need This</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Today's students face a rapidly evolving job market where traditional credentials alone aren't enough. They need:
                  </p>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>• Real-world perspectives on industry trends and expectations</li>
                    <li>• Mentorship from those who've successfully navigated their desired career paths</li>
                    <li>• Practical skills and mindsets that textbooks can't teach</li>
                    <li>• Networks and connections that open doors</li>
                    <li>• Honest conversations about failure, resilience, and growth</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-cyan" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    We envision a future where every student has access to the wisdom and guidance of experienced leaders. Where the lessons learned from decades of business experience are freely shared with the next generation. Where the gap between education and industry is bridged through authentic conversations and real relationships.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    OutOfSyllabuss is more than a platform — it's a movement. A community of students, educators, and leaders united in the belief that real learning happens outside the syllabus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="animate-fade-up">
                  <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                  <p className="text-muted-foreground">Industry Leaders Featured</p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  <div className="text-5xl font-bold text-gradient mb-2">10K+</div>
                  <p className="text-muted-foreground">Students Reached</p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <div className="text-5xl font-bold text-gradient mb-2">25+</div>
                  <p className="text-muted-foreground">College Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

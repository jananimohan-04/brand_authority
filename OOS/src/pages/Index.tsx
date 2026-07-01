import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaderCard from "@/components/LeaderCard";
import { Lightbulb, Target, Users, Briefcase, TrendingUp, Award } from "lucide-react";
import oosLogo from "@/assets/oos-logo.png";
import heroImage from "@/assets/hero-image.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

const Index = () => {
  const leaders = [
    {
      name: "Firstname Lastname",
      title: "title",
      company: "Designation at Company",
      topic: "Topic / Title (last line)",
      image: leader1,
      videoUrl: "#",
    },
    {
      name: "Firstname Lastname",
      title: "title",
      company: "Designation at Company",
      topic: "Topic / Title (last line)",
      image: leader2,
      videoUrl: "#",
    },
    {
      name: "Firstname Lastname",
      title: "title",
      company: "Designation at Company",
      topic: "Topic / Title (last line)",
      image: leader3,
      videoUrl: "#",
    },
  ];

  const learningTopics = [
    {
      icon: Briefcase,
      title: "Industry Expectations",
      description: "Understand what employers really look for beyond your degree.",
    },
    {
      icon: Target,
      title: "Mindset for Success",
      description: "Develop the mental frameworks used by top performers.",
    },
    {
      icon: TrendingUp,
      title: "Career Clarity",
      description: "Get real guidance on navigating your career path.",
    },
    {
      icon: Users,
      title: "Leadership Fundamentals",
      description: "Learn essential leadership skills from those who've led.",
    },
    {
      icon: Award,
      title: "Real Interview Experiences",
      description: "Hear authentic stories from the front lines of business.",
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship Insights",
      description: "Discover what it takes to build and scale a business.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Students learning from industry leaders"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="text-white mb-5">
                Get Placed Before Your Final Semester Ends.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Learn what your syllabus won’t teach — gain industry-ready skills and confidence with direct guidance from founder-CEOs and leading industry experts.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/interviews">
                  <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                    Watch Interviews
                  </Button>
                </Link>
                <Link to="/join">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                    Join the Movement
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Is OutOfSyllabuss */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="mb-6">What Is Out Of Syllabuss?</h2>
              <p className="text-xl text-muted-foreground">
                A movement that teaches students the real skills, mindset, and industry knowledge that syllabus never cover.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn from Leaders</h3>
                <p className="text-muted-foreground">
                  Direct access to CEOs, founders, and industry veterans who've been there.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-World Insights</h3>
                <p className="text-muted-foreground">
                  Practical career guidance that goes beyond theory and syllabus.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership Lessons</h3>
                <p className="text-muted-foreground">
                  Stories, interviews, and wisdom that shape future leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Leaders */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Featured Leaders</h2>
              <p className="text-xl text-muted-foreground">
                Learn from those who've achieved what you aspire to become.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <LeaderCard {...leader} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/leaders">
                <Button variant="outline" size="lg">
                  View All Leaders
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What Students Learn */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Students Learn</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Skills and insights that matter in the real world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {learningTopics.map((topic, index) => (
                <div
                  key={topic.title}
                  className="bg-card p-6 rounded-lg border border-border hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <topic.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">Why This Matters</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-lg border-l-4 border-accent animate-fade-up">
                  <h3 className="text-xl font-bold mb-3">The Problem</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• No real industry exposure</li>
                    <li>• No practical guidance from leaders</li>
                    <li>• Syllabus doesn’t teach job-ready skills</li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border-l-4 border-cyan animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  <h3 className="text-xl font-bold mb-3">The Solution</h3>
                  <p className="text-muted-foreground">
                    OutOfSyllabuss gives students direct access to industry leaders, making them industry-ready and helping them secure their first job faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-20 bg-gradient-to-r from-accent via-accent/90 to-cyan text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-white">Join the Movement</h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Whether you're a student, college administrator, or industry leader — there's a place for you in this movement.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-4 text-white">For Students</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Become a campus ambassador and bring this movement to your college.
                </p>
                <Link to="/join">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Become an Ambassador
                  </Button>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-4 text-white">For Colleges</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Invite us for guest lectures and leadership sessions.
                </p>
                <Link to="/colleges">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Invite Us
                  </Button>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-4 text-white">For Leaders</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Share your wisdom and inspire the next generation.
                </p>
                <Link to="/join">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Nominate a Leader
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Integration */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Latest Interviews</h2>
              <p className="text-xl text-muted-foreground">
                Watch our conversations with industry leaders.
              </p>
            </div>

            <div className="max-w-4xl mx-auto aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">YouTube playlist will be embedded here</p>
                <Link to="/interviews">
                  <Button variant="outline" size="lg">
                    View All Interviews
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

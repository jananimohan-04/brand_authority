import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We've received your message and will respond within 24-48 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions? Want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a
                      href="mailto:info@outofsyllabuss.org"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@outofsyllabuss.org
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-cyan transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2">Office</h3>
                    <p className="text-muted-foreground">
                      AKN Group<br />
                      [City, State]
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" variant="gradient" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 text-left">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">How can I bring OutOfSyllabuss to my college?</h3>
                    <p className="text-muted-foreground">
                      Visit our <a href="/colleges" className="text-accent hover:underline">Colleges page</a> to learn about our partnership programs, or contact us directly to schedule a consultation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">How do I become a Campus Ambassador?</h3>
                    <p className="text-muted-foreground">
                      Head to our <a href="/join" className="text-accent hover:underline">Join page</a> and fill out the Campus Ambassador application form. We review applications on a rolling basis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Can leaders nominate themselves?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! If you're an industry leader interested in sharing your story, please use our nomination form or reach out directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

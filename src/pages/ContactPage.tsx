import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, PhoneCall, Linkedin, MapPin, Globe, MessageSquareText, ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { api } from '@/lib/api-client';
import { ContactFormInput } from '@shared/types';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const MotionLink = motion.custom(Link);
const SectionWrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={`py-16 md:py-24 ${className}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  organization: z.string().optional(),
  country: z.string().optional(),
  interest: z.string().min(1, { message: "Please select an area of interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      country: "",
      interest: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await api<any>('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      toast.success(response.message || "Your message has been sent successfully!");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to send your message. Please try again.");
    }
  }
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <IntroductionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <WhoToContactSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <VisitUsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <OnlineSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <EnquiryFormSection form={form} onSubmit={onSubmit} />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <FaqSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <CtaSection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-deep-blue text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1522071820075-efce6f3b0154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHwxfHdlc3QlMjBhZnJpY2ElMjBjb25uZWN0aW9ufGVufDB8fHx8MTcxOTk1MDYwMnww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="People connecting and communicating"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-display font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Let's start the conversation
      </motion.h1>
    </div>
  </section>
);
const IntroductionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      We're here to connect
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Whether you're an impact investor ready to fund the MVP, a healthcare provider wanting to join our network, a mobile operator exploring partnership, or simply someone who believes in our mission—we want to hear from you.
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2 text-left">
      <motion.li variants={fadeIn}>Respond to all enquiries within 48 hours (business days)</motion.li>
      <motion.li variants={fadeIn}>Respect your time with focused, relevant communication</motion.li>
      <motion.li variants={fadeIn}>Maintain confidentiality for sensitive discussions</motion.li>
      <motion.li variants={fadeIn}>Provide the information you need to make informed decisions</motion.li>
    </motion.ul>
  </div>
);
const WhoToContactSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Direct lines to our team
    </motion.h2>
    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Olivier Menouke Pamen",
          title: "Chief Analyst",
          email: "olivier@baaraconsulting.com",
          linkedin: "https://linkedin.com/in/olivier-menoukeu-pamen-b9628577/",
          contactFor: ["Investment opportunities and terms", "Financial projections and business model", "Due diligence materials", "Investor meetings and presentations"],
          image: "https://images.unsplash.com/photo-1627541593346-1802281d3d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Abdoulaye Mouke Yansane",
          title: "Managing Director, BAARA Consulting Guinea",
          email: "abdoulaye@baaraconsulting.com",
          linkedin: "https://linkedin.com/in/abdoulayemyansane/",
          contactFor: ["Healthcare provider partnerships", "Mobile operator collaborations", "Government and regulatory matters", "On-the-ground operations in Guinea"],
          image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Marguerite Camara",
          title: "Project Manager",
          email: "marguerite@baaraconsulting.com",
          linkedin: "https://linkedin.com/in/margueritecamara/",
          contactFor: ["Women's groups and community organisations", "Diaspora contribution programmes", "Early access for users", "Community engagement initiatives"],
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Moulaye Camara",
          title: "Founder & Chief Executive Officer",
          email: "moulaye@baaraconsulting.com",
          phone: "+27 72 661 18 60",
          linkedin: "https://linkedin.com/in/moulaye-camara-753a094/",
          contactFor: ["Media interviews and features", "Speaking opportunities", "General questions about I&I", "CEO meetings and presentations"],
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ].map((person, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-left overflow-hidden">
            <div className="h-32 overflow-hidden">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-deep-blue">{person.name}</CardTitle>
              <p className="text-deep-teal font-semibold">{person.title}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href={`mailto:${person.email}`} className="flex items-center text-charcoal/80 hover:text-warm-coral transition-colors">
                  <Mail className="h-4 w-4 mr-2" /> {person.email}
                </a>
                {person.phone && (
                  <a href={`tel:${person.phone}`} className="flex items-center text-charcoal/80 hover:text-warm-coral transition-colors">
                    <PhoneCall className="h-4 w-4 mr-2" /> {person.phone}
                  </a>
                )}
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-charcoal/80 hover:text-warm-coral transition-colors">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </a>
              </div>
              <h4 className="font-semibold text-deep-teal mt-4 mb-2">Contact {person.name.split(' ')[0]} for:</h4>
              <ul className="list-disc list-inside text-sm text-charcoal/70 space-y-1">
                {person.contactFor.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
const VisitUsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Our locations
    </motion.h2>
    <div className="mt-12 grid gap-10 md:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Head Office (South Africa)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80">BAARA Consulting</p>
            <p className="text-base text-charcoal/80">Johannesburg, Gauteng</p>
            <p className="text-base text-charcoal/80">South Africa</p>
            <p className="mt-4 text-sm text-charcoal/60 italic">Regional coordination, investor relations, strategic planning</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Guinea Operations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80">BAARA Consulting Guinea</p>
            <p className="text-base text-charcoal/80">Conakry, Republic of Guinea</p>
            <p className="mt-4 text-sm text-charcoal/60 italic">On-the-ground operations, partnerships, community engagement</p>
            <p className="mt-2 text-sm text-charcoal/60 italic font-bold">Site visits welcome by appointment for investors and partners</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const OnlineSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Connect with us digitally
    </motion.h2>
    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Globe className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Website</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <a href="https://www.baaraconsulting.com" target="_blank" rel="noopener noreferrer" className="text-base text-charcoal/80 hover:text-warm-coral transition-colors">
              www.baaraconsulting.com
            </a>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Linkedin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">LinkedIn</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80">Follow our company page for updates</p>
            <p className="text-base text-charcoal/80">Connect with individual team members</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Email newsletter</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <MotionLink to="/join-us" className="text-base text-charcoal/80 hover:text-warm-coral transition-colors">
              Subscribe for updates
            </MotionLink>
            <p className="text-sm text-charcoal/60 mt-2">Monthly news on progress, impact, and opportunities</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const EnquiryFormSection = ({ form, onSubmit }: { form: any; onSubmit: any }) => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Send us a message
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      We respect your privacy. Your information will only be used to respond to your enquiry and provide requested updates. We will never share your details with third parties.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organisation (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Organization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I'm interested in: *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an area of interest" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Investing">Investing</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="Healthcare Provider">Healthcare Provider</SelectItem>
                    <SelectItem value="Diaspora Programme">Diaspora Programme</SelectItem>
                    <SelectItem value="Press">Press</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message..." rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Sending...' : 'Submit Enquiry'}
          </Button>
        </form>
      </Form>
    </motion.div>
  </div>
);
const FaqSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Quick answers to common questions
    </motion.h2>
    <div className="mt-12 space-y-6 text-left max-w-3xl mx-auto">
      {[
        {
          question: "When will the platform launch?",
          answer: "We're currently in prototype stage. With MVP funding secured, we project a 6-month development timeline to beta launch in Conakry.",
        },
        {
          question: "Can I sign up as a user now?",
          answer: "We're building a waiting list for early access. You can join it on our Join Us page.",
          link: "/join-us",
        },
        {
          question: "Do you accept volunteer consultants?",
          answer: "Yes! We welcome pro bono support from professionals in legal, financial, tech, and marketing fields. Contact us with your area of expertise.",
        },
        {
          question: "Are you hiring?",
          answer: "As we scale, we'll be building our team. Send your CV to careers@baaraconsulting.com with your area of interest.",
        },
        {
          question: "Can I visit your operations in Guinea?",
          answer: "Site visits are available for serious investors and partners. Contact Abdoulaye to arrange.",
        },
        {
          question: "How can diaspora contribute now?",
          answer: "Diaspora contribution features are in development. Join our mailing list for early access when available.",
        },
      ].map((item, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="shadow-sm bg-soft-sand">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-deep-blue">{item.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-charcoal/80">{item.answer}</p>
              {item.link && (
                <MotionLink to={item.link} className="mt-2 inline-flex items-center text-warm-coral hover:text-warm-coral/80 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </MotionLink>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Ready to be part of the solution?
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      Every conversation starts with a message. Every partnership starts with a question. Every investment starts with interest. What's your next step?
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Schedule a Call</MotionLink>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-soft-sand text-soft-sand hover:bg-soft-sand hover:text-deep-blue font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Send a Message</MotionLink>
      </Button>
      <Button asChild size="lg" variant="ghost" className="text-soft-sand hover:bg-soft-sand/20 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105" disabled>
        <a href="#" target="_blank" rel="noopener noreferrer">Download Our One-Pager</a>
      </Button>
    </motion.div>
    <motion.p variants={fadeIn} className="mt-12 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
      We aim to respond to all enquiries within 48 hours during business days (Monday-Friday). For urgent investment or partnership matters, please indicate "urgent" in your subject line, and we'll prioritise your message. Thank you for your interest in Inclusion & Impact. Together, we can transform healthcare access for 200 million people.
    </motion.p>
  </div>
);
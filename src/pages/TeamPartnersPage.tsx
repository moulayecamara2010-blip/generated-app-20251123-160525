import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Building, Hospital, Smartphone, Code } from 'lucide-react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
export function TeamPartnersPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <IntroductionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <LeadershipTeamSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <AdvisoryBoardSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <StrategicPartnersSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <WereHiringSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <PartnerWithUsSection />
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
        src="https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHwxfHdlc3QlMjBhZnJpY2ElMjB0ZWFtfGVufDB8fHx8MTcxOTk0OTY0Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Diverse team collaborating"
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
        Built by Africans who've lived the crisis. Backed by partners who can solve it.
      </motion.h1>
    </div>
  </section>
);
const IntroductionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Experience. Expertise. Commitment.
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact is led by a team that combines decades of humanitarian experience in West Africa with technical expertise in fintech, healthcare, and mobile technology. We're not outsiders proposing solutions—we're Africans who have witnessed the healthcare crisis firsthand and are building the platform our communities need.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      We're backed by strategic partners across government, healthcare, mobile operations, and technology—creating an ecosystem that makes success inevitable.
    </motion.p>
  </div>
);
const LeadershipTeamSection = () => {
  const teamMembers = [
    {
      name: "Moulaye Camara",
      title: "Founder & Chief Executive Officer",
      bio: "A seasoned Guinean humanitarian with over 30 years of experience. The vision for Inclusion & Impact was born from his firsthand experience during the Ebola epidemic.",
      linkedin: "https://linkedin.com/in/moulaye-camara-753a094/",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Abdoulaye Mouke Yansane",
      title: "Managing Director, BAARA Consulting Guinea",
      bio: "A Guinean development professional with extensive experience in programme management and community mobilisation. He leads our on-the-ground operations in Guinea.",
      linkedin: "https://linkedin.com/in/abdoulayemyansane/",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Olivier Menouke Pamen",
      title: "Chief Analyst",
      bio: "A financial analyst and economist with expertise in impact investment and financial modelling. He ensures our business model is financially sound while maximising social impact.",
      linkedin: "https://linkedin.com/in/olivier-menoukeu-pamen-b9628577/",
      image: "https://images.unsplash.com/photo-1627541593346-1802281d3d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Kafui Odzangba Dake",
      title: "Chief Technology Officer",
      bio: "A technology architect with extensive experience building fintech and mobile-first platforms for African markets. He leads our technology development.",
      linkedin: "https://linkedin.com/in/odzangba/",
      image: "https://images.unsplash.com/photo-1610948235391-3b0da0f25b34?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Marguerite Camara",
      title: "Project Manager",
      bio: "A project management professional with expertise in healthcare programmes and gender-focused development. She leads our community engagement strategy.",
      linkedin: "https://linkedin.com/in/margueritecamara/",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Meet the founders
      </motion.h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-left overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-deep-blue">{member.name}</CardTitle>
                <p className="text-deep-teal font-semibold">{member.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-base text-charcoal/80">{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-warm-coral hover:text-warm-coral/80 transition-colors font-semibold">
                  <Linkedin className="h-5 w-5 mr-2" /> LinkedIn Profile
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const AdvisoryBoardSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Guidance from experts
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      (To be finalised as platform develops)
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      We're assembling an advisory board comprising experts in:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2 text-left">
      <motion.li variants={fadeIn}>Public health and epidemiology</motion.li>
      <motion.li variants={fadeIn}>Fintech regulation and compliance</motion.li>
      <motion.li variants={fadeIn}>Impact investment and development finance</motion.li>
      <motion.li variants={fadeIn}>Mobile technology and telecommunications</motion.li>
      <motion.li variants={fadeIn}>Healthcare delivery in low-resource settings</motion.li>
      <motion.li variants={fadeIn}>Women's economic empowerment</motion.li>
    </motion.ul>
  </div>
);
const StrategicPartnersSection = () => {
  const partners = [
    {
      category: "Government partners",
      icon: Building,
      items: [
        "Ministry of Health & Public Hygiene",
        "Ministry of Posts, Telecommunications & Digital Economy",
        "Ministry of Economy & Finance",
        "National Social Security Fund",
      ],
    },
    {
      category: "Healthcare provider partners",
      icon: Hospital,
      items: [
        "Clinique Manhwa", "CHU Ignace Deen", "Clinique Pasteur", "Manquepas Pharmacy Chain", "Petit-Lac Laboratory",
      ],
    },
    {
      category: "Mobile operator & fintech partners",
      icon: Smartphone,
      items: [
        "Orange Guinea", "MTN Guinea (Areeba)", "ONAFRIQ (formerly MFS Africa)",
      ],
    },
    {
      category: "Technology partners",
      icon: Code,
      items: [
        "9series", "Cloud hosting partners", "Cybersecurity partners", "AI/data analytics partners", "Telemedicine platform partners",
      ],
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
        The ecosystem that makes it work
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
        Inclusion & Impact's success depends on partnerships across sectors. We've secured commitments from key stakeholders who share our vision of universal healthcare access.
      </motion.p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {partners.map((partnerGroup, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal text-left">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                    <partnerGroup.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{partnerGroup.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                  {partnerGroup.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const WereHiringSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      We're hiring
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      As we move from prototype to MVP and scale across West Africa, we're building a team of passionate professionals committed to healthcare access and social impact.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      Current and upcoming roles:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2 text-left">
      <motion.li variants={fadeIn}>Software developers (mobile, backend, frontend)</motion.li>
      <motion.li variants={fadeIn}>Community engagement coordinators</motion.li>
      <motion.li variants={fadeIn}>Healthcare partnership managers</motion.li>
      <motion.li variants={fadeIn}>Customer support specialists</motion.li>
      <motion.li variants={fadeIn}>Marketing and communications professionals</motion.li>
      <motion.li variants={fadeIn}>Data analysts and impact evaluators</motion.li>
    </motion.ul>
    <motion.div variants={fadeIn} className="mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <a href="mailto:careers@baaraconsulting.com">Contact Careers</a>
      </Button>
    </motion.div>
  </div>
);
const PartnerWithUsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Partner with Us
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      We're actively seeking additional partners across categories:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2 text-left">
      <motion.li variants={fadeIn}>Healthcare providers – Hospitals, clinics, pharmacies, laboratories</motion.li>
      <motion.li variants={fadeIn}>Mobile operators – Regional expansion partners</motion.li>
      <motion.li variants={fadeIn}>Financial institutions – Insurance companies, microfinance organisations, banks</motion.li>
      <motion.li variants={fadeIn}>Technology companies – Platform development, cybersecurity, AI/data analytics</motion.li>
      <motion.li variants={fadeIn}>NGOs & development organisations – Community engagement, impact evaluation</motion.li>
      <motion.li variants={fadeIn}>Academic institutions – Research partnerships, impact studies</motion.li>
      <motion.li variants={fadeIn}>Corporate sponsors – CSR partnerships, employee healthcare programmes</motion.li>
    </motion.ul>
    <motion.div variants={fadeIn} className="mt-10">
      <Button asChild size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/join-us">Explore Partnership Opportunities <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
    </motion.div>
  </div>
);
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Meet the team
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      Want to learn more about our team, discuss partnership opportunities, or explore how you can support our mission?
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/contact">Schedule a Meeting</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-soft-sand text-soft-sand hover:bg-soft-sand hover:text-deep-blue font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/contact">Contact Us</Link>
      </Button>
      <Button size="lg" variant="ghost" className="text-soft-sand hover:bg-soft-sand/20 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105" disabled>
        View Full Team Bios
      </Button>
    </motion.div>
  </div>
);
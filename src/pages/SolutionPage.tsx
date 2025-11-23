import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Globe, Users, Phone, BellRing, User, Briefcase, Group, ShieldCheck, Wifi, Lock, CheckCircle } from 'lucide-react';
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
export function SolutionPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <VisionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <HowItWorksPathwaysSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <UserJourneysSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <EcosystemSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <TechnologySection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <CtaSection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-deep-teal text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581092644265-e41478201389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHw0fHdlc3QlMjBhZnJpY2ElMjBoZWFsdGhjYXJlfGVufDB8fHx8MTcxOTk0OTY0MHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Mobile healthcare access"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-display font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Healthcare access, reimagined for mobile-first Africa
      </motion.h1>
    </div>
  </section>
);
const VisionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      What if every mobile phone was a healthcare wallet?
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Guinea is a cash-based society where 97% of the population has no access to formal financial services. But nearly everyone has a mobile phone. We're meeting people where they are, with technology they already use.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact is a mobile health-fintech platform that transforms how the unbanked and uninsured access healthcare. We combine savings technology, diaspora support, community pooling, telemedicine, and instant payments—all accessible from the most basic mobile phone.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 italic font-bold">
      We're building more than an app. We're building a lifeline.
    </motion.p>
  </div>
);
const HowItWorksPathwaysSection = () => {
  const pathways = [
    { icon: Wallet, title: "Automatic healthcare savings", description: "Users set up automatic debits from mobile money accounts into healthcare-specific savings wallets. As little as a few cents a day.", example: "For the taxi driver who can save 1,000 GNF per day, in 6 months that's 180,000 GNF—enough for multiple consultations, medications, or preventive care." },
    { icon: Globe, title: "Diaspora contributions", description: "Family members living abroad can contribute directly to their relatives' healthcare funds through the platform. One-time or recurring contributions.", example: "For the diaspora member in Europe sending €10/month, that's 120,000+ GNF annually—comprehensive family healthcare coverage." },
    { icon: Users, title: "Community pooling", description: "Women's interest groups, religious organisations, and civil servants can pool resources and manage collective healthcare funds. Group savings accounts with multiple administrators.", example: "For a women's group of 50 members each contributing 2,000 GNF weekly, that's 400,000 GNF monthly—enough to cover emergencies for multiple families." },
    { icon: Phone, title: "Instant provider access", description: "Through partnerships with hospitals, clinics, pharmacies, labs, and mobile operators, users can access care immediately. Book appointments via USSD or app.", example: "Works on any mobile phone—even basic feature phones through USSD codes." },
    { icon: BellRing, title: "Early warning system", description: "Aggregated, anonymous treatment data helps health authorities detect disease outbreaks early and respond faster. Real-time monitoring of health trends.", example: "When multiple users in a region seek treatment for similar symptoms, authorities are notified immediately—before an outbreak becomes an epidemic." },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Five pathways to healthcare access
      </motion.h2>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pathways.map((pathway, index) => (
          <motion.div key={index} variants={fadeIn} className="text-left">
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                    <pathway.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{pathway.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mt-2 text-base text-charcoal/80">{pathway.description}</p>
                <p className="mt-4 text-sm text-charcoal/60 italic">{pathway.example}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const UserJourneysSection = () => {
  const journeys = [
    {
      icon: User,
      name: "Aminata's story: Informal worker",
      profile: "Market trader in Conakry, three children, no bank account",
      journey: [
        "Registers via USSD code on her basic phone",
        "Sets up automatic 1,500 GNF daily debit from mobile money",
        "After 4 months, her son develops a fever",
        "Uses platform to book appointment at partner clinic",
        "Pays 50,000 GNF directly from healthcare wallet",
        "Receives medication prescription, pays pharmacy from wallet",
        "Total cost: 75,000 GNF—all saved over 4 months",
        "Continues saving for next emergency",
      ],
      impact: "Her child gets treatment immediately. No borrowing, no asset sales, no delayed care.",
    },
    {
      icon: Briefcase,
      name: "Ibrahim's story: Diaspora member",
      profile: "Lives in France, supports extended family in Guinea",
      journey: [
        "Sets up accounts for mother, sister, and three nieces in Guinea",
        "Contributes €15/month split across accounts",
        "Receives notification when his mother books a consultation",
        "Can see how funds are being used for healthcare",
        "Family has 24/7 access to care without waiting for remittances",
      ],
      impact: "Peace of mind knowing family has healthcare access. No emergency calls for medical money. Transparent use of contributions.",
    },
    {
      icon: Group,
      name: "Fatou's story: Women's group leader",
      profile: "Leader of 40-woman Tontine savings group",
      journey: [
        "Registers group account with multiple administrators",
        "Members contribute 2,000 GNF weekly",
        "Group decides collectively how to allocate healthcare funds",
        "When a member's husband has an accident, group funds cover emergency care",
        "Transparent ledger shows all contributions and withdrawals",
      ],
      impact: "Community safety net that actually works. Strengthened social bonds. Empowered collective decision-making.",
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Real people, real protection
      </motion.h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {journeys.map((journey, index) => (
          <motion.div key={index} variants={fadeIn} className="text-left">
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-deep-blue text-white">
                    <journey.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{journey.name}</CardTitle>
                </div>
                <p className="text-sm text-charcoal/70 mt-2">{journey.profile}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-deep-teal mb-2">Her journey:</h4>
                <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                  {journey.journey.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
                <h4 className="font-semibold text-deep-teal mt-4 mb-2">Impact:</h4>
                <p className="text-base text-charcoal/80">{journey.impact}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const EcosystemSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      A platform that connects everyone
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      Inclusion & Impact creates a complete ecosystem where all stakeholders benefit:
    </motion.p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get affordable access to care and financial protection.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Healthcare providers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Receive instant payment and access to millions of potential patients.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Mobile operators</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Facilitate transactions and expand their service offerings.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Government</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Receives early warning data and achieves health policy goals.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Diaspora</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Has transparent, reliable way to support family healthcare.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Build resilient, self-sustaining health protection systems.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
      Everyone wins. Everyone benefits. Everyone plays a role in transforming healthcare access.
    </motion.p>
  </div>
);
const TechnologySection = () => {
  const techFeatures = [
    { icon: Phone, title: "USSD-first", description: "Works on any mobile phone, even basic feature phones." },
    { icon: Wifi, title: "Low-data", description: "Minimal data usage for areas with poor connectivity." },
    { icon: Globe, title: "Multi-language", description: "Local languages for maximum accessibility." },
    { icon: ShieldCheck, title: "Security", description: "Bank-level encryption and data protection." },
    { icon: Lock, title: "Privacy by design", description: "All health data is encrypted, anonymous aggregation for outbreak detection." },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Simple by design, powerful by architecture
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
        Our platform is designed to work in African contexts:
      </motion.p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {techFeatures.map((feature, index) => (
          <motion.div key={index} variants={fadeIn} className="text-left">
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mt-2 text-base text-charcoal/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      From concept to reality
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      We've moved beyond theory. We have:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}><CheckCircle className="inline-block mr-2 h-5 w-5 text-warm-coral" />Strategic partnerships with government entities</motion.li>
      <motion.li variants={fadeIn}><CheckCircle className="inline-block mr-2 h-5 w-5 text-warm-coral" />Agreements with healthcare providers across Guinea</motion.li>
      <motion.li variants={fadeIn}><CheckCircle className="inline-block mr-2 h-5 w-5 text-warm-coral" />Integration with major mobile operators (Orange, MTN)</motion.li>
      <motion.li variants={fadeIn}><CheckCircle className="inline-block mr-2 h-5 w-5 text-warm-coral" />Prototype tested with target communities</motion.li>
      <motion.li variants={fadeIn}><CheckCircle className="inline-block mr-2 h-5 w-5 text-warm-coral" />Regulatory approval pathways established</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90 font-bold">
      What we need now is funding to move from prototype to MVP—and launch at scale.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/investment">Explore the Investment Opportunity <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-soft-sand text-soft-sand hover:bg-soft-sand hover:text-deep-blue font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/team-partners">See How You Can Partner <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
    </motion.div>
  </div>
);
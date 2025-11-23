import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, HeartPulse, ShieldCheck, DollarSign, Handshake } from 'lucide-react';
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
// Create a motion-wrapped Link component for animations
const MotionLink = motion(Link);
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-soft-sand">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-display font-extrabold text-deep-blue sm:text-5xl md:text-6xl lg:text-7xl"
      >
        We're turning <span className="text-deep-teal">mobile phones</span> into <span className="text-warm-coral">lifelines</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 sm:text-xl"
      >
        Every day, families across West Africa choose between food and medicine. We're building the platform that ends that choice—combining mobile savings, diaspora support, and community power to make healthcare accessible for everyone.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/join-us">Invest in Impact</MotionLink>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/team-partners">Become a Partner</MotionLink>
        </Button>
        <Button asChild size="lg" variant="ghost" className="text-charcoal hover:bg-gray-200 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
          <MotionLink to="/our-story">Read Our Story</MotionLink>
        </Button>
      </motion.div>
    </div>
  </section>
);
const CrisisInNumbersSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
          Three hours. One mother. One child. Zero access to care.
        </motion.h2>
        <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
          In 2015, during the Ebola epidemic in Sierra Leone, a nursing mother and her infant arrived at a treatment centre. They had waited three days to seek care—not by choice, but because $20 for a hospital visit was impossible for their family. Three hours later, they were gone. Both of them. That day changed everything for our founder, Moulaye Camara.
        </motion.p>
        <motion.div variants={fadeIn}>
          <MotionLink
            to="/our-story"
            className="mt-8 inline-flex items-center text-lg font-semibold text-warm-coral hover:text-warm-coral/80 transition-colors"
          >
            Read the Full Story <ArrowRight className="ml-2 h-5 w-5" />
          </MotionLink>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
const ProblemSection = () => {
  const stats = [
    { value: "13.4 million", label: "people in Guinea alone have no health insurance." },
    { value: "55%", label: "of Guinea's population cannot afford basic healthcare." },
    { value: "95%", label: "of malaria cases occur in Sub-Saharan Africa." },
    { value: "1.5", label: "physicians per 10,000 people—a luxury." },
  ];
  return (
    <section className="py-16 md:py-24 bg-soft-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
            The invisible healthcare crisis
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeIn} className="text-center">
              <p className="text-5xl font-bold font-display text-warm-coral">{stat.value}</p>
              <p className="mt-2 text-lg text-charcoal/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
const SolutionSection = () => {
  const features = [
    { icon: DollarSign, title: "Save for healthcare", description: "Automatic daily, weekly, or monthly savings into healthcare-specific accounts." },
    { icon: Users, title: "Diaspora contributions", description: "Family abroad can support relatives directly through the platform." },
    { icon: Handshake, title: "Community pooling", description: "Groups manage shared healthcare funds for their members." },
    { icon: HeartPulse, title: "Instant access", description: "Book appointments, access telemedicine, and pay providers from a mobile phone." },
    { icon: ShieldCheck, title: "Early warning", description: "Anonymous data helps detect disease outbreaks before they become epidemics." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
            className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl"
          >
            Healthcare access, reimagined
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
            className="mt-4 max-w-2xl text-xl text-charcoal/80 lg:mx-auto"
          >
            Inclusion & Impact is a mobile health-fintech platform that transforms how the unbanked and uninsured access healthcare in Guinea and West Africa.
          </motion.p>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeIn}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-deep-blue">{feature.title}</h3>
                <p className="mt-2 text-base text-charcoal/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="link" className="text-lg text-warm-coral hover:text-warm-coral/80">
            <MotionLink to="/our-solution">See How It Works <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
const ImpactSection = () => (
  <section className="py-16 md:py-24 bg-deep-teal text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
          From one community to 200 million people
        </motion.h2>
        <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
          This isn't just humanitarian work. It's a sustainable business model addressing one of the world's most pressing challenges whilst generating social and financial returns.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <motion.div variants={fadeIn}>
          <p className="text-5xl font-bold font-display text-warm-coral">525,000</p>
          <p className="mt-2 text-lg text-soft-sand/90">People in Year 1 (Conakry)</p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <p className="text-5xl font-bold font-display text-warm-coral">2.6M+</p>
          <p className="mt-2 text-lg text-soft-sand/90">People across Guinea by Year 5</p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <p className="text-5xl font-bold font-display text-warm-coral">200M+</p>
          <p className="mt-2 text-lg text-soft-sand/90">Total market across West Africa</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="text-center mt-12"
      >
        <Button asChild size="lg" variant="outline" className="border-soft-sand text-soft-sand hover:bg-soft-sand hover:text-deep-teal font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/impact-market">Explore the Market Opportunity</MotionLink>
        </Button>
      </motion.div>
    </div>
  </section>
);
const PartnersSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="text-center"
      >
        <h2 className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
          Trusted by those who matter
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-charcoal/80">
          We've secured strategic partnerships with government, healthcare providers, mobile operators, and technology partners.
        </p>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="mt-12"
      >
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-12">
          {['Orange', 'MTN', 'ONAFRIQ', 'Clinique Pasteur', '9series', 'Gov. of Guinea'].map((partner) => (
            <div key={partner} className="text-center">
              <p className="text-2xl font-semibold text-gray-400 grayscale hover:grayscale-0 hover:text-charcoal transition-all duration-300">{partner}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="text-center mt-12"
      >
        <Button asChild size="lg" variant="link" className="text-lg text-warm-coral hover:text-warm-coral/80">
          <MotionLink to="/team-partners">Meet Our Partners <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
        </Button>
      </motion.div>
    </div>
  </section>
);
const InvestmentSection = () => (
  <section className="py-16 md:py-24 bg-soft-sand">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        className="text-center"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
          An investment in lives and returns
        </motion.h2>
        <motion.p variants={fadeIn} className="mt-4 max-w-2xl mx-auto text-xl text-charcoal/80">
          Financially sound. Socially transformative.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={fadeIn}>
          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-warm-coral text-2xl">Seeking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-deep-blue">$50,000</p>
              <p className="text-charcoal/80">to move from prototype to MVP</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-warm-coral text-2xl">Year 3 EBITDA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-deep-blue">82.32%</p>
              <p className="text-charcoal/80">projected margin</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-warm-coral text-2xl">Projected IRR</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-deep-blue">182%</p>
              <p className="text-charcoal/80">internal rate of return</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="text-center mt-12"
      >
        <Button asChild size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/investment">View the Investment Case</MotionLink>
        </Button>
      </motion.div>
    </div>
  </section>
);
const CtaSection = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="text-3xl font-display font-extrabold tracking-tight text-deep-blue sm:text-4xl"
      >
        <span className="block">The question isn't whether this problem exists.</span>
        <span className="block text-warm-coral">The question is whether we will act.</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="mt-6 max-w-2xl mx-auto text-lg text-charcoal/80"
      >
        We have the technology, partnerships, team, and market. What we need now are partners who believe profit and purpose are complements, not contradictions.
      </motion.p>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}
        className="mt-8 flex justify-center gap-4"
      >
        <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/join-us">Join the Movement</MotionLink>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <MotionLink to="/contact">Contact Us</MotionLink>
        </Button>
      </motion.div>
    </div>
  </section>
);
export function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <CrisisInNumbersSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <PartnersSection />
      <InvestmentSection />
      <CtaSection />
    </SiteLayout>
  );
}
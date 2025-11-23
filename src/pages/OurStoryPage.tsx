import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, ShieldOff, MapPin } from 'lucide-react';
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
export function OurStoryPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <SierraLeoneSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <CruelMathematicsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <DecisionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <FromGriefToActionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <ThisIsPersonalSection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-deep-blue text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581092644265-e41478201389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHw0fHdlc3QlMjBhZnJpY2ElMjBoZWFsdGhjYXJlfGVufDB8fHx8MTcxOTk0OTY0MHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Healthcare in West Africa"
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
        Three hours that changed everything
      </motion.h1>
    </div>
  </section>
);
const SierraLeoneSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The moment that became a mission
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      The Ebola epidemic had turned West Africa into a landscape of fear and loss. As a humanitarian worker deployed to one of the treatment centres in Sierra Leone, I had witnessed suffering that words struggle to capture.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      But one day—one single moment—would become the catalyst for everything that follows. A nursing mother arrived with her infant. Both were burning with fever, their bodies already ravaged by a disease that had killed over 11,300 people across the region. I watched helplessly as medical staff did what little they could.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      The mother's eyes held a question I couldn't answer: Why did we wait so long?
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      Three hours later, they were gone. Both of them.
    </motion.p>
  </div>
);
const CruelMathematicsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      $20. That's what separated life from death.
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      In the days that followed, I couldn't shake the weight of that encounter. The community leader who brought them explained what had happened: When symptoms first appeared, the family couldn't afford the $20 hospital visit. Less than what many spend on lunch. For this family, it was impossible. They gambled on a traditional healer. They lost.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      But this wasn't about one family. It was about three barriers that kill:
    </motion.p>
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold text-warm-coral">Money</CardTitle>
            <DollarSign className="h-8 w-8 text-deep-teal" />
          </CardHeader>
          <CardContent>
            <p className="text-charcoal/80">55% of Guinea's population cannot afford basic healthcare.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold text-warm-coral">Stigma</CardTitle>
            <ShieldOff className="h-8 w-8 text-deep-teal" />
          </CardHeader>
          <CardContent>
            <p className="text-charcoal/80">Fear prevented them from using public transport to reach care.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold text-warm-coral">Access</CardTitle>
            <MapPin className="h-8 w-8 text-deep-teal" />
          </CardHeader>
          <CardContent>
            <p className="text-charcoal/80">Only 1.5 physicians per 10,000 people; even reaching a doctor is a luxury.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const DecisionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      That day, I made a commitment
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      I would find a way to ensure no family would have to choose between poverty and treatment. That healthcare would not be a privilege reserved for those who could afford it. That technology and innovation could bridge the gap between desperation and hope.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      I am Moulaye Camara, and I have spent over 30 years as a humanitarian worker across Africa. I have seen what poverty does to communities. I have witnessed how easily preventable deaths become inevitable when systems fail the most vulnerable.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      But I have also seen the power of communities to come together. The resilience of women's savings groups. The dedication of diaspora members supporting families back home. The innovation that mobile technology has brought to financial inclusion.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      What if we could harness all of that for healthcare?
    </motion.p>
  </div>
);
const FromGriefToActionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      The birth of Inclusion & Impact
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      That question became Inclusion & Impact—a health-fintech platform designed specifically for the 200 million unbanked and uninsured people across West Africa.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90">
      We started with a simple premise: nearly everyone has a mobile phone, even if they don't have a bank account. What if that phone could become a healthcare savings account? A connection to quality providers? A way for diaspora families to contribute? A tool for communities to pool resources?
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
      What if we could turn mobile phones into lifelines?
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90">
      We assembled a team of Africans who understand the crisis firsthand—humanitarians, technologists, analysts, all committed to building something that would work in African contexts, not just in theory. We secured partnerships with governments, healthcare providers, mobile operators, and payment processors. We built prototypes. We tested with communities. We listened. And now, we're ready to scale.
    </motion.p>
  </div>
);
const ThisIsPersonalSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Every user has a face. Every statistic has a name.
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      I think about that mother and child often. I think about the three hours between their arrival and their deaths. I think about all the things that could have been different. But I also think about the millions of people who don't have to become statistics.
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>The taxi driver who will be able to afford his daughter's medication.</motion.li>
      <motion.li variants={fadeIn}>The artisan whose savings will cover her family's healthcare needs.</motion.li>
      <motion.li variants={fadeIn}>The diaspora member who will know their contributions are making a real difference.</motion.li>
      <motion.li variants={fadeIn}>The community that will watch disease outbreaks get caught early, lives saved, futures preserved.</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      We cannot change the past. But we can change the future. This is more than an app. This is a movement. This is a declaration that healthcare is a human right, not a privilege. And it starts now.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/join-us">Join Our Movement <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
    </motion.div>
  </div>
);
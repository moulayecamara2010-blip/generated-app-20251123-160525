import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
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
export function ProblemPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <IntroductionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <InsuranceGapSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <AffordabilityCrisisSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <ProviderShortageSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <DiseaseBurdenSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <RealCostSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <OpportunitySection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-warm-coral text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581092644265-e41478201389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHw0fHdlc3QlMjBhZnJpY2ElMjBoZWFsdGhjYXJlfGVufDB8fHx8MTcxOTk0OTY0MHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Healthcare crisis in West Africa"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-coral/80 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-display font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        When healthcare becomes a privilege, survival becomes a lottery
      </motion.h1>
    </div>
  </section>
);
const IntroductionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The invisible healthcare crisis in West Africa
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Across Guinea and West Africa, millions wake up every day knowing that a single illness could destroy their family financially. A child's fever. A mother's injury. A father's chronic condition.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80">
      These aren't hypothetical scenarios. They're daily realities for the 200 million people in West Africa's informal sector—taxi drivers, artisans, market traders, domestic workers—who have no health insurance, no financial safety net, and no access to affordable care. This is the invisible crisis. And the numbers tell a devastating story.
    </motion.p>
  </div>
);
const InsuranceGapSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      13.4 million people, zero protection
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      In Guinea alone:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>Only <span className="font-bold text-warm-coral">5%</span> of 14.1 million people have health insurance</motion.li>
      <motion.li variants={fadeIn}>That means <span className="font-bold text-warm-coral">13.4 million people</span> are one medical emergency away from financial ruin</motion.li>
      <motion.li variants={fadeIn}>The average health insurance coverage rate in West Africa is just <span className="font-bold text-warm-coral">15%</span></motion.li>
      <motion.li variants={fadeIn}>Across Sub-Saharan Africa, only <span className="font-bold text-warm-coral">19%</span> of the population had health insurance in 2019</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      Who's left behind?
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">80%</span> of Guinea's population works in the informal sector—no employer-provided coverage</motion.li>
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">74%</span> of female workers in Africa are informal workers</motion.li>
      <motion.li variants={fadeIn}>Only <span className="font-bold text-warm-coral">15%</span> of informal sector workers in Guinea have any health coverage</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      Without insurance, every illness becomes a financial catastrophe.
    </motion.p>
  </div>
);
const AffordabilityCrisisSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      $20. The cost of a life.
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      The cruel mathematics:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">55%</span> of Guinea's population cannot afford basic healthcare</motion.li>
      <motion.li variants={fadeIn}>The average hospital visit costs <span className="font-bold text-warm-coral">$20</span>—a week's income for many families</motion.li>
      <motion.li variants={fadeIn}>More than half the country must choose between feeding their children or treating illness</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      What happens when families can't afford care:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>They delay seeking treatment until conditions become critical</motion.li>
      <motion.li variants={fadeIn}>They turn to traditional healers, sometimes with fatal results</motion.li>
      <motion.li variants={fadeIn}>They sell assets, borrow at exploitative rates, or simply go without</motion.li>
      <motion.li variants={fadeIn}>Children die from preventable diseases like malaria and pneumonia—diseases we know how to cure</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      The problem isn't that treatment doesn't exist. The problem is that the people who need it most can't access it.
    </motion.p>
  </div>
);
const ProviderShortageSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Too few doctors, too many patients
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90 font-bold">
      The healthcare infrastructure crisis:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>Guinea has only <span className="font-bold text-warm-coral">1.5 physicians per 10,000 people</span></motion.li>
      <motion.li variants={fadeIn}>The WHO recommends a minimum of <span className="font-bold text-warm-coral">10 physicians per 10,000 people</span></motion.li>
      <motion.li variants={fadeIn}>Even when families can afford care, reaching a doctor becomes a luxury</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90 font-bold">
      The consequences:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>Long wait times that turn minor conditions into emergencies</motion.li>
      <motion.li variants={fadeIn}>Overcrowded facilities with limited resources</motion.li>
      <motion.li variants={fadeIn}>Rural communities with virtually no access to qualified healthcare professionals</motion.li>
      <motion.li variants={fadeIn}>Only <span className="font-bold text-warm-coral">57%</span> of people in Guinea have access to accurate health information</motion.li>
    </motion.ul>
  </div>
);
const DiseaseBurdenSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Preventable deaths, devastating losses
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      Malaria—a preventable, treatable disease:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">95%</span> of the world's 241 million malaria cases (2021) occurred in Sub-Saharan Africa</motion.li>
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">50%</span> of Africa's malaria burden is concentrated in West Africa</motion.li>
      <motion.li variants={fadeIn}>Without health insurance, malaria is one of the deadliest diseases in the region</motion.li>
      <motion.li variants={fadeIn}>Children from uninsured families are significantly more likely to die from preventable diseases</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      The Ebola legacy:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>The 2013-2016 epidemic killed over <span className="font-bold text-warm-coral">11,300 people</span> across Guinea, Liberia, and Sierra Leone</motion.li>
      <motion.li variants={fadeIn}>More than <span className="font-bold text-warm-coral">28,600 cases</span> were recorded</motion.li>
      <motion.li variants={fadeIn}>The case fatality rate reached <span className="font-bold text-warm-coral">66%</span> in Liberia, <span className="font-bold text-warm-coral">60%</span> in Sierra Leone</motion.li>
      <motion.li variants={fadeIn}>More than <span className="font-bold text-warm-coral">800 healthcare workers</span> were infected; more than <span className="font-bold text-warm-coral">500 died</span></motion.li>
      <motion.li variants={fadeIn}>The economic impact: <span className="font-bold text-warm-coral">$2.2 billion</span> in losses in 2015 alone</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 italic">
      These weren't inevitable tragedies. They were failures of access, affordability, and early intervention.
    </motion.p>
  </div>
);
const RealCostSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Beyond statistics: human lives
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      These numbers represent real people with names, families, and futures:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>The taxi driver who works 14-hour days but still can't save enough for his daughter's medication.</motion.li>
      <motion.li variants={fadeIn}>The artisan whose hands create beauty but can't earn enough to protect her family from illness.</motion.li>
      <motion.li variants={fadeIn}>The diaspora member sending money home, knowing it will never be enough.</motion.li>
      <motion.li variants={fadeIn}>The religious community pooling resources, watching them evaporate with each medical crisis.</motion.li>
      <motion.li variants={fadeIn}>The mother who arrives too late, her child in her arms, asking a question no one can answer: <span className="italic">Why did we wait so long?</span></motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      This is the crisis we're solving.
    </motion.p>
  </div>
);
const OpportunitySection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Where there's crisis, there's opportunity for change
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      But here's what the statistics also show:
    </motion.p>
    <motion.ul variants={staggerContainer} className="mt-4 max-w-3xl mx-auto text-lg text-soft-sand/90 list-disc list-inside space-y-2">
      <motion.li variants={fadeIn}>Over <span className="font-bold text-warm-coral">80%</span> mobile phone penetration in Sub-Saharan Africa</motion.li>
      <motion.li variants={fadeIn}><span className="font-bold text-warm-coral">97%</span> of Guinea's population is our addressable market</motion.li>
      <motion.li variants={fadeIn}>Women's savings groups (Susu, Tontine) have proven track records in collective financial management</motion.li>
      <motion.li variants={fadeIn}>Diaspora remittances represent billions in potential healthcare funding</motion.li>
      <motion.li variants={fadeIn}>Post-COVID, health awareness and demand for health security have never been higher</motion.li>
    </motion.ul>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90 italic">
      The infrastructure for change already exists. What's missing is a platform that connects it all. That's where we come in.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/our-solution">See Our Solution <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
    </motion.div>
  </div>
);
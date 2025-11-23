import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, DollarSign, Target, HeartHandshake, ShieldCheck } from 'lucide-react';
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
export function ImpactMarketPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <MarketOpportunitySection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <FiveYearGrowthVisionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <FinancialProjectionsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <UnSdgAlignmentSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <ImpactMeasurementSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <WhyThisMarketWhyNowSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <CtaSection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-deep-blue text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHw2fHdlc3QlMjBhZnJpY2ElMjBjb21tdW5pdHklMjBtYXJrZXR8ZW58MHx8fHwxNzE5OTQ5NjQxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="African market scene"
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
        From 525,000 people in Year 1 to 200 million across West Africa
      </motion.h1>
    </div>
  </section>
);
const MarketOpportunitySection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      A massive, underserved market waiting for innovation
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      The scale of the healthcare access crisis represents one of the largest market opportunities in Africa today. This isn't about creating demand—the demand exists. It's about creating access. The numbers speak for themselves:
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Globe className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Guinea: Our foundation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li><span className="font-semibold">Total population:</span> 14.1 million</li>
              <li><span className="font-semibold">Uninsured:</span> 13.4 million (95%)</li>
              <li><span className="font-semibold">Informal sector workers:</span> 80% of workforce</li>
              <li><span className="font-semibold">Total addressable market:</span> 97% of population</li>
              <li><span className="font-semibold">Mobile phone penetration:</span> 80%+</li>
            </ul>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">Every condition for success exists: urgent need, mobile infrastructure, proven community structures, government support.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">West Africa: Our expansion</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li><span className="font-semibold">Target market:</span> 200+ million people</li>
              <li><span className="font-semibold">Informal sector workers:</span> 74% of female workforce</li>
              <li><span className="font-semibold">Average insurance coverage:</span> 15%</li>
              <li><span className="font-semibold">Countries for expansion:</span> Liberia, Mali, Sierra Leone, Senegal, Burkina Faso</li>
            </ul>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">Same challenges, same opportunities, same model that works.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const FiveYearGrowthVisionSection = () => {
  const years = [
    {
      year: "Year 1 (2025): Conakry launch",
      target: "525,000 people in Guinea's capital",
      strategy: [
        "Focus on five key segments: women's groups, religious organisations, artisans, civil servants, diaspora",
        "Establish 50+ healthcare provider partnerships",
        "Build brand trust through community engagement",
        "Demonstrate proof of concept at scale",
      ],
      impact: [
        "Healthcare access for half a million people",
        "Estimated 15,000+ prevented medical financial catastrophes",
        "20+ community groups with collective healthcare funds",
      ],
    },
    {
      year: "Year 2 (2026): Suburban expansion",
      target: "+525,000 people (1.05 million cumulative)",
      strategy: [
        "Expand to Conakry suburbs and satellite communities",
        "Replicate successful community engagement models",
        "Scale provider network",
        "Introduce telemedicine for remote areas",
      ],
      impact: [
        "Over 1 million people with healthcare access",
        "30,000+ prevented financial catastrophes",
        "50+ community groups participating",
      ],
    },
    {
      year: "Year 3 (2027): Provincial reach",
      target: "Expansion across Guinea provinces",
      strategy: [
        "Enter Kankan, Labé, N'Zérékoré regions",
        "Adapt platform for rural contexts",
        "Partner with regional healthcare facilities",
        "Leverage learnings from Years 1-2",
      ],
      impact: [
        "Multi-province coverage",
        "60,000+ prevented financial catastrophes",
        "100+ community groups",
        "Demonstrated outbreak detection value",
      ],
    },
    {
      year: "Year 5 (2029): National presence",
      target: "2.625 million people across Guinea",
      strategy: [
        "Comprehensive national coverage",
        "Full integration with national health systems",
        "Platform as essential health infrastructure",
        "Prepare for regional expansion",
      ],
      impact: [
        "~19% of Guinea's population served",
        "150,000+ prevented financial catastrophes",
        "Measurable reduction in catastrophic health expenditure",
        "National early warning system operational",
      ],
    },
    {
      year: "Year 6+ (2030 onwards): Regional expansion",
      target: "Liberia, Mali, Sierra Leone – 15% of low/middle-income population",
      strategy: [
        "Adapt model for new markets",
        "Leverage Guinea success as proof of concept",
        "Partner with regional organisations (ECOWAS, regional development banks)",
        "Build West African health-fintech ecosystem",
      ],
      impact: [
        "Multi-country presence",
        "10+ million people served across region",
        "Regional outbreak surveillance network",
        "Position as leading African health-fintech platform",
      ],
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Five-Year Growth Vision
      </motion.h2>
      <div className="mt-12 space-y-16">
        {years.map((data, index) => (
          <motion.div key={index} variants={fadeIn} className="text-left bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-warm-coral">{data.year}</h3>
            <p className="mt-2 text-lg text-deep-blue font-semibold">Target: {data.target}</p>
            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-deep-teal mb-2">Strategy:</h4>
                <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                  {data.strategy.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-deep-teal mb-2">Impact metrics:</h4>
                <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                  {data.impact.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const FinancialProjectionsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Growth that makes sense
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Revenue model</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">How we generate revenue:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Small transaction fees on savings deposits</li>
              <li>Platform fees from healthcare providers</li>
              <li>Premium plans with added features</li>
              <li>Data analytics services (anonymous, aggregated)</li>
              <li>Grant funding and development partner support</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Conservative assumptions:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Average savings of 50,000 GNF per user annually</li>
              <li>2% platform fee on transactions</li>
              <li>Provider fees of 1.5% per transaction</li>
              <li>30% of users on premium plans (5,000 GNF annually)</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Projected performance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Year 1 (2025):</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Premium collected: $891,050</li>
              <li>EBITDA margin: 24.15%</li>
              <li>Users: 525,000</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Year 3 (2027):</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Premium collected: $4,103,991</li>
              <li>EBITDA margin: 82.32%</li>
              <li>Users: 1,500,000+</li>
            </ul>
            <p className="mt-4 text-base text-charcoal/80 font-bold">Projected internal rate of return: 182%</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const UnSdgAlignmentSection = () => {
  const sdgs = [
    {
      number: "SDG 3",
      title: "Good Health and Well-being",
      target: "Achieve universal health coverage, including financial risk protection and access to quality essential healthcare services.",
      contribution: "Direct pathway to universal health coverage, financial protection, improved access to quality providers, preventive care.",
      impact: "By Year 5, protecting 2.625 million people from health-related financial catastrophe.",
      color: "text-forest-green"
    },
    {
      number: "SDG 1",
      title: "No Poverty",
      target: "Implement nationally appropriate social protection systems for all, including floors.",
      contribution: "Social protection against medical expenses—primary poverty driver, breaking the cycle of poverty, preserving household assets.",
      impact: "Preventing 150,000+ families from falling into poverty due to medical expenses by Year 5.",
      color: "text-red-600"
    },
    {
      number: "SDG 5",
      title: "Gender Equality",
      target: "Undertake reforms to give women equal rights to economic resources and access to financial services.",
      contribution: "Direct financial inclusion for women, empowering women's savings groups, women's control over household health finances.",
      impact: "Over 60% of our users are women—majority of benefit flows to women and families they support.",
      color: "text-warm-coral"
    },
    {
      number: "SDG 8",
      title: "Decent Work and Economic Growth",
      target: "Strengthen the capacity of domestic financial institutions to encourage access to banking, insurance, and financial services for all.",
      contribution: "Financial inclusion for informal sector workers, micro-insurance mechanisms, protecting workforce health.",
      impact: "Enabling 80% of our users (informal workers) to access financial services for the first time.",
      color: "text-golden-yellow"
    },
    {
      number: "SDG 10",
      title: "Reduced Inequalities",
      target: "Empower and promote the social, economic, and political inclusion of all, irrespective of income.",
      contribution: "Bridging healthcare gap between rich and poor, urban and rural access parity, diaspora-local connectivity.",
      impact: "Reducing healthcare access inequality for 97% of Guinea's population by Year 5.",
      color: "text-purple-600"
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        Impact by design
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
        Inclusion & Impact directly advances five United Nations Sustainable Development Goals. Every user we serve, every community we empower, every life we save contributes to global development priorities.
      </motion.p>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {sdgs.map((sdg, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-left">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`text-3xl font-bold ${sdg.color}`}>{sdg.number}</div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{sdg.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-deep-teal mb-2">Target:</h4>
                <p className="text-base text-charcoal/80">{sdg.target}</p>
                <h4 className="font-semibold text-deep-teal mt-4 mb-2">Our contribution:</h4>
                <p className="text-base text-charcoal/80">{sdg.contribution}</p>
                <h4 className="font-semibold text-deep-teal mt-4 mb-2">Measurable impact:</h4>
                <p className="text-base text-charcoal/80">{sdg.impact}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const ImpactMeasurementSection = () => {
  const metrics = [
    {
      title: "Health outcome metrics",
      items: [
        "Healthcare utilisation rates among users vs. non-users",
        "Preventive care adoption",
        "Treatment delays reduced",
        "Disease outcomes for common conditions",
        "Early outbreak detection and response time",
      ],
      icon: HeartHandshake,
    },
    {
      title: "Financial protection metrics",
      items: [
        "Catastrophic health expenditure prevented",
        "Out-of-pocket healthcare spending reduced",
        "Asset sales for medical care avoided",
        "Household debt for healthcare reduced",
        "Savings accumulated for future health needs",
      ],
      icon: DollarSign,
    },
    {
      title: "System strengthening metrics",
      items: [
        "Healthcare providers joining network",
        "Digital payment adoption",
        "Mobile money healthcare transactions",
        "Government surveillance effectiveness",
        "Community health organisation strengthened",
      ],
      icon: ShieldCheck,
    },
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        How we track what matters
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
        We measure impact rigorously across three dimensions: health outcomes, financial protection, and system strengthening.
      </motion.p>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-left">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-deep-blue">{metric.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                  {metric.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-charcoal/80 italic font-bold">
        All impact data will be publicly reported annually, audited by independent evaluators.
      </motion.p>
    </div>
  );
};
const WhyThisMarketWhyNowSection = () => {
  const trends = [
    "Mobile penetration: 80%+ of target population has mobile access—the infrastructure exists.",
    "Post-COVID awareness: Health security is now a priority for families and governments alike.",
    "Impact investment growth: Investors increasingly seek opportunities that blend returns with social impact.",
    "Digital payments adoption: Mobile money usage has exploded—people are comfortable with digital transactions.",
    "Government commitment: West African governments have made universal health coverage a policy priority.",
    "Proven community models: Women's savings groups and diaspora remittance patterns demonstrate demand for collective health finance.",
    "Regulatory environment: Fintech-friendly regulations and government health-tech partnerships are expanding.",
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
        The perfect convergence
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
        Multiple trends create the ideal conditions for Inclusion & Impact's success:
      </motion.p>
      <motion.ul variants={staggerContainer} className="mt-8 max-w-4xl mx-auto text-lg text-soft-sand/90 list-disc list-inside space-y-3 text-left">
        {trends.map((trend, index) => (
          <motion.li key={index} variants={fadeIn}>
            {trend}
          </motion.li>
        ))}
      </motion.ul>
      <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
        The question isn't whether this market exists. The question is who will serve it first—and serve it well. That's where we come in.
      </motion.p>
    </div>
  );
};
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Be part of scaling impact
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      From 525,000 people in Year 1 to millions across West Africa by Year 6. From a prototype to essential health infrastructure. From a vision to a movement. This is the opportunity. This is the moment.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/investment">Invest in Our Growth <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/team-partners">Partner for Regional Expansion <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
      <Button asChild size="lg" variant="ghost" className="text-charcoal hover:bg-gray-200 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
        <a href="#" target="_blank" rel="noopener noreferrer">Download Full Market Analysis</a>
      </Button>
    </motion.div>
  </div>
);
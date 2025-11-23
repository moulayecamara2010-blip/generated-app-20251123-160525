import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, TrendingUp, Shield, BarChart, Handshake, Lightbulb, Scale, Users } from 'lucide-react';
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
export function InvestmentPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <InvestmentOverviewSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <RevenueModelSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <UseOfFundsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <FinancialProjectionsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <RiskMitigationSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <SensitivityAnalysisSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <ExitStrategySection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <WhyInvestNowSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <InvestmentTermsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <CtaSection />
      </SectionWrapper>
    </SiteLayout>
  );
}
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-deep-blue text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1556740738-b63906ae30cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHwxfHdlc3QlMjBhZnJpY2ElMjBpbnZlc3RtZW50fGVufDB8fHx8MTcxOTk1MDYwMHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Financial charts and graphs"
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
        An investment in lives and returns
      </motion.h1>
    </div>
  </section>
);
const InvestmentOverviewSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The opportunity
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact represents a rare convergence: a massive underserved market, proven demand, strategic partnerships in place, and a scalable solution. We offer impact investors the chance to generate exceptional financial returns whilst transforming healthcare access for millions.
    </motion.p>
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <CardTitle className="text-warm-coral text-2xl">Current status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-charcoal/80">Prototype developed, partnerships secured, ready to build MVP.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <CardTitle className="text-warm-coral text-2xl">Funding sought</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-deep-blue">$50,000</p>
            <p className="text-charcoal/80">for MVP development (15% equity, negotiable)</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <CardTitle className="text-warm-coral text-2xl">Founders' commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-deep-blue">$30,000</p>
            <p className="text-charcoal/80">invested</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const RevenueModelSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      How We Make Money
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact generates revenue through multiple streams, ensuring sustainability whilst keeping services affordable for users.
    </motion.p>
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        { title: "Transaction fees", percentage: "70%", description: "Small percentage fee on deposits to healthcare savings wallets (Avg: 2%)." },
        { title: "Provider platform fees", percentage: "20%", description: "Healthcare providers pay 1.5% fee per transaction, benefiting from instant payment." },
        { title: "Premium subscription plans", percentage: "8%", description: "Optional premium tier (5,000 GNF annually) with added benefits." },
        { title: "Data analytics services", percentage: "2%", description: "Anonymous, aggregated data sold to research institutions for public health." },
      ].map((item, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-deep-blue">{item.title}</CardTitle>
              <p className="text-warm-coral text-4xl font-bold">{item.percentage}</p>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal/80">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
const UseOfFundsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Where your investment goes
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Total requirement: <span className="font-bold text-warm-coral">$859,170</span>
    </motion.p>
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Software Development", percentage: "80.7%", amount: "$693,348", details: ["Platform development (mobile app, USSD, web portal)", "Payment integration", "Provider management system", "Data security", "Early warning system", "Infrastructure and hosting"] },
        { title: "Software Live Testing", percentage: "16.5%", amount: "$141,763", details: ["Beta testing with 1,000+ users", "Security audits", "Load testing", "Provider integration testing", "Regulatory compliance", "User experience refinement"] },
        { title: "Operating Expenses", percentage: "3%", amount: "$24,059", details: ["Team salaries during development", "Legal and regulatory compliance", "Office and administrative costs", "Initial marketing and community engagement"] },
      ].map((item, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-left">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-deep-blue">{item.title}</CardTitle>
              <p className="text-warm-coral text-3xl font-bold">{item.percentage}</p>
              <p className="text-deep-teal text-xl font-semibold">{item.amount}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
                {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-charcoal/80 italic font-bold">
      Founders have committed $30,000, demonstrating our commitment.
    </motion.p>
  </div>
);
const FinancialProjectionsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Conservative assumptions, strong performance
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <BarChart className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Three-year outlook</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Year 1 (2025):</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Users: 525,000</li>
              <li>Premium collected: $891,050</li>
              <li>EBITDA: $51,152 (24.15% margin)</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Year 3 (2027):</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Users: 1,500,000+</li>
              <li>Premium collected: $4,103,991</li>
              <li>EBITDA: $811,858 (82.32% margin)</li>
            </ul>
            <p className="mt-4 text-base text-charcoal/80 font-bold">Projected internal rate of return: 182%</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Unit economics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Per user, annually:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Total revenue per user: ~3,175 GNF ($0.37)</li>
              <li>Marginal cost per user: ~500 GNF ($0.06)</li>
              <li>Gross margin per user: ~2,675 GNF ($0.31) | 84% margin</li>
            </ul>
            <p className="mt-4 text-base text-charcoal/80 font-bold">Strong unit economics drive profitability at scale.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const RiskMitigationSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      How we manage risk
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      {[
        {
          category: "Market risks",
          risks: [
            { title: "Slower user adoption than projected", mitigation: "Conservative projections, multiple acquisition channels, community partnerships." },
            { title: "Competition from established companies", mitigation: "First-mover advantage, deep community relationships, purpose-built solution." },
          ],
          icon: Shield,
        },
        {
          category: "Operational risks",
          risks: [
            { title: "Technology failure or security breach", mitigation: "Bank-level security, regular audits, redundant systems, cyber insurance." },
            { title: "Healthcare provider network insufficient", mitigation: "Existing commitments, strong value proposition, phased rollout." },
          ],
          icon: Lightbulb,
        },
        {
          category: "Regulatory risks",
          risks: [
            { title: "Changes in fintech or healthcare regulation", mitigation: "Close government collaboration, compliant design, active policy participation." },
          ],
          icon: Scale,
        },
        {
          category: "Financial risks",
          risks: [
            { title: "Higher expenses than projected", mitigation: "Sensitivity analysis, lean operations, phased hiring, strong cost controls." },
            { title: "Lower revenue than projected", mitigation: "Multiple revenue streams, conservative assumptions, flexible pricing." },
          ],
          icon: DollarSign,
        },
      ].map((group, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-left">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                  <group.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-deep-blue">{group.category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {group.risks.map((risk, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <h4 className="font-semibold text-deep-teal">{risk.title}</h4>
                  <p className="text-base text-charcoal/80">Mitigation: {risk.mitigation}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
const SensitivityAnalysisSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Stress-tested for resilience
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      We've modeled various scenarios to demonstrate financial resilience:
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Worst-case scenario</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>User adoption 75% lower than projected</li>
              <li>Operating expenses 25% higher than projected</li>
              <li>Still maintains positive cash flow by Year 2</li>
              <li>Still achieves profitability by Year 3</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Debt service</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Loan payments can be serviced even if interest rates increase to 15%</li>
              <li>Debt-to-equity ratio remains healthy</li>
              <li>Clear path to debt repayment within 5-year term</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-charcoal/80 italic font-bold">
      Even in challenging scenarios, the investment remains sound.
    </motion.p>
  </div>
);
const ExitStrategySection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Multiple paths to returns
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      {[
        {
          title: "Acquisition by regional fintech/insurtech",
          details: "Most likely (5-7 years). Natural acquirers: Fintech platforms expanding into health, regional insurance companies, mobile operators, international development finance institutions.",
          icon: Handshake,
        },
        {
          title: "Strategic partnership/joint venture",
          details: "Regional expansion through partnership with ECOWAS members, development banks (AfDB, World Bank IFC) as investors, impact investment funds.",
          icon: Users,
        },
        {
          title: "Secondary market for impact investment stakes",
          details: "Growing secondary market for impact investments, development finance institutions often acquire mature impact investments.",
          icon: DollarSign,
        },
        {
          title: "Continue as independent, dividend-paying entity",
          details: "Strong cash generation from Year 3 onwards, sustainable dividend payments to investors, continued growth and impact.",
          icon: TrendingUp,
        },
      ].map((item, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal text-left">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-deep-blue">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-charcoal/80">{item.details}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
      Multiple pathways ensure investor liquidity.
    </motion.p>
  </div>
);
const WhyInvestNowSection = () => {
  const reasons = [
    "First-mover advantage: Guinea market is wide open, partnerships secured, user trust building.",
    "Proof of concept: Prototype built and tested, partnerships signed, government support secured.",
    "Market timing: Post-COVID health awareness, mobile money adoption accelerating, government prioritizing health policy.",
    "Investment required to scale: Without funding, we remain prototype, competitors could enter, communities continue suffering.",
  ];
  return (
    <div className="text-center">
      <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
        The window is closing
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
        Multiple trends create the ideal conditions for Inclusion & Impact's success:
      </motion.p>
      <motion.ul variants={staggerContainer} className="mt-8 max-w-4xl mx-auto text-lg text-charcoal/80 list-disc list-inside space-y-3 text-left">
        {reasons.map((reason, index) => (
          <motion.li key={index} variants={fadeIn}>
            {reason}
          </motion.li>
        ))}
      </motion.ul>
      <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-charcoal/80 italic font-bold">
        This is the moment. This is the investment.
      </motion.p>
    </div>
  );
};
const InvestmentTermsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The offer
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Immediate opportunity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Amount: <span className="font-bold text-warm-coral">$50,000</span></li>
              <li>Use: Move from prototype to MVP</li>
              <li>Equity: 15% (negotiable)</li>
              <li>Instrument: Equity investment</li>
              <li>Valuation: $333,333 pre-money</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-deep-blue">Investor benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Early-stage entry at attractive valuation</li>
              <li>Board observer rights for major investors</li>
              <li>Regular impact and financial reporting</li>
              <li>Priority access to future rounds</li>
              <li>Association with high-impact venture</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Join us in transforming healthcare access
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      This is more than an investment opportunity. It's a chance to be part of a movement that saves lives, strengthens communities, and builds sustainable prosperity.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Schedule an Investor Call</MotionLink>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-soft-sand text-soft-sand hover:bg-soft-sand hover:text-deep-teal font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <a href="mailto:moulaye@baaraconsulting.com?subject=Request for Full Business Plan">Download Full Business Plan</a>
      </Button>
      <Button asChild size="lg" variant="ghost" className="text-soft-sand hover:bg-soft-sand/20 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
        <a href="mailto:moulaye@baaraconsulting.com?subject=Request for Due Diligence Materials">Request Due Diligence Materials</a>
      </Button>
    </motion.div>
    <motion.div variants={fadeIn} className="mt-12 text-left max-w-md mx-auto">
      <p className="text-lg font-semibold text-soft-sand">Contact for investment enquiries:</p>
      <p className="text-base text-soft-sand">Moulaye Camara, CEO</p>
      <p className="text-base text-soft-sand">moulaye@baaraconsulting.com</p>
      <p className="text-base text-soft-sand">+27 72 661 18 60</p>
    </motion.div>
  </div>
);
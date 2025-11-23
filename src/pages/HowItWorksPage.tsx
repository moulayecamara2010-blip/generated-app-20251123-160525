import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  User,
  Users,
  Wallet,
  HeartPulse,
  Handshake,
  Hospital,
  Smartphone,
  Banknote,
  Building,
  Activity,
  MapPin,
  Scale,
  BellRing,
} from 'lucide-react';
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
export function HowItWorksPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <OverviewSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <IndividualsFamiliesSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <CommunitiesGroupsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <HealthcareProvidersSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <MobileOperatorsPaymentProcessorsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <GovernmentRegulatorsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <TheFlowSection />
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
        src="https://images.unsplash.com/photo-1581092644265-e41478201389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHw0fHdlc3QlMjBhZnJpY2ElMjBoZWFsdGhjYXJlfGVufDB8fHx8MTcxOTk0OTY0MHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="African community using mobile phones for healthcare"
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
        One platform, four stakeholder groups, limitless impact
      </motion.h1>
    </div>
  </section>
);
const OverviewSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The ecosystem that makes healthcare accessible
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact isn't just a platform—it's an entire ecosystem that connects everyone who plays a role in healthcare access. When all stakeholders work together seamlessly, barriers disappear. Here's how each group participates and benefits.
    </motion.p>
  </div>
);
const IndividualsFamiliesSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      Your healthcare, your control
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <User className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Getting started</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Simple USSD registration on any mobile phone</li>
              <li>Create healthcare savings wallet linked to mobile money</li>
              <li>Add family members as dependents (spouse, children, parents)</li>
              <li>Set up automatic or manual contributions</li>
            </ul>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">No paperwork. No bank account required. No minimum balance.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Wallet className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Building your healthcare fund</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Multiple ways to save:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Automatic debits: Daily, weekly, or monthly from mobile money</li>
              <li>Manual deposits: Add money anytime via mobile money</li>
              <li>Diaspora contributions: Receive from family abroad</li>
              <li>Employer contributions: If participating in programme</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Your money, your healthcare:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Funds can only be used for healthcare services</li>
              <li>Track balance anytime via USSD or app</li>
              <li>See transaction history</li>
              <li>Receive notifications for all activities</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <HeartPulse className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Accessing care</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">When you or your family needs healthcare:</h4>
            <ol className="list-decimal list-inside text-base text-charcoal/80 space-y-2">
              <li>Browse providers: See partner clinics, hospitals, pharmacies, labs near you</li>
              <li>Book appointment: Via USSD or app—instant confirmation</li>
              <li>Telemedicine option: Remote consultations for non-emergency care</li>
              <li>Visit provider: Show your I&I ID number</li>
              <li>Instant payment: Provider receives payment same day from your wallet</li>
              <li>Track spending: See exactly where money went</li>
            </ol>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">No cash needed. No waiting for reimbursement. No paperwork.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const CommunitiesGroupsSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      Collective power, shared protection
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 text-center">
      Women's savings groups, religious organisations, and community associations can create group accounts that leverage collective resources.
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Group features</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Registration & management:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Create group account with multiple administrators</li>
              <li>Add members with individual or shared wallets</li>
              <li>Set contribution schedules and amounts</li>
              <li>Establish governance rules (who can approve withdrawals, spending limits, etc.)</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Transparency & accountability:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Complete ledger of all contributions and withdrawals</li>
              <li>Real-time balance tracking</li>
              <li>Member notifications for all group transactions</li>
              <li>Annual reports for group meetings</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Collective decision-making:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2">
              <li>Approve emergency requests from members</li>
              <li>Allocate funds based on need</li>
              <li>Build collective healthcare reserve</li>
              <li>Strengthen community bonds through mutual support</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Handshake className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Success story: Tontin Manden</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80 italic">
              40 women in Conakry's Kaloum district pool 2,000 GNF weekly. In 8 months, they've:
            </p>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-2 mt-4">
              <li>Built a collective fund of 2.56 million GNF</li>
              <li>Covered emergency care for 7 families</li>
              <li>Reduced individual out-of-pocket spending by 60%</li>
              <li>Created a model other groups are replicating</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const HealthcareProvidersSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl text-center">
      Expand access, ensure payment, reduce admin
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90 text-center">
      Hospitals, clinics, pharmacies, and laboratories join our network to serve millions of potential patients whilst eliminating payment delays and administrative burden.
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Hospital className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Provider benefits</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Access to new patients:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Millions of previously unreachable patients</li>
              <li>People who couldn't afford care now can</li>
              <li>Consistent patient flow</li>
              <li>Expand your mission to underserved populations</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Guaranteed, instant payment:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Patients pay digitally from I&I wallets</li>
              <li>You receive payment same day</li>
              <li>No payment collection hassles</li>
              <li>No bad debt from unpaid bills</li>
              <li>Lower administrative costs</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Digital efficiency:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Reduced paperwork</li>
              <li>Electronic record-keeping</li>
              <li>Appointment management system</li>
              <li>Billing automation</li>
              <li>Data analytics on patient trends</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Activity className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">How it works for providers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-base text-charcoal/80 space-y-2">
              <li>Register as I&I partner provider (free)</li>
              <li>Create profile with services, prices, location, hours</li>
              <li>Receive bookings from platform users</li>
              <li>Verify patient I&I ID at appointment</li>
              <li>Deliver care as normal</li>
              <li>Submit invoice via platform</li>
              <li>Receive payment same day to your account</li>
            </ol>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">Simple. Efficient. Reliable.</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Current partners</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80">We're proud to work with leading healthcare providers across Guinea:</p>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1 mt-4">
              <li><span className="font-semibold">Clinique Manhwa</span> – Multi-speciality clinic, Conakry</li>
              <li><span className="font-semibold">CHU Ignace Deen</span> – National university hospital</li>
              <li><span className="font-semibold">Clinique Pasteur</span> – Primary care network</li>
              <li><span className="font-semibold">Manquepas Pharmacy</span> – Pharmacy chain</li>
              <li><span className="font-semibold">Petit-Lac Laboratory</span> – Diagnostic services</li>
            </ul>
            <Button asChild variant="link" className="mt-4 text-warm-coral hover:text-warm-coral/80">
              <Link to="/join-us">Become a Partner Provider <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const MobileOperatorsPaymentProcessorsSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      Enable the ecosystem, grow your business
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 text-center">
      Mobile operators and payment processors are essential infrastructure partners. Your networks and payment systems make healthcare access possible.
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Smartphone className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Partnership benefits</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">For mobile operators:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>New revenue stream from healthcare transactions</li>
              <li>Increased mobile money usage and adoption</li>
              <li>CSR impact: directly enable healthcare access</li>
              <li>Differentiation from competitors</li>
              <li>Access to 97% of population as potential customers</li>
              <li>Data insights (anonymous, aggregated) on health trends</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">For payment processors:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>High-volume, low-value transactions at scale</li>
              <li>Stable, recurring revenue</li>
              <li>Entry into impact investment sector</li>
              <li>Expansion into healthcare vertical</li>
              <li>Partnership with government health priorities</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Banknote className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">How integration works</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Seamless, secure, compliant:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>API integration with existing mobile money infrastructure</li>
              <li>Healthcare transactions flagged with unique codes</li>
              <li>Real-time transaction processing</li>
              <li>Automated reconciliation and settlement</li>
              <li>Full regulatory compliance</li>
              <li>Bank-level security standards</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Our current partners:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li><span className="font-semibold">Orange Guinea</span> – Leading mobile operator</li>
              <li><span className="font-semibold">MTN (Areeba)</span> – National coverage</li>
              <li><span className="font-semibold">ONAFRIQ</span> – Pan-African fintech platform</li>
              <li><span className="font-semibold">9series</span> – Technology infrastructure partner</li>
            </ul>
            <Button asChild variant="link" className="mt-4 text-warm-coral hover:text-warm-coral/80">
              <Link to="/join-us">Explore Partnership Opportunities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const GovernmentRegulatorsSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      Achieve policy goals, protect public health
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80 text-center">
      Inclusion & Impact directly advances national healthcare strategies whilst providing invaluable data for disease surveillance and outbreak prevention.
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Scale className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Policy alignment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Our platform helps achieve:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Universal health coverage goals</li>
              <li>Financial inclusion targets</li>
              <li>Digital economy development</li>
              <li>SDG 3 (Health & Well-being) commitments</li>
              <li>Poverty reduction strategies</li>
              <li>Gender equality initiatives (majority of users are women)</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <BellRing className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Early warning system</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Outbreak detection & response:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Real-time monitoring of healthcare-seeking behaviour</li>
              <li>Pattern recognition for unusual symptom clusters</li>
              <li>Geographic mapping of potential outbreaks</li>
              <li>Immediate alerts to Ministry of Health</li>
              <li>Faster response time = lives saved</li>
            </ul>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">
              The Ebola lesson: Early detection could have prevented thousands of deaths. With I&I's data, health authorities can see concerning patterns days or weeks before traditional surveillance methods.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Building className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Current government partnerships</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-charcoal/80">We collaborate with:</p>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1 mt-4">
              <li><span className="font-semibold">Ministry of Health & Public Hygiene</span> – Policy alignment, provider standards</li>
              <li><span className="font-semibold">Ministry of Posts, Telecommunications & Digital Economy</span> – Infrastructure, regulation</li>
              <li><span className="font-semibold">Ministry of Economy & Finance</span> – Financial inclusion, economic impact</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Data governance:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>All health data is anonymous and aggregated</li>
              <li>Strict privacy protections</li>
              <li>Compliant with national data protection laws</li>
              <li>User consent for data sharing</li>
              <li>Transparent data usage policies</li>
            </ul>
            <Button asChild variant="link" className="mt-4 text-warm-coral hover:text-warm-coral/80">
              <Link to="/contact">Government Partnership Enquiries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
);
const TheFlowSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      How it all connects
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      The complete ecosystem in action:
    </motion.p>
    <motion.ol variants={staggerContainer} className="mt-8 max-w-4xl mx-auto text-lg text-soft-sand/90 list-decimal list-inside space-y-3 text-left">
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">User registers</span> → Platform creates healthcare wallet → Links to mobile money
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">User saves money</span> → Mobile operator processes transaction → Funds locked for healthcare
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">Diaspora contributes</span> → International payment → Converted and deposited to family wallet
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">User needs care</span> → Platform shows nearby providers → Books appointment
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">User visits provider</span> → Shows I&I ID → Receives care
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">Provider submits invoice</span> → Platform verifies → Funds transferred same day
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">Data anonymised</span> → Aggregated for outbreak monitoring → Government receives intelligence
      </motion.li>
      <motion.li variants={fadeIn}>
        <span className="font-bold text-warm-coral">Cycle continues</span> → User keeps saving → Community stays protected
      </motion.li>
    </motion.ol>
    <motion.p variants={fadeIn} className="mt-8 max-w-3xl mx-auto text-lg text-soft-sand/90 italic font-bold">
      Everyone participates. Everyone benefits. Healthcare becomes accessible.
    </motion.p>
  </div>
);
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Join the ecosystem
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Whether you're a healthcare provider, mobile operator, payment processor, government agency, or impact investor—there's a role for you in transforming healthcare access.
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/join-us">Individuals: Get Early Access</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/join-us">Providers: Partner with Us</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <Link to="/join-us">Investors: Fund the Movement</Link>
      </Button>
      <Button asChild size="lg" variant="ghost" className="text-charcoal hover:bg-gray-200 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </motion.div>
  </div>
);
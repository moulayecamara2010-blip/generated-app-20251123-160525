import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  DollarSign,
  Handshake,
  Hospital,
  Users,
  Globe,
  Mail,
  Briefcase,
  Smartphone,
  Building,
  HeartHandshake,
  MessageSquareText,
  ClipboardList,
  UserPlus,
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
export function JoinUsPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SectionWrapper className="bg-white">
        <IntroductionSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <ForImpactInvestorsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <ForStrategicPartnersSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-teal text-soft-sand">
        <ForHealthcareProvidersSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <ForCommunityGroupsSection />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <ForDiasporaSupportersSection />
      </SectionWrapper>
      <SectionWrapper className="bg-deep-blue text-soft-sand">
        <EarlyAccessSection />
      </SectionWrapper>
      <SectionWrapper className="bg-soft-sand">
        <ContactForPartnershipsSection />
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
        src="https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjl8MHwxfHNlYXJjaHwxfHdlc3QlMjBhZnJpY2ElMjBjb21tdW5pdHklMjBlbmdhZ2VtZW50fGVufDB8fHx8MTcxOTk1MDYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Diverse group of people collaborating"
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
        There's a role for everyone in transforming healthcare access
      </motion.h1>
    </div>
  </section>
);
const IntroductionSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      How will you contribute to the movement?
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Inclusion & Impact succeeds when diverse stakeholders come together around a shared vision: healthcare as a human right, accessible to all, regardless of income or status.
    </motion.p>
    <motion.p variants={fadeIn} className="mt-4 max-w-3xl mx-auto text-lg text-charcoal/80 font-bold">
      Choose your pathway:
    </motion.p>
  </div>
);
const ForImpactInvestorsSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      For Impact Investors
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Why invest in Inclusion & Impact</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Financial opportunity:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>182% projected IRR, 82.32% EBITDA margin by Year 3</li>
              <li>Strong unit economics and scalability, multiple revenue streams</li>
              <li>Clear path to profitability, attractive exit opportunities</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Impact opportunity:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>2.625 million people served by Year 5, 150,000+ families protected from poverty</li>
              <li>Direct contribution to UN SDGs 1, 3, 5, 8, 10</li>
              <li>Measurable health and economic outcomes, outbreak prevention</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Investment opportunity:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Current ask: $50,000 for MVP development (15% equity, negotiable)</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Briefcase className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">What we offer investors</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Financial:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Equity in high-growth impact venture, Board observer rights</li>
              <li>Regular financial reporting, priority access to future rounds</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Impact:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Comprehensive impact measurement and reporting</li>
              <li>Regular updates on users served, outcomes achieved, site visits</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Due diligence support:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Full business plan and financial models, impact assessment</li>
              <li>Partnership agreements, technology architecture documentation</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Schedule Investor Call <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
      </Button>
      <Button asChild size="lg" variant="outline" className="ml-4 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <a href="mailto:olivier@baaraconsulting.com?subject=Request%20for%20Due%20Diligence%20Pack">Request Due Diligence Pack</a>
      </Button>
    </motion.div>
  </div>
);
const ForStrategicPartnersSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      For Strategic Partners
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Building className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Development organisations & philanthropic partners</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">How we can collaborate:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Grant funding, technical assistance, geographic expansion</li>
              <li>Research partnerships, advocacy</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">What you gain:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Partnership with innovative African-led venture, SDG achievement</li>
              <li>Scalable model, research and learning opportunities</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <Smartphone className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Mobile operators & payment processors</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Partnership opportunities:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Platform integration, co-marketing, data-sharing agreements</li>
              <li>CSR alignment, revenue-sharing models</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Benefits for you:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>New revenue stream, increased mobile money adoption</li>
              <li>CSR impact, customer loyalty, government relations enhancement</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Briefcase className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Corporate partners</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">How businesses can support:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Employee healthcare programmes, CSR sponsorship</li>
              <li>Matching programmes, technology support, marketing collaboration</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Benefits:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Meaningful CSR, employee welfare, brand association</li>
              <li>Marketing and PR opportunities, tax benefits</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Explore Development Partnerships <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
      </Button>
    </motion.div>
  </div>
);
const ForHealthcareProvidersSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl text-center">
      For Healthcare Providers
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Hospital className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Why join Inclusion & Impact</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Access to new patients:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Millions of previously unreachable patients, consistent patient flow</li>
              <li>Expand your mission to underserved populations</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Guaranteed payment:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Instant digital payment, same-day settlement, no collection hassles</li>
              <li>Eliminate bad debt</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Operational efficiency:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Reduced paperwork, digital appointment booking, electronic invoicing</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <ClipboardList className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">How to join</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Eligibility:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Licensed healthcare facility in Guinea (or expansion countries)</li>
              <li>Hospitals, clinics, pharmacies, laboratories, diagnostic centres</li>
              <li>Commitment to quality care and patient dignity</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Process:</h4>
            <ul className="list-decimal list-inside text-base text-charcoal/80 space-y-1">
              <li>Submit provider application, verification of licenses</li>
              <li>Site visit, agreement signing, platform training</li>
            </ul>
            <p className="mt-4 text-sm text-charcoal/60 italic font-bold">No fees to join. No ongoing membership costs.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <a href="mailto:abdoulaye@baaraconsulting.com">Apply as Healthcare Provider <ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
    </motion.div>
  </div>
);
const ForCommunityGroupsSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      For Community Groups & Organisations
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Women's groups, religious organisations, associations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">How your group can use I&I:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Create collective healthcare savings accounts, pool resources</li>
              <li>Manage funds transparently, allocate healthcare support</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">We support:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Women's savings groups (Susu, Tontine), religious congregations</li>
              <li>Trade associations, cooperatives, community-based organisations</li>
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
              <CardTitle className="text-xl font-bold text-deep-blue">Benefits</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Digital tools for group management, transparency and accountability</li>
              <li>Reduced administrative burden, measurable impact on members' health</li>
              <li>Strengthened community bonds</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <a href="mailto:marguerite@baaraconsulting.com">Register Your Group <ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
    </motion.div>
  </div>
);
const ForDiasporaSupportersSection = () => (
  <div className="text-left">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl text-center">
      For Diaspora & Supporters
    </motion.h2>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-blue text-white">
                <Globe className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Diaspora members</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">How you can help:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Contribute to family healthcare, sponsor community members</li>
              <li>Spread the word, advocate</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Coming soon:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Diaspora contribution platform, family account management</li>
              <li>Impact reporting on your contributions, community sponsorship programmes</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Supporters & advocates</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-deep-teal mb-2">Spread awareness:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Share our story on social media, forward to friends</li>
              <li>Write about us, present at conferences</li>
            </ul>
            <h4 className="font-semibold text-deep-teal mt-4 mb-2">Provide expertise:</h4>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Volunteer consulting, connect us to your networks</li>
              <li>Offer mentorship, share market insights</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Get Early Diaspora Access <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
      </Button>
    </motion.div>
  </div>
);
const EarlyAccessSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold sm:text-4xl md:text-5xl">
      Be among the first users
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-soft-sand/90">
      We're building a waiting list for early access when we launch in Conakry.
    </motion.p>
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warm-coral text-white">
                <UserPlus className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Sign up to:</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Be among first users when platform launches</li>
              <li>Participate in beta testing (limited slots)</li>
              <li>Receive launch updates and health tips</li>
              <li>Get exclusive early-user benefits</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-soft-sand text-charcoal">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue">Priority access for:</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-base text-charcoal/80 space-y-1">
              <li>Women's groups and community organisations</li>
              <li>Artisans, taxi drivers, and informal sector workers</li>
              <li>Civil servants and diaspora members</li>
              <li>Early supporters and advocates</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Join the Waiting List <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
      </Button>
    </motion.div>
  </div>
);
const ContactForPartnershipsSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      Contact for Partnerships
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Whatever your interest in Inclusion & Impact—investment, partnership, support, or simply learning more—we want to hear from you.
    </motion.p>
    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "General enquiries", email: "info@baaraconsulting.com", icon: Mail },
        { title: "Investment & funding", email: "olivier@baaraconsulting.com", icon: DollarSign },
        { title: "Partnerships (healthcare, mobile, tech)", email: "abdoulaye@baaraconsulting.com", icon: Handshake },
        { title: "Community & diaspora programmes", email: "marguerite@baaraconsulting.com", icon: Users },
        { title: "Media & press", email: "press@baaraconsulting.com", icon: MessageSquareText },
      ].map((item, index) => (
        <motion.div key={index} variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-deep-teal text-white mx-auto">
                <item.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-deep-blue mt-4">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${item.email}`} className="text-warm-coral hover:text-warm-coral/80 transition-colors font-semibold">
                {item.email}
              </a>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <motion.div variants={fadeIn} className="text-center mt-10">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/contact">Contact Form <ArrowRight className="ml-2 h-5 w-5" /></MotionLink>
      </Button>
    </motion.div>
  </div>
);
const CtaSection = () => (
  <div className="text-center">
    <motion.h2 variants={fadeIn} className="text-3xl font-display font-bold text-deep-blue sm:text-4xl md:text-5xl">
      The movement starts with you
    </motion.h2>
    <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg text-charcoal/80">
      Every investment, every partnership, every contribution, every share brings us closer to a world where healthcare is a right, not a privilege. 200 million people are waiting. What will you do?
    </motion.p>
    <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg" className="bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/investment">Invest Now</MotionLink>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        <MotionLink to="/team-partners">Become a Partner</MotionLink>
      </Button>
      <Button asChild size="lg" variant="ghost" className="text-charcoal hover:bg-gray-200 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
        <MotionLink to="/our-story">Share Our Story</MotionLink>
      </Button>
    </motion.div>
  </div>
);
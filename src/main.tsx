import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { OurStoryPage } from '@/pages/OurStoryPage';
import { ProblemPage } from '@/pages/ProblemPage';
import { SolutionPage } from '@/pages/SolutionPage';
import { HowItWorksPage } from '@/pages/HowItWorksPage';
import { ImpactMarketPage } from '@/pages/ImpactMarketPage';
import { InvestmentPage } from '@/pages/InvestmentPage';
import { TeamPartnersPage } from '@/pages/TeamPartnersPage';
import { JoinUsPage } from '@/pages/JoinUsPage';
import { ContactPage } from '@/pages/ContactPage';
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/our-story", element: <OurStoryPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/the-problem", element: <ProblemPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/our-solution", element: <SolutionPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/how-it-works", element: <HowItWorksPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/impact-market", element: <ImpactMarketPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/investment", element: <InvestmentPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/team-partners", element: <TeamPartnersPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/join-us", element: <JoinUsPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/contact", element: <ContactPage />, errorElement: <RouteErrorBoundary /> },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MetricsSection } from '@/components/MetricsSection';
import { HumanTouchSection } from '@/components/HumanTouchSection';
import { PracticeAreas } from '@/components/PracticeAreas';
import { InteractiveAssessment } from '@/components/InteractiveAssessment';
import { LawyersSection } from '@/components/LawyersSection';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { OfficeLocation } from '@/components/OfficeLocation';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-black">
      {/* Toast provider */}
      <Toaster position="top-right" richColors />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MetricsSection />
        <HumanTouchSection />
        <PracticeAreas />
        <InteractiveAssessment />
        <LawyersSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <OfficeLocation />
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating High-Converting WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
}

export default App;

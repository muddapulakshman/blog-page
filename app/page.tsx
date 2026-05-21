import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturedBlogs } from '@/components/FeaturedBlogs';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedBlogs />
      <ProjectsSection />
      <SkillsSection />
      <NewsletterSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

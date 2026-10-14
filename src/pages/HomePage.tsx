import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'
import { Ticker } from '../components/Ticker'

export function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Ticker />
      <About />
      <Ticker />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

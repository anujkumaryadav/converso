import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1 className="text-5xl bold ">Dashboard</h1>
        <section className='home-section'>
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Topic: Neural Network of the Brain"
                subject="Science"
                duration={45}
                color="#ffda6e"
            />

            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Topic: Derivatives & Integrals"
                subject="Maths"
                duration={30}
                color="#e5d0ff"
            />

            <CompanionCard
                id="789"
                name="Verba the Vocabulary Builder"
                topic="Topic: English Literature "
                subject="Language"
                duration={30}
                color="#BDE7FF"
            />

        </section>
        <section className='home-section'>
            <CompanionList/>
            <CTA/>
        </section>
    </main>
  )
}

export default Page
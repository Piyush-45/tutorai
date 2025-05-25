import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";
// import CompanionsList from "@/components/CompanionsList";
// import CTA from "@/components/CTA";
// import {recentSessions} from "@/constants";
// import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
// import {getSubjectColor} from "@/lib/utils";

const Page = async () => {

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard

        />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          classNames="w-2/3 max-lg:w-full"
          companions={recentSessions}
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page
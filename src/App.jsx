import Header from "./components/Header";
import TeachingSectinon from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";
import IntroSection from "./components/introSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { Fragment, useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <Fragment>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <Fragment>
            <TeachingSectinon />
            <ButtonSection />
          </Fragment>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}
      </main>
    </Fragment>
  );
}

import React from "react";
import Home from "../../Components/AllCards/AllCards";
import ForShowcase from "../../Components/ForShowcase/ForShowcase";
import ForShowcase2 from "../../Components/ForShowcase2/ForShowcase2";
import Section1 from "../../Components/Section1/Section1";
import Apply from "../../Components/Apply/Apply";
import Logos from "../../Components/Logos/Logos";
export default function HomePage() {
  return (
    <div>
      <ForShowcase />
      <Home />
      <ForShowcase2 />
      <Section1 />
      <Apply />
      <Logos/>
    </div>
  );
}

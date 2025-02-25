import { useState, useEffect } from "react"



import { Navbar } from "./components/navbar"
import { Home } from "./pages/Home";

import { SelectedPage } from "./shared/types";
import { Benefits } from "./pages/Benefits";
import { OurClasses } from "./pages/OurClasses";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/Footer";

export function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  function handleScroll() {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    } 
    if(window.scrollY !== 0) setIsTopOfPage(false)
  }

  useEffect(() => {
    document.body.style.overflowX = "hidden"
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits 
        setSelectedPage={setSelectedPage}
      />
      <OurClasses 
        setSelectedPage={setSelectedPage}
      />
      <ContactUs 
        setSelectedPage={setSelectedPage}
      />
      <Footer />
    </div>
  )
}


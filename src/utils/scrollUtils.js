export const scrollToSection = (sectionId, offset = 55) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const position = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: position, behavior: "smooth" });
  }
};
export const handleScroll = (setActiveSection) => {
    return () =>{
    const sections = ['about','career', 'skills','description', 'projects',  'contact'];
    let current = '';

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section;
        }
      }
    }

    setActiveSection(current);
}
  };
  export const handleFirstScroll = (setIsVisible,isVisible,isButton = false) => {
    return (e) => {
      console.log("asd")
      if ((e.wheelDeltaY  < 0  || isButton) && isVisible) {
        setTimeout(() => {
          scrollToSection('about',100);
        }, 100);
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }
    };
  };
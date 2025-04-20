import React from "react";
import Hero from "../../components/website/hero/Hero";
import image from "../../assets/hero.jpg";

const AboutUs = () => {
  return (
    <div className="bg text__color">
      <Hero
        title="Introduction"
        text={
          "VIDYA BHUSHAN is a smart and intuitive Library Management System tailored for the academic excellence of Govt. Graduate College, Jhelum. It simplifies library access by digitizing the entire book borrowing, returning, and cataloging process — making knowledge just a click away. With VIDYA BHUSHAN, students, teachers, and administrators can efficiently explore and manage a diverse collection of books, resources, and academic material — all under one powerful platform."
        }
        image={image}
        reverse={true}
      />

    
    </div>
  );
};

export default AboutUs;

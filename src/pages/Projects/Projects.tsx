import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectsData } from "./ProjectsData";
import "./Projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projects-section">
      <SectionHeader
        style={{ paddingBottom: "84px" }}
        title="our"
        description="Projects"
        colorTitle="var(--color-white)"
        colorDescription="var(--color-accent-green)"
        id="Projects"
      />
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        loop={true}
        scrollbar={{
          hide: true,
          dragClass: "projects-scroll",
          horizontalClass: "projects-scroll-wrapper",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Scrollbar, Navigation]}
        grabCursor
      >
        {ProjectsData.map((project, i) => (
          <SwiperSlide key={project.title}>
            <ProjectCard
              key={project.title}
              description={project.description}
              id={`/0${i + 1}`}
              title={project.title}
              image={project.image}
              url={project.url}
              color={project.color || "#23DB87"}
              active={i === activeIndex}
              disabled={project.disabled}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;

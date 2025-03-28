import React, { useState, useEffect, useRef } from "react";
import "./FreeHome.css";

export default function FreeHome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const phoneRef = useRef(null); // Reference for the phone frame
  const linksRef = useRef(null); // Reference for the links

  const images = [
    { src: "https://picsum.photos/id/24/720/1280", caption: "Likes to read" },
    {
      src: "https://picsum.photos/id/167/720/1280",
      caption: "Enjoys the Fall",
    },
    {
      src: "https://picsum.photos/id/7/720/1280",
      caption: "Information Network",
    },
    {
      src: "https://picsum.photos/id/209/720/1280",
      caption: "Explorer at heart",
    },
  ];

  // Auto scroll the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Intersection Observer to fade in phone frame when it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          phoneRef.current.classList.add("visible");
        }
      },
      {
        threshold: 0.5, // Fade in when 50% of the phone is visible
      }
    );

    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => {
      if (phoneRef.current) {
        observer.unobserve(phoneRef.current);
      }
    };
  }, []);

  // Intersection Observer to fade in the links when they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          linksRef.current.classList.add("visible");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (linksRef.current) {
      observer.observe(linksRef.current);
    }

    return () => {
      if (linksRef.current) {
        observer.unobserve(linksRef.current);
      }
    };
  }, []);

  return (
    <div className="freehome">
      <header className="free-heading">
        <h1>Free</h1>
        <br />
        <h2>a minimalist</h2>
      </header>
      <div className="freehome-container3">
        <div className="phone-frame3" ref={phoneRef}>
          <div className="phone-screen3">
            <div
              className="image-container3"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`, // Slide images from side
              }}
            >
              {images.map((image, index) => (
                <div className="image-slide3" key={index}>
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="phone-image3"
                  />
                  <p className="caption3">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="links" ref={linksRef}>
          <ul>
            <li>
              <a href="https://www.harpersbazaar.com/fashion/g62623361/best-fall-autumn-outfits/">
                Best Fall Outfits
              </a>
            </li>
            <li>
              <a href="https://www.wikihow.pet/Take-Care-of-a-Dog">
                How to Care for a Dog
              </a>
            </li>
            <li>
              <a href="https://www.indeed.com/career-advice/career-development/internet-search-tips">
                Internet Search Tips
              </a>
            </li>
            <li>
              <a href="https://iamautodidact.com/how-to-teach-yourself-anything/">
                Teach Yourself Anything
              </a>
            </li>
            <li>
              <a href="https://money.usnews.com/careers/best-jobs/rankings/best-jobs-without-a-college-degree">
                Best Jobs Without a Degree
              </a>
            </li>
          </ul>
          <p className="free-explanation">
            Free is an extremely intelligent individual who has learned many
            skills in life and always does well on exams. However, they have
            chosen not to go to regular school and will not be going on to
            college, but rather seeking other job opportunities. Free is not
            Jude's or Kira's relative, but they attempt to fit in and take care
            of the dogs they own. Free is usually extremely talkative and
            skilled at steering conversations in desired directions. Free excels
            at finding information quickly. Free likes simplicity, possessing
            very little by way of possessions and traveling a great deal.
          </p>
        </section>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
// src/pages/index.tsx
import React from "react";
import styles from "./HomeView.module.css";
import Image from "next/image";
import Link from "next/link";
import CarouselView from "../CarouselView";
import TweetEmbed from "react-tweet-embed";

type HomeViewProps = {};

const HomeView = ({}: HomeViewProps) => {
  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section id="home" style={{ padding: "0" }}>
          <CarouselView />
        </section>

        {/* About Us Section */}
        <section id="about" className={styles.section}>
          <div>
            <h2>About Us</h2>
            <div className={styles.about}>
              <div>
                <Link href="/gallery">
                  <Image
                    src="/dpSS.png"
                    alt="Shashank Shekhar - BJP Leader Begusarai, Bihar"
                    height="300"
                    width="300"
                    className={styles.aboutImg}
                  />
                </Link>
              </div>
              <div>
                <p>
                  आपका भाजपा युवा मोर्चा बिहार के साथ नेतृत्व में एक दृढ़
                  साझेदारी का स्वागत है, शशांक शेखर जी। हमारे धारावाहिकता के
                  केंद्र में एकता और विकास के निष्ठावान संकल्प का होना है। भाजपा
                  बिहार के प्रेरणास्त्रोत से, हम धनी भारत की ओर एक परिवर्तनकारी
                  यात्रा पर निकलते हैं। "एकता से विकास: भाजपा का भारतीय समृद्धि
                  का संकल्प" और "नया भारत निर्माण: भाजपा के साथ प्रगति की दिशा
                  में शामिल हों" जैसे नारे के साथ, हम हर भारतीय को सशक्त बनाने
                  के लिए वादा करते हैं।
                </p>
                <p>
                  हमारा समर्पण हर नागरिक के सशक्तिकरण तक बढ़ता है, जैसा कि हम
                  भाजपा के विकास की योजना के प्रति पूर्ण जोर रखते हैं। हमारे
                  राष्ट्र की सुरक्षा सुनिश्चित करने से लेकर नवाचार और आर्थिक
                  समृद्धि को बढ़ावा देने तक, भाजपा सकारात्मक भविष्य की ओर अग्रसर
                  होती है। हम एकता में विविधता को समर्थित करते हुए भारत की
                  समृद्ध राष्ट्रीय सांस्कृतिक विरासत का सम्मान करते हैं, और
                  हमारे कार्यक्रम वादों और परिणामों पर निरंतर हैं।
                </p>
                <p>
                  ईमानदारी और नैतिक शासन के सिद्धांतों के मार्गदर्शन में, भाजपा
                  राष्ट्रीय सुरक्षा में मजबूत स्थान को सुनिश्चित करती है, सभी के
                  लिए एक सुरक्षित और समृद्ध भविष्य की ओर। हमारा संकल्प महिलाओं
                  के सशक्तिकरण के साथ है, उन्हें एक मजबूत भारत की रीढ़ के रूप
                  में पहचानते हुए।
                </p>
                <p>
                  🚀🇮🇳{" "}
                  <span>
                    <Link href="https://www.facebook.com/share/RdDZtX7MycMhi5RS/?mibextid=qi2Omg">
                      #BJPBihar
                    </Link>
                  </span>{" "}
                  <span>
                    <Link href="https://www.facebook.com/share/VnoXFMY7tD2qyypB/?mibextid=qi2Omg">
                      #BJYM{" "}
                    </Link>
                  </span>
                  #बिहार #begusarai
                </p>
                {/* More about the organization */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={`${styles.section} ${styles.testimonialSection} `}>
          <div className={`${styles.tetimonial}`}>
            <h1>
              हम समाज में सकारात्मक परिवर्तन और प्रगति को बढ़ावा देने के लिए
              पूर्ण जोश और उत्साह से समर्पित हैं। आइए, हम मिलकर एक बेहतर, मजबूत
              भारत के लिए काम करें!
            </h1>
            <div>
              <TweetEmbed tweetId="1106845118479233024" />
            </div>
          </div>
        </section>
        {/* Contact Us Section */}
        <section
          id="contact"
          className={`${styles.section} ${styles.contactSection}`}
        >
          <div className={styles.contactUs}>
            <div>
              <h2>Contact Us</h2>
              <p> पूछताछ के लिए, कृपया हमसे संपर्क करें:</p>
            </div>

            <div>
              <address>
                <Link href="mailto:ss@shashanknk.in">
                  Email: ss@shashanknk.in
                </Link>
                <br />
                <Link href="tel:8871993468">Phone: 8871993468</Link>
                <br />
                <br />
                Address: Ward-15, Pipra, Professor Colony, Begusarai, Bihar -
                851117
              </address>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeView;

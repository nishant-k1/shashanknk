/* eslint-disable react/no-unescaped-entities */
// src/pages/index.tsx
import React from "react";
import styles from "./HomeView.module.css";
import Image from "next/image";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

type HomeViewProps = {};

const HomeView = ({}: HomeViewProps) => {
  return (
    <main className={styles.main}>
      <Header />
      {/* Hero Section */}
      <section className={styles.section} id="home" style={{ padding: "0" }}>
        <div className={styles.hero}>
          <h1>
            हम समाज में सकारात्मक परिवर्तन और प्रगति को बढ़ावा देने के लिए पूर्ण
            जोश और उत्साह से समर्पित हैं। आइए, हम मिलकर एक बेहतर, मजबूत भारत के
            लिए काम करें!
          </h1>
          <Image
            src="/hero.svg"
            height="300"
            width="300"
            alt={""}
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.section}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <div>
            <Image
              src="/dpSS.jpeg"
              alt="Hero Image"
              height="150"
              width="150"
              style={{ borderRadius: "50% 50%", marginBottom: "2rem" }}
            />
          </div>
          <div>
            <p>
              आपका भारतीय जनता पार्टी (भाजपा) बिहार के साथ नेतृत्व में एक दृढ़
              साझेदारी का स्वागत है, शशांक शेखर जी। हमारे धारावाहिकता के केंद्र
              में एकता और विकास के निष्ठावान संकल्प का होना है। भाजपा बिहार के
              प्रेरणास्त्रोत से, हम धनी भारत की ओर एक परिवर्तनकारी यात्रा पर
              निकलते हैं। "एकता से विकास: भाजपा का भारतीय समृद्धि का संकल्प" और
              "नया भारत निर्माण: भाजपा के साथ प्रगति की दिशा में शामिल हों" जैसे
              नारे के साथ, हम हर भारतीय को सशक्त बनाने के लिए वादा करते हैं।
            </p>
          </div>
          <p>
            हमारा समर्पण हर नागरिक के सशक्तिकरण तक बढ़ता है, जैसा कि हम भाजपा के
            विकास की योजना के प्रति पूर्ण जोर रखते हैं। हमारे राष्ट्र की सुरक्षा
            सुनिश्चित करने से लेकर नवाचार और आर्थिक समृद्धि को बढ़ावा देने तक,
            भाजपा सकारात्मक भविष्य की ओर अग्रसर होती है। हम एकता में विविधता को
            समर्थित करते हुए भारत की समृद्ध राष्ट्रीय सांस्कृतिक विरासत का
            सम्मान करते हैं, और हमारे कार्यक्रम वादों और परिणामों पर निरंतर हैं।
          </p>
          <p>
            ईमानदारी और नैतिक शासन के सिद्धांतों के मार्गदर्शन में, भाजपा
            राष्ट्रीय सुरक्षा में मजबूत स्थान को सुनिश्चित करती है, सभी के लिए
            एक सुरक्षित और समृद्ध भविष्य की ओर। हमारा संकल्प महिलाओं के
            सशक्तिकरण के साथ है, उन्हें एक मजबूत भारत की रीढ़ के रूप में पहचानते
            हुए।
          </p>
          <p>🚀🇮🇳 #BJP #BJYM #बिहार #begusarai</p>
          {/* More about the organization */}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.contactUs}>
          <h2>Contact Us</h2>
          <br />
          <p>पूछताछ के लिए, कृपया हमसे संपर्क करें::</p>
          <br />
          <br />
          {/* Contact Information */}
          <address>
            Email: ss@shashanknk.in <br />
            Phone: 8871993468 <br />
            Address: Professor Colony, Begusarai, Bihar - 851101
          </address>
          <div>{/* Social media icons/links */}</div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default HomeView;

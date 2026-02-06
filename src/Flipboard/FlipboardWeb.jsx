import React, { useState } from "react";
import "./Flipcs.css";

export default function FlipboardWeb() {
  const data = {
    featured: [
      {
        id: 1,
        title: "2025: Year in Review",
        curatedBy: "Year In Review (UK)",
        description:
          "A curated look back at the most important stories, trends, and moments of 2025.",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 2,
        title: "Christmas Special",
        curatedBy: "Christmas Central",
        description:
          "Festive stories, decorations, traditions, and holiday inspirations.",
        image:
          "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 3,
        title: "10 for Today (UK Edition)",
        curatedBy: "Flipboard UK",
        description: "Top 10 trending news and stories handpicked for today.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 4,
        title: "Design & Creativity",
        curatedBy: "Creative Studio",
        description:
          "Inspiring designs, creative ideas, and modern visual trends.",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&h=900",
      },
    ],

    news: [
      {
        id: 1,
        title: "India's Tech Growth in 2026",
        author: "Tech Desk India",
        description:
          "India continues to lead global innovation with rapid growth in AI and startups.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-01",
      },
      {
        id: 2,
        title: "Global Markets Rally",
        author: "Economic Times",
        description:
          "Stock markets across the globe show strong recovery signals.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-02",
      },
      {
        id: 3,
        title: "AI Changing Daily Life",
        author: "Future Now",
        description:
          "Artificial Intelligence is becoming part of everyday human activities.",
        image:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-02",
      },
      {
        id: 4,
        title: "Space Missions Break Records",
        author: "Science World",
        description: "New space missions achieve milestones never seen before.",
        image:
          "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-03",
      },
      {
        id: 5,
        title: "Health & Fitness Trends",
        author: "Wellness Daily",
        description:
          "Simple habits that are redefining modern healthy lifestyles.",
        image:
          "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-03",
      },
      {
        id: 6,
        title: "Climate Change Updates",
        author: "Earth Watch",
        description: "New reports highlight urgent environmental challenges.",
        image:
          "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishedAt: "2026-01-04",
      },
      {
        id: 7,
        title: "Education Goes Digital",
        author: "Learning Hub",
        description: "Online education platforms reshape traditional learning.",
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-04",
      },
      {
        id: 8,
        title: "Sports Highlights of the Week",
        author: "Sports Network",
        description:
          "Top performances and thrilling moments from sports events.",
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-05",
      },
      {
        id: 9,
        title: "Startup Success Stories",
        author: "Business Insider",
        description: "Young entrepreneurs making big impacts worldwide.",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-05",
      },
      {
        id: 10,
        title: "Entertainment Weekly Buzz",
        author: "Showbiz Today",
        description: "Latest movies, series, and celebrity news.",
        image:
          "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-06",
      },
      {
        id: 11,
        title: "Travel Destinations 2026",
        author: "Travel Guide",
        description: "Top destinations you should explore this year.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-06",
      },
      {
        id: 12,
        title: "Future of Electric Vehicles",
        author: "Auto World",
        description:
          "Electric vehicles are shaping the future of transportation.",
        image:
          "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&h=900",
        publishedAt: "2026-01-07",
      },
    ],

    business: [
      {
        id: 1,
        title: "Indian Startups Attract Global Investors",
        curatedBy: "Business Desk India",
        description:
          "Indian startups continue to draw major global investments across fintech and AI sectors.",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 2,
        title: "Stock Market Hits New Highs",
        curatedBy: "Market Watch",
        description:
          "Benchmark indices reach record levels driven by strong corporate earnings.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 3,
        title: "Small Businesses Go Digital",
        curatedBy: "SME Times",
        description:
          "Digital tools help small businesses scale faster and reach wider audiences.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 4,
        title: "E-commerce Growth in Tier-2 Cities",
        curatedBy: "Retail Insights",
        description:
          "Online shopping sees massive growth beyond metro cities in India.",
        image:
          "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        title: "Future of Work: Hybrid Model",
        curatedBy: "Corporate World",
        description:
          "Companies adopt hybrid work models to improve productivity and work-life balance.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 6,
        title: "Rise of Electric Mobility Industry",
        curatedBy: "Auto Business",
        description:
          "Electric vehicles and charging startups reshape the auto sector.",
        image:
          "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 7,
        title: "Banking Sector Shows Strong Recovery",
        curatedBy: "Finance Today",
        description:
          "Banks report improved asset quality and steady credit growth.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 8,
        title: "Global Trade Outlook Improves",
        curatedBy: "World Business",
        description:
          "Trade relations stabilize as supply chains adapt to new challenges.",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=900",
      },
    ],

    tech: [
      {
        id: 1,
        title: "AI Assistants Transform Daily Work",
        curatedBy: "Tech Today",
        description:
          "AI-powered assistants are improving productivity across industries.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 2,
        title: "Quantum Computing Breakthrough",
        curatedBy: "Future Tech",
        description:
          "Researchers achieve major milestones in quantum computing stability.",
        image:
          "https://images.unsplash.com/photo-1681908571122-97f349e1ace0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "5G Expansion Accelerates Worldwide",
        curatedBy: "Network World",
        description:
          "High-speed 5G networks roll out rapidly across urban and rural areas.",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 4,
        title: "Cybersecurity Threats in 2026",
        curatedBy: "Security Weekly",
        description:
          "Organizations strengthen defenses against rising cyber attacks.",
        image:
          "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 5,
        title: "Electric Vehicles & Smart Tech",
        curatedBy: "Auto Tech",
        description:
          "Smart software and AI redefine electric vehicle experiences.",
        image:
          "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 6,
        title: "Metaverse Use Cases Evolve",
        curatedBy: "Digital Future",
        description:
          "Companies explore practical applications of the metaverse.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 7,
        title: "Green Tech Innovations Rise",
        curatedBy: "Eco Tech",
        description:
          "Sustainable technologies gain momentum across energy sectors.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 8,
        title: "Robotics in Healthcare",
        curatedBy: "Health Tech",
        description: "Robots assist doctors in surgeries and diagnostics.",
        image:
          "https://plus.unsplash.com/premium_photo-1698755473415-6a500677221c?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        title: "Blockchain Beyond Cryptocurrency",
        curatedBy: "Ledger World",
        description:
          "Blockchain finds use in supply chains and digital identity.",
        image:
          "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 10,
        title: "Cloud Computing Trends",
        curatedBy: "Cloud Central",
        description:
          "Hybrid and multi-cloud strategies dominate enterprise IT.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 11,
        title: "AR & VR in Education",
        curatedBy: "EdTech Hub",
        description:
          "Immersive technologies enhance digital learning experiences.",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 12,
        title: "Smart Cities Development",
        curatedBy: "Urban Tech",
        description: "IoT and AI power smarter infrastructure and governance.",
        image:
          "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 13,
        title: "AI Ethics & Regulation",
        curatedBy: "Policy Tech",
        description:
          "Governments debate ethical frameworks for artificial intelligence.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 14,
        title: "Wearable Technology Advances",
        curatedBy: "Gadget World",
        description: "Wearables offer deeper health tracking and insights.",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 15,
        title: "Open Source Shapes the Future",
        curatedBy: "Dev Community",
        description: "Open-source software drives innovation across platforms.",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=900",
      },
    ],

    sport: [
      {
        id: 1,
        title: "India Wins Thrilling T20 Series",
        curatedBy: "Cricket Today",
        description:
          "India clinches the T20 series with a last-over victory in a nail-biting match.",
        image:
          "https://images.unsplash.com/photo-1686196915380-2dd4ed3aca48?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Football World Cup Qualifiers Update",
        curatedBy: "Football Network",
        description:
          "Top teams strengthen their positions in the World Cup qualification race.",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 3,
        title: "Olympic Athletes Break Records",
        curatedBy: "Olympic Channel",
        description:
          "Athletes set new records across multiple sporting disciplines.",
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 4,
        title: "Kabaddi League Gains Popularity",
        curatedBy: "Sports India",
        description:
          "Kabaddi leagues see growing fan engagement and viewership.",
        image:
          "https://images.unsplash.com/photo-1665413811870-5b29a250f64a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        title: "Tennis Grand Slam Highlights",
        curatedBy: "Tennis World",
        description: "Top players shine in thrilling Grand Slam matches.",
        image:
          "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 6,
        title: "Formula 1 Season Preview",
        curatedBy: "Motorsport Hub",
        description:
          "Teams and drivers prepare for an action-packed Formula 1 season.",
        image:
          "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 7,
        title: "Fitness & Training Trends",
        curatedBy: "Sports Science",
        description:
          "Modern training techniques help athletes improve performance and recovery.",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&h=900",
      },
    ],

    photos: [
      {
        id: 1,
        title: "Urban Night Lights",
        curatedBy: "Photo Journal",
        description:
          "A stunning capture of city life glowing under neon lights.",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 2,
        title: "Mountains at Dawn",
        curatedBy: "Nature Lens",
        description:
          "Early morning light painting the mountains in soft colors.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 3,
        title: "Street Life Stories",
        curatedBy: "Urban Stories",
        description: "Raw and real moments from everyday street life.",
        image:
          "https://images.unsplash.com/photo-1679926299476-04bb94a7ad54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Minimal Architecture",
        curatedBy: "Design Focus",
        description: "Clean lines and modern architectural photography.",
        image:
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 5,
        title: "Wildlife in Motion",
        curatedBy: "Wild Frame",
        description: "Capturing animals in their natural habitat.",
        image:
          "https://images.unsplash.com/photo-1718087313467-c70276cdf4bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        title: "Portraits of Emotion",
        curatedBy: "Human Stories",
        description: "Powerful portraits expressing deep human emotions.",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 7,
        title: "Travel Diaries",
        curatedBy: "Wander Lens",
        description:
          "Beautiful moments captured from journeys around the world.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 8,
        title: "Creative Flatlays",
        curatedBy: "Studio Shots",
        description: "Artistic flatlay compositions with everyday objects.",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 9,
        title: "Black & White Classics",
        curatedBy: "Mono Frame",
        description:
          "Timeless black and white photography with strong contrast.",
        image:
          "https://plus.unsplash.com/premium_photo-1763642289147-cb95dc4782ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
      },
    ],

    arts: [
      {
        id: 1,
        title: "Modern Abstract Expressions",
        curatedBy: "Art Review",
        description: "Exploring bold colors and abstract forms in modern art.",
        image:
          "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 2,
        title: "Street Art Stories",
        curatedBy: "Urban Canvas",
        description:
          "Graffiti and murals that reflect urban culture and voices.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 3,
        title: "Classical Art Reimagined",
        curatedBy: "Gallery World",
        description: "How classical art styles inspire contemporary artists.",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&h=900",
      },
      {
        id: 4,
        title: "Digital Art Revolution",
        curatedBy: "Creative Tech",
        description:
          "Digital tools redefine creativity in the modern art world.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=900",
      },
    ],
  };

  const [data1, setdata] = useState("featured");

  return (
    <div>
      {/* header */}
      <div id="navdispay">
        {/* navbar section */}
        <div id="navbar">
          {/* name and logo */}
          <div id="logo_name">
            <img src="./Flipboard_logo.svg.png" alt="" />
            <p>Flipboard</p>
          </div>

          {/* search and signup button */}

          <div id="right_div">
            <a className="newletters_area" href="#">
              <p>newsletters</p>
            </a>
            <div id="search_area">
              <img src="./search_white.png" alt="" />
              <input type="text" placeholder="search flipboard"  id="main-input"/>
            </div>
            <button className="openApbtn">open in app</button>
            <button id="btn" >sign up</button>
            <a href="#" className="navLogin">
              <p>log in</p>
            </a>
          </div>
        </div>
        <div id="search_toogle">
          {/* input area of search bar */}
          <div id="search_area2">
            <input type="text" placeholder="search flipboard" />
            <button>cancel</button>
          </div>

          <p id="ins_area">
            Search all of Flipboard for topics, articles, magazines, and
            profiles.
          </p>

          <div id="option_area">
            <p>popular topics</p>
            <a href="#">#us news</a>
            <a href="#">#technology (uk)</a>
            <a href="#">#sports (uk)</a>
            <a href="#">#politics (uk)</a>
            <a href="#">#business (uk)</a>
            <a href="#">#celebrity (uk)</a>
            <a href="#">#brexit</a>
            <a href="#">#recipes</a>
            <a href="#">#science</a>
            <a href="#">#design </a>
            <a href="#">#english football</a>
            <a href="#">#weather </a>
            <a href="#">#potography (uk)</a>
            <a href="#">#computer science</a>
            <a href="#">#travel(uk) </a>
            <a href="#">#healthy eating</a>
            <a href="#">#healthy eating</a>
            <a href="#">#style (uk)</a>
          </div>
        </div>
      </div>

      {/* main section */}

      {/* hero section */}
      <div id="hero_section">
        <div id="title_signUp_area">
          <div id="title_area">
            <p>Get Informed</p>
            <p>Get Inspired</p>
            <p id="line">───────</p>
          </div>
          <p id="hero_dis">Stories Curated For You</p>
          <button>Sign up</button>
        </div>
      </div>

      {/* news variation options section*/}

      <div id="newsfeed_section">
        {/* menu area */}
        <div id="Newsoption_area">
          <button onClick={() => setdata("featured")}>featured</button>
          <button onClick={() => setdata("news")}>News</button>
          <button onClick={() => setdata("business")}>Business</button>
          <button onClick={() => setdata("tech")}>Tech & Science</button>
          <button onClick={() => setdata("sport")}>Sport</button>
          <button onClick={() => setdata("photos")}>Photos & Design</button>
          <button onClick={() => setdata("arts")}>Arts & Culture</button>
        </div>

        {/* card display area */}

        <div id="card_displayArea">
          {/* cards */}
          {data[data1].map((e) => (
            <div className="featured-card" key={e.id}>
              <div id="top_gap"></div>

              <div className="featured-image">
                <img src={e.image} alt="card image" />
              </div>

              <div className="featured-content">
                <span className="featured-badge">Magazine</span>

                <h2 className="featured-title">{e.title}</h2>

                <div className="featured-user">
                  <span className="user-icon"></span>
                  <span className="user-name">{e.curatedBy}</span>
                </div>

                <p className="featured-description">{e.description}</p>

                <div className="featuredLike_bar">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-message"></i>
                  <i className="fa-solid fa-plus"></i>
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="featured-card">
            <div id="top_gap"></div>
            <div className="featured-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1766341850770-9c7bd261ccb5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card image"
              />
            </div>

            <div className="featured-content">
              <span className="featured-badge">Magazine</span>

              <h2 className="featured-title">2025: Year in Review</h2>

              <div className="featured-user">
                <span className="user-icon"></span>
                <span className="user-name">Year In Review (UK)</span>
              </div>

              <p class="featured-description"></p>
              <div className="featuredLike_bar">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-message"></i>
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>
          </div> */}
        </div>

        {/* read more buttion  */}

        <div id="readmore_area">
          <button>Read more</button>
        </div>
      </div>

      <footer>
        <div id="menu_area_ft">
          <a href="#">log in</a>
          <a href="#">newsletters</a>
          <a href="#">about us</a>
          <a href="#">blog</a>
          <a href="#">tools</a>
          <a href="#">publishers</a>
          <a href="#">help</a>
          <a href="#">terms</a>
          <a href="#">privacy policy</a>
          <a href="#">do not sell my info</a>
          <a href="#">sitemap</a>
        </div>
        <a href="#">@ 2026 flipboard</a>
      </footer>
    </div>
  );
}

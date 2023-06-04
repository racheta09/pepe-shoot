import React from "react"
import Slider from "../components/slider/home-v2"
import dataSlider from "../assets/fake-data/data-slider"
import About from "../features/about/home-v2"
import dataAbout from "../assets/fake-data/data-about"
import RoadMap from "../features/roadmap/home-v2"
import dataRoadmap from "../assets/fake-data/data-roadmap"
import Project from "../features/project/home-v2"
import dataProject from "../assets/fake-data/dataProject"
import Work from "../features/work/home-v2"
import dataWork from "../assets/fake-data/data-work"
import dataTeam from "../assets/fake-data/data-team"
import Team from "../features/team/home-v2"
import Partner from "../features/partner"
import dataPartner from "../assets/fake-data/data-partner"
import Blog from "../features/blog/home-v2"
import dataBlog from "../assets/fake-data/data-blog"
import FAQ from "../features/faq/home-v2"
import dataFaq from "../assets/fake-data/data-faq"

function Home(props) {
    const tokenomics = {
        id: 1,
        time: "TOTAL SUPPLY - 599M",
        list: [
            {
                text: "PRESALE 20%",
            },
            {
                text: "INITIAL DEX LP 12% ",
            },
            {
                text: "P2E REWARDS 15%",
            },
            {
                text: "WALLET RESERVE 5%",
            },
            {
                text: "MARKETING 1%",
            },
            {
                text: "Airdrop 1%",
            },
            {
                text: "Collaborators 5%",
            },
            {
                text: "SCO 5%",
            },
            {
                text: "Exchange LP 5%",
            },
            {
                text: "Development 5%",
            },
            {
                text: "Ecosystem 5%",
            },
            {
                text: "Initial Burning 1%",
            },
            {
                text: "Locked Reserve 20%",
            },
        ],
        positon: "left",
        style: "normal",
    }

    return (
        <div className="home-2">
            <Slider data={dataSlider} />

            <About data={dataAbout} />

            <RoadMap data={dataRoadmap} />

            {/* <Project data={dataProject} /> */}
            <section className="tf-section tf-about" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div
                                className="content-about mobie-40"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <div className="tf-title st2">
                                    <p className="h8 sub-title">Token</p>
                                    <h4 className="title">Tokenomics</h4>
                                </div>
                                <h6>Buy Fee: 1% Sell Fee: 1%</h6>
                                <p>
                                    <div
                                        key={tokenomics.id}
                                        className={`rm-box ${tokenomics.positon}`}
                                        data-aos="zoom-in"
                                        data-aos-duration="1200"
                                    >
                                        <div className={`${tokenomics.style}`}>
                                            <h5>{tokenomics.time}</h5>
                                            <ul>
                                                {tokenomics.list.map(
                                                    (li, idx) => (
                                                        <li key={idx}>
                                                            {li.text}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div
                                className="wrap-tokenomics"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <img
                                    src={""}
                                    alt="tokenomics"
                                    width={"800px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Work data={dataWork} />

            <Team data={dataTeam} />

            <Partner data={dataPartner} />

            <Blog data={dataBlog} />

            <FAQ data={dataFaq} />
        </div>
    )
}

export default Home

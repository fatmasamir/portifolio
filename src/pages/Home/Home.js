/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import cvEngFatmaSamir from "../../assets/images/cvEngFatmaSamir.pdf";
import pro1 from "../../assets/images/pro1.png";
import pro3 from "../../assets/images/pro3.png";
import pro4 from "../../assets/images/pro4.png";
import pro2 from "../../assets/images/pro2.png";
import pro5 from "../../assets/images/pro5.png";
import pro6 from "../../assets/images/pro6.png";
import pro7 from "../../assets/images/pro7.png";
import pro8 from "../../assets/images/pro8.png";
import pro9 from "../../assets/images/pro9.png";
import pro10 from "../../assets/images/pro10.png";
import pro11 from "../../assets/images/pro11.png";
import html5 from "../../assets/images/html_5.webp";
import css3 from "../../assets/images/css_3.webp";
import js from "../../assets/images/js.png";
import vuejs from "../../assets/images/vuejs.png";
import vue3 from "../../assets/images/vue3.png";
import react from "../../assets/images/react.webp";
import redux from "../../assets/images/redux.svg";
import pinia from "../../assets/images/pinia.jfif";
import vuex from "../../assets/images/vuex.png";
import vit from "../../assets/images/vit.png";
import axios from "../../assets/images/axios.png";
import sass from "../../assets/images/sass.png";
import Nuxt from "../../assets/images/Nuxt_logo.png";
import whatsapp from "../../assets/images/whatsapp.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import smartphone from "../../assets/images/smartphone.svg";
import email from "../../assets/images/email.svg";
import github from "../../assets/images/github.svg";
import jquery from "../../assets/images/jquery.png";
import bootstrap from "../../assets/images/bootstrap.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const { t } = useTranslation();
  const options = {
    margin: 30,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 1,
      },
    },
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon="fa fa-eye" /> */}{" "}
      <header
        data-aos="fade-down-right"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        <Container>
          <div className="row">
            <div className="col-lg-6 content">
              <h2>{t("MessagerWellcom")} </h2>
              <h1>{t("Contener")}</h1>
              <p>{t("message_content")}</p>
              <a
                href={cvEngFatmaSamir}
                className="btn styling_btn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDownload} />
                Cv
              </a>
            </div>
          </div>
        </Container>
      </header>
      <section className="Projects mt-5">
        <Container>
          <div className="row">
            <div className="col-lg-12 content">
              <h2>{t("Projects")} </h2>
              <div className="borderline mb-4"></div>
              <div className="row">
                <div
                  className="col-lg-5 content"
                  id="Projects"
                  data-aos="fade-right"
                  data-aos-duration="2"
                  data-aos-delay="2"
                >
                  <OwlCarousel className="owl-theme" {...options}>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro5} />
                        </div>
                        <div className="content">
                          <h5>Erp Accounting</h5>
                          <p> vue3 , vit , pinia , sass , Responsive </p>
                          <a
                            href="http://salekerp.com/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro8} />
                        </div>
                        <div className="content">
                          <h5>dashboard Arabpik</h5>
                          <p> vue3 , vit , pinia , sass , Responsive </p>
                          <a
                            href="http://salekerp.com/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro3} />
                        </div>
                        <div className="content">
                          <h5>Olp websit</h5>
                          <p>Html , Css , Responsive , Javascript , Jquery</p>
                          <a
                            href="https://olp-beta.vercel.app/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro11} />
                        </div>
                        <div className="content">
                          <h5>dashboard rasid jack</h5>
                          <p> vue3 , vuex , sass , Responsive </p>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro1} />
                        </div>
                        <div className="content">
                          <h5>Alfa websit</h5>
                          <p>Html , Css , Responsive , Javascript</p>
                          <a
                            href="https://roya-coral.vercel.app/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro7} />
                        </div>
                        <div className="content">
                          <h5>Erp Rasid</h5>
                          <p>vue.js , veutify , vuex , sass , Responsive </p>
                          <a
                            href="https://rasiderp.com/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro2} />
                        </div>
                        <div className="content">
                          <h5>Fahd websit</h5>
                          <p>Html , Css , Responsive , Javascript</p>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro4} />
                        </div>
                        <div className="content">
                          <h5>Orcav websit</h5>
                          <p>Html , Css , Responsive , Javascript , Jquery</p>
                          <a
                            href="https://now.orcav.com/"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro6} />
                        </div>
                        <div className="content">
                          <h5>elegantqubes websit</h5>
                          <p>Html , Css , Responsive , Javascript , Jquery</p>
                          <a
                            href="https://elegantqubes.com/home"
                            className="btn styling_btn"
                            target="_blank"
                          >
                            {" "}
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro9} />
                        </div>
                        <div className="content">
                          <h5>Pharma in websit</h5>
                          <p>Html , Css , Responsive , Javascript , Jquery</p>
                        </div>
                      </div>
                    </div>
                    <div className="item box ">
                      <div className="pro card">
                        <div className="img_pro">
                          <img src={pro10} />
                        </div>
                        <div className="content">
                          <h5>Rasid jack websit</h5>
                          <p>Html , Css , Responsive , Javascript , Jquery</p>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>{" "}
      <section className="AboutMe " id="AboutMe">
        <Container>
          <h2>{t("About_Me")}</h2>
          <div className="borderline mb-4"></div>{" "}
          <ul data-aos="flip-left" data-aos-duration="2" data-aos-delay="2">
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} /> <p>{t("about1")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} /> <p>{t("about2")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} /> <p>{t("about3")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p>{t("about4")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p>{t("about5")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p>{t("about6")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p>{t("about7")}</p>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p>{t("about8")}</p>
            </li>
          </ul>
        </Container>
      </section>
      <section className="Skills">
        <Container>
          <h2>{t("Skills")}</h2>
          <div className="borderline mb-4"></div>
          {/* <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={true}
          >
            <div className="item box">css</div>
          </OwlCarousel> */}{" "}
          <div
            className="row"
            data-aos="fade-up-left"
            data-aos-duration="2"
            data-aos-delay="2"
          >
            <div className="col-lg-6">
              <ul className="list row">
                <li className="col-md-4 col-6">
                  <img src={html5} /> <h5>Html , Html5</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={css3} /> <h5>css , css3</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={js} /> <h5>Javascript</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={jquery} /> <h5>jquery</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={bootstrap} /> <h5>bootstrap</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={vuex} /> <h5>vuex</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={vue3} /> <h5>vue3</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={redux} /> <h5>redux</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={pinia} /> <h5>pinia</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={react} /> <h5>react</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={vuejs} /> <h5>vue.js</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={vit} /> <h5>vit</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={axios} /> <h5>axios</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={sass} /> <h5>sass</h5>
                </li>
                <li className="col-md-4 col-6">
                  <img src={Nuxt} /> <h5>Nuxt.js</h5>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>{" "}
      <section className="contactUs">
        <Container>
          <h2>{t("working")}</h2>
          <div className="borderline mb-4"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <a
                        href="https://ahmed-ismail-portfolio.vercel.app/+20127122395"
                        target="_blank"
                      >
                        <img src={smartphone} />
                        <h6>+20127122395 </h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <img src={email} />
                      <h6>fatmasamir231@gmail.com</h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <a
                        href="whatsapp://send?abid=201127122395&text&type=phone_number&app_absent=0"
                        target="_blank"
                      >
                        <img src={whatsapp} />
                        <h6>+201127122395</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/fatma-samir-9499b1133/"
                        target="_blank"
                      >
                        <img src={linkedin} />
                        <h6>My profile</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <a
                        href="https://web.facebook.com/profile.php?id=100007530649083"
                        target="_blank"
                      >
                        <img src={facebook} />
                        <h6>My profile</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      {" "}
                      <a href="https://github.com/fatmasamir" target="_blank">
                        <img src={github} />
                        <h6>My profile</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <footer>
        <Container>
          <h6>{t("copyright")}</h6>
        </Container>
      </footer>
    </>
  );
}

export default Home;

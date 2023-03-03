import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">

                    <div className="skill-bx wow zoomIn">

            <h1>Tech Stack</h1>
                    <div className="social-icons">
            <div className="social-icons-image">
                <a href="https://www.ruby-lang.org/en/">
                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132219.png" alt="Ruby" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://www.javascript.com/">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://reactjs.org/">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://html.com/">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt="HTML5" />
                </a>
            </div>

        </div>

        <h1>Other Tech Software</h1>
                    <div className="social-icons">
            <div className="social-icons-image">
                <a href="https://business.adobe.com/products/experience-manager/sites/aem-sites.html">
                    <img src="https://www.creativefolks.com.au/hs-fs/hubfs/CreativeFolks_November2017/Images/AEM-Logo-1.png?width=200&name=AEM-Logo-1.png" alt="AEM" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://www.sitecore.com/">
                    <img src="https://seeklogo.com/images/S/sitecore-logo-1E11D7BDB9-seeklogo.com.png" alt="Sitecore" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://www.atlassian.com/software/jira">
                    <img src="https://www.pixsoftware.de/files/images/atlassian-logos/atlassian-jira-logo-positiv-300px.png" alt="Jira" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://marketplace.atlassian.com/apps/1014681/zephyr-squad-test-management-for-jira?tab=overview&hosting=cloud">
                    <img src="https://www.vectorlogo.zone/logos/getzephyr/getzephyr-ar21.png" alt="Zephyr" />
                </a>
            </div>
            <div className="social-icons-image">
                <a href="https://www.salesforce.com/eu/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="Salesforce" />
                </a>
            </div>
        </div>

                    </div>

            </div>


        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

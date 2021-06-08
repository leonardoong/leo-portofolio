import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

export default function Career() {
  return (
    <div className="mt-5" id="career-section">
      <div className="flex justify-center items-center mb-8">
        <p className="text-2xl font-extrabold font-mono">Career</p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(122, 204, 255)",
            color: "rgb(55, 65, 81)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(122, 204, 255)" }}
          date="Jul. 2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">
            Tokopedia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sofware Engineer
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2019 - Jun. 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">
            Wirecard Technologies Indonesia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Front End Developer
          </h4>
          <h1 className="mt-3 text-sm font-light">
            Responsible to develop hybrid mobile app using Cordova and
            Framework7 and web app using Spring Framework.
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun. 2018 - Aug. 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">
            Anugrah Visi Inti Teknologi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Technical Consultant Internship
          </h4>
          <h1 className="mt-3 text-sm font-light">
            Wrote code in HTML, JavaScript & Visual Basic to develop website for
            SAP Business One Add-Ons.
          </h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

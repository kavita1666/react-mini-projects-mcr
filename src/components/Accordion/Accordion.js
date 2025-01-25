import { SideBarLists } from "../../helpers/sidebarHelper";
import "./Accordion.css";

const Accordion = () => {
  // const [showIndex, setShowIndex] = useState();

  const handleOpenContent = (index) => {
    // accordion flow
    // if (showIndex === index) {
    //   setShowIndex(null);
    // } else {
    //   setShowIndex(index);
    // }
  };

  return (
    <div className="sidebar-container">
      {SideBarLists.map((item, index) => {
        return (
          <div className="accordion-element" key={index}>
            <div className="element-heading" onClick={(e) => handleOpenContent(index)}>
              <a className="sidebar-links" href={item.url}>
                {item.heading}
              </a>
            </div>

            {/* {showIndex === index && (
              <div className="element-content">
                <p>{item.content}</p>
              </div>
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

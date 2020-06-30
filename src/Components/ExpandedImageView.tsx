import React from "react";

const ExpandedImageView = ({ isMobile, image, close }) => {
  //let imageFile = require("../images/" + image + ".png");
  return (
    <div
      className={"expanded-view-wrapper"}
      id={"expanded-wrapper"}
      onClick={close}
    >
      <div className={"expanded-view-content-wrapper"} onClick={close}>
        <div
          className={
            "expanded-view-content" + (isMobile ? "  mobile" : "  web")
          }
        >
          <div
            className={
              "expanded-image-container" + (isMobile ? "  mobile" : "  web")
            }
            style={{
              backgroundImage: `url(${image})`,
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {
              //<Navigation setIndex={(indexChange) => setIndex(indexChange)} />
            }
          </div>
          {
            //<Description text={text} />
          }
        </div>
      </div>
    </div>
  );
};

export default ExpandedImageView;

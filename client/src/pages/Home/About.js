import React from "react";
import SectionTitle from "../../components/SectionTitle";

function about() {
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex">
        <div className="h-[50vh]">
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/If30_WdTEui.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default about;

import React, { memo } from "react";
const Footer = () => {
  console.log("f");
  return (
    <div className="footer">
      <p className="center">content by vtd since @2023</p>
    </div>
  );
};
export default memo(Footer);

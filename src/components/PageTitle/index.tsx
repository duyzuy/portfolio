import React, { useMemo } from "react";
const PageTitle: React.FC<{ text?: string; className?: string }> = ({
  text,
  className,
}) => {
  const clss = useMemo(() => {
    let cls = "page-title";
    if (className) {
      cls = cls.concat(" ", className);
    }
    return cls;
  }, [className]);
  return (
    <>
      <div className={clss}>
        <h1>{text}</h1>
      </div>
    </>
  );
};
export default PageTitle;

import React from "react";

const getViewBox = name => {
  switch (name) {
    case "delete":
      return "0 0 459 459";
    case "restore":
      return "0 0 448 448";
    case "download":
      return "0 0 433.5 433.5";
    default:
      return "0 0 0 0";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "delete":
      return (
        <React.Fragment><path
          {...props}
          d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z"
        /></React.Fragment>
      );
    case "restore":
      return (
        <React.Fragment><path
          {...props}
          d="M256,32C149.973,32,64,117.973,64,224H0l85.333,85.333L170.667,224h-64c0-82.453,66.88-149.333,149.333-149.333S405.333,141.547,405.333,224S338.453,373.333,256,373.333c-32.32,0-62.08-10.347-86.613-27.84L139.2,376.107C171.627,401.067,212.053,416,256,416c106.027,0,192-85.973,192-192S362.027,32,256,32z"
        />
        <path
          {...props}
          d="M298.667,224c0-23.573-19.093-42.667-42.667-42.667S213.333,200.427,213.333,224s19.093,42.667,42.667,42.667S298.667,247.573,298.667,224z"
        /></React.Fragment>
      );
    case "download":
      return (
        <React.Fragment><path
          {...props}
          d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"
        /></React.Fragment>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#fff",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;

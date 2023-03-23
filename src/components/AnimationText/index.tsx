import React, { Children } from "react";
import { motion } from "framer-motion";
import { TagType, TagMapType } from "../../models";
// Word wrapper
const Wrapper = (props: any) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimationText: React.FC<{ text: string; type: string }> = (props) => {
  // Framer Motion variant object, for controlling animation
  const varitants = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words: string[][] = [];

  // Push each word into words array
  // for (const [, item] of splitWords.entries()) {
  //   words.push(item.split(""));
  // }

  for (let count = 0; count < splitWords.length; count++) {
    words.push(splitWords[count].split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const tagName = tagMap[props.type as keyof TagMapType];
  const Tag: React.FC<{ type: string; children: any }> = ({
    type,
    children,
    ...props
  }) => {
    return React.createElement(type, props, children);
  };

  return (
    <Tag type={tagName}>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {word.flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={varitants}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimationText;

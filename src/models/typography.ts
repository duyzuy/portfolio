import { HTMLAttributes } from "react";

export type TagType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "paragraph";

export interface TagMapType {
  paragraph: "p";
  heading1: "h1";
  heading2: "h2";
  heading3: "h3";
  heading4: "h4";
  heading5: "h5";
  heading6: "h6";
}

export type HeadingType = HTMLAttributes<HTMLHeadingElement>;
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>;
export type SpanType = HTMLAttributes<HTMLSpanElement>;

export type TypographyProps = (HeadingType | ParagraphType | SpanType) & {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | "button";
};

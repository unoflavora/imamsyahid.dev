import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

export const serializeHTML = (children: any[]) =>
  children.map(
    (
      node: {
        bold: boolean;
        code: boolean;
        italic: boolean;
        type: any;
        children: any;
        url: string;
      },
      i
    ) => {
      if (Text.isText(node)) {
        let text = (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        );

        if (node.bold) {
          text = <strong key={i}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={i}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={i}>{text}</em>;
        }

        // Handle other leaf types here...

        return <Fragment key={i}>{text}</Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case "h1":
          return <h1 key={i}>{serializeHTML(node.children)}</h1>;
        // Iterate through all headings here...
        case "h6":
          return <h6 key={i}>{serializeHTML(node.children)}</h6>;
        case "blockquote":
          return (
            <blockquote key={i}>{serializeHTML(node.children)}</blockquote>
          );
        case "ul":
          return <ul key={i}>{serializeHTML(node.children)}</ul>;
        case "ol":
          return <ol key={i}>{serializeHTML(node.children)}</ol>;
        case "li":
          return <li key={i}>{serializeHTML(node.children)}</li>;
        case "link":
          return (
            <a href={escapeHTML(node.url)} key={i}>
              {serializeHTML(node.children)}
            </a>
          );

        default:
          return <p key={i}>{serializeHTML(node.children)}</p>;
      }
    }
  );

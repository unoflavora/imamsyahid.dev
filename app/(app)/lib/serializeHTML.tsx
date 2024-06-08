import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import MediaData from "../types/MediaData";
import ContentImage from "@/components/ui/ContentImage";
import getBase64 from "./getBase64";

export const serializeHTML = (children: any[]) =>
  children.map(async (node: { [key: string]: any }, i) => {
    if (Text.isText(node)) {
      node = node as any;

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
      case "h2":
        return <h2 key={i}>{serializeHTML(node.children)}</h2>;
      case "h3":
        return (
          <h3 className="text-xl font-semibold" key={i}>
            {serializeHTML(node.children)}
          </h3>
        );
      case "h4":
        return (
          <h4 className="text-xl font-semibold" key={i}>
            {serializeHTML(node.children)}
          </h4>
        );
      case "h5":
        return (
          <h5 className="font-semibold" key={i}>
            {serializeHTML(node.children)}
          </h5>
        );
      case "h6":
        return <h6 key={i}>{serializeHTML(node.children)}</h6>;
      case "blockquote":
        return <blockquote key={i}>{serializeHTML(node.children)}</blockquote>;
      case "ul":
        return (
          <ul
            className="list-disc list-outside text-left	ml-5 flex flex-col gap-1"
            key={i}
          >
            {serializeHTML(node.children)}
          </ul>
        );
      case "ol":
        return <ol key={i}>{serializeHTML(node.children)}</ol>;
      case "li":
        return <li key={i}>{serializeHTML(node.children)}</li>;
      case "upload":
        var { value } = node as { value: MediaData };
        const base64 = await getBase64(value.url);

        return <ContentImage config={{ base64 }} image={value} />;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serializeHTML(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serializeHTML(node.children)}</p>;
    }
  });

import AnimatedText from "@/components/ui/AnimatedText";
import { Article } from "@/components/ui/ArticleShowcase";
import Product from "@/components/ui/ProductCard";

export default function Page() {
  return (
    <Article>
      <Article.Header title="Products">
        <AnimatedText text="Things I've" />
        <AnimatedText className="text-black dark:text-white" text="made" />
      </Article.Header>

      <Article.Body>
        <Product
          title={`[WIP] Masuk-Kampus`}
          desc={"A gamified learning platform"}
          price="Free"
        />
        <Product
          title={`[WIP] Devlink`}
          desc={"A link shortener for developers"}
          price="Free"
        />
      </Article.Body>
    </Article>
  );
}

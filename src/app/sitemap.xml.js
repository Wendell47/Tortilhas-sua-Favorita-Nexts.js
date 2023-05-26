import { getServerSideProps } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { getAllPosts } from "../lib/api";

export  default getServerSideProps = async ({ res }) => {
  const posts = await getAllPosts();

  const smStream = new SitemapStream({
    hostname: "https://tortilhas-sua-favorita-nexts-js.vercel.app",
  });

  const pipeline = smStream.pipe(Readable.from(posts));

  pipeline.write({ url: "/", changefreq: "daily", priority: 0.9 });

  posts.forEach((post) => {
    pipeline.write({
      url: `/pages/${post.slug}`,
      changefreq: "daily",
      priority: 0.7,
    });
  });

  pipeline.end();

  const sitemap = await streamToPromise(smStream).then((sm) =>
    sm.toString()
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
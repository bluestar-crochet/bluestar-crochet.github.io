import Head from "next/head";
import { fetchProducts } from "../../../lib/notion";

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default function EnProducts({ products }) {
  return (
    <>
      <Head><title>Products｜blue.star_crochet</title></Head>
      <div className="container">
        <div className="header">
          <div className="brand"><a href="/en/">blue.star_crochet</a></div>
          <div className="lang"><a href="/zh/">繁中</a><a href="/en/">EN</a></div>
        </div>

        <div className="hero">
          <h1>All products</h1>
          <p>Each product has its own page URL for accurate view analytics.</p>
        </div>

        <div className="grid">
          {products.map(p => (
            <div className="card" key={p.code}>
              <h3>{p.code}｜{p.nameEn || "(TBC)"}</h3>
              <div className="small">Price: HKD {p.priceHkd || "TBC"}</div>
              <a className="btn" href={`/en/product/${encodeURIComponent(p.code)}/`}>View details</a>
            </div>
          ))}
        </div>

        <div className="footer">Contact: blue.star_crochet</div>
      </div>
    </>
  );
}
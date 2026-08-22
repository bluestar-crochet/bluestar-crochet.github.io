import Head from "next/head";
import { fetchProducts } from "../../../lib/notion";

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

function filterByCat(products, cat) {
  if (!cat) return products;
  return products.filter(p => p.category === cat);
}

export default function ZhProducts({ products }) {
  const cat = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("cat") : null;
  const list = filterByCat(products, cat);

  return (
    <>
      <Head><title>作品｜blue.star_crochet</title></Head>
      <div className="container">
        <div className="header">
          <div className="brand"><a href="/zh/">blue.star_crochet</a></div>
          <div className="lang"><a href="/zh/">繁中</a><a href="/en/">EN</a></div>
        </div>

        <div className="hero">
          <h1>所有作品</h1>
          <p>點入每件產品可查看詳情（每件產品都有獨立頁面，方便統計觀看量）。</p>
        </div>

        <div className="grid">
          {list.map(p => (
            <div className="card" key={p.code}>
              <h3>{p.code}｜{p.nameZh || "（待補）"}</h3>
              <div className="small">價格：HKD {p.priceHkd || "TBC"}</div>
              <a className="btn" href={`/zh/product/${encodeURIComponent(p.code)}/`}>查看詳情</a>
            </div>
          ))}
        </div>

        <div className="footer">聯絡：blue.star_crochet</div>
      </div>
    </>
  );
}
import Head from "next/head";
import { fetchProducts } from "../../../lib/notion";

export async function getStaticPaths() {
  const products = await fetchProducts();
  return {
    paths: products.map(p => ({ params: { code: p.code } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const products = await fetchProducts();
  const product = products.find(p => p.code === params.code) || null;
  return { props: { product } };
}

export default function EnProduct({ product }) {
  if (!product) return null;

  return (
    <>
      <Head><title>{product.code}｜{product.nameEn}｜blue.star_crochet</title></Head>
      <div className="container">
        <div className="header">
          <div className="brand"><a href="/en/">blue.star_crochet</a></div>
          <div className="lang">
            <a href={`/zh/product/${encodeURIComponent(product.code)}/`}>繁中</a>
            <a href={`/en/product/${encodeURIComponent(product.code)}/`}>EN</a>
          </div>
        </div>

        <div className="hero">
          <h1>{product.code}｜{product.nameEn}</h1>
          <p>Price: HKD {product.priceHkd || "TBC"}</p>
        </div>

        <div className="card">
          <div className="small"><b>Description:</b> {product.descEn || "(TBC, editable in backend)"}</div>
          <div className="small" style={{marginTop:10}}><b>Size:</b> {product.sizeEn || "(TBC)"}</div>
          <div className="small"><b>Materials:</b> {product.materialsEn || "(TBC)"}</div>
          <div className="small"><b>Lead time:</b> {product.leadEn || "(TBC)"}</div>
          <div className="small"><b>Notes:</b> {product.notesEn || "(TBC)"}</div>
        </div>

        <div className="sectionTitle">Photos</div>
        <div className="grid">
          {(product.photos || []).slice(0,5).map((url, idx) => (
            <div className="card" key={idx}>
              <img src={url} alt={`${product.code}-${idx+1}`} style={{width:"100%", borderRadius:12}} />
            </div>
          ))}
        </div>

        <div className="footer">
          Order: IG shop name: blue.star_crochet (text only)
        </div>
      </div>
    </>
  );
}
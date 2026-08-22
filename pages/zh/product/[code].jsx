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

export default function ZhProduct({ product }) {
  if (!product) return null;

  return (
    <>
      <Head><title>{product.code}｜{product.nameZh}｜blue.star_crochet</title></Head>
      <div className="container">
        <div className="header">
          <div className="brand"><a href="/zh/">blue.star_crochet</a></div>
          <div className="lang">
            <a href={`/zh/product/${encodeURIComponent(product.code)}/`}>繁中</a>
            <a href={`/en/product/${encodeURIComponent(product.code)}/`}>EN</a>
          </div>
        </div>

        <div className="hero">
          <h1>{product.code}｜{product.nameZh}</h1>
          <p>價格：HKD {product.priceHkd || "TBC"}</p>
        </div>

        <div className="card">
          <div className="small"><b>作品介紹：</b>{product.descZh || "（待補，可於後台更改）"}</div>
          <div className="small" style={{marginTop:10}}><b>尺寸：</b>{product.sizeZh || "（待補）"}</div>
          <div className="small"><b>材質：</b>{product.materialsZh || "（待補）"}</div>
          <div className="small"><b>製作時間：</b>{product.leadZh || "（待補）"}</div>
          <div className="small"><b>注意事項：</b>{product.notesZh || "（待補）"}</div>
        </div>

        <div className="sectionTitle">圖片</div>
        <div className="grid">
          {(product.photos || []).slice(0,5).map((url, idx) => (
            <div className="card" key={idx}>
              <img src={url} alt={`${product.code}-${idx+1}`} style={{width:"100%", borderRadius:12}} />
            </div>
          ))}
        </div>

        <div className="footer">
          下單方式：IG 店名：blue.star_crochet（只顯示文字）
        </div>
      </div>
    </>
  );
}
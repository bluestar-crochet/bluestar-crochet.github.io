import Head from "next/head";

const GA = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function GAHead() {
  if (!GA) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA}');
      `}} />
    </>
  );
}

export default function EnHome() {
  return (
    <>
      <Head>
        <title>blue.star_crochet</title>
        <GAHead />
      </Head>

      <div className="container">
        <div className="header">
          <div className="brand">blue.star_crochet</div>
          <div className="lang">
            <a href="/zh/">繁中</a>
            <a href="/en/">EN</a>
          </div>
        </div>

        <div className="hero">
          <h1>Handmade crochet mini works</h1>
          <p>Clean, cute, cozy. Prices displayed in HKD (editable anytime).</p>
          <a className="btn" href="/en/products/">Browse products</a>
        </div>

        <div className="sectionTitle">Collections</div>
        <div className="grid">
          <div className="card"><h3>Food</h3><div className="small">Comforting crochet treats.</div><a className="btn" href="/en/products/?cat=Food">Open</a></div>
          <div className="card"><h3>Support items</h3><div className="small">Cheer for what you love.</div><a className="btn" href="/en/products/?cat=Support">Open</a></div>
          <div className="card"><h3>Cute charms</h3><div className="small">Small, giftable, everyday cute.</div><a className="btn" href="/en/products/?cat=Charms">Open</a></div>
          <div className="card"><h3>Zodiac</h3><div className="small">Your sign, crocheted.</div><a className="btn" href="/en/products/?cat=Zodiac">Open</a></div>
          <div className="card"><h3>Graduation gifts</h3><div className="small">A warm gift for big moments.</div><a className="btn" href="/en/products/?cat=Graduation">Open</a></div>
        </div>

        <div className="sectionTitle">Notes (short)</div>
        <div className="card small">
          <div>• Handmade items may vary slightly.</div>
          <div>• Color may differ due to lighting/screens.</div>
          <div>• Custom details can be updated later in the backend.</div>
        </div>

        <div className="footer">
          Contact: blue.star_crochet (display name only, no link)
        </div>
      </div>
    </>
  );
}
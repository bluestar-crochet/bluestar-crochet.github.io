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

export default function ZhHome() {
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
          <h1>手工鈎織小物｜作品展示</h1>
          <p>簡潔、可愛、舒適溫馨。價格以 HKD 顯示（可後台隨時更新）。</p>
          <a className="btn" href="/zh/products/">查看作品</a>
        </div>

        <div className="sectionTitle">作品分類</div>
        <div className="grid">
          <div className="card"><h3>食物系列</h3><div className="small">可愛又療癒的日常小食。</div><a className="btn" href="/zh/products/?cat=Food">進入</a></div>
          <div className="card"><h3>應援物</h3><div className="small">為喜愛的人與事打氣。</div><a className="btn" href="/zh/products/?cat=Support">進入</a></div>
          <div className="card"><h3>可愛掛飾</h3><div className="small">小巧、百搭、適合送禮。</div><a className="btn" href="/zh/products/?cat=Charms">進入</a></div>
          <div className="card"><h3>星座</h3><div className="small">把專屬星座變成手作小物。</div><a className="btn" href="/zh/products/?cat=Zodiac">進入</a></div>
          <div className="card"><h3>畢業禮物</h3><div className="small">為重要時刻留下一份溫度。</div><a className="btn" href="/zh/products/?cat=Graduation">進入</a></div>
        </div>

        <div className="sectionTitle">購前須知（簡版）</div>
        <div className="card small">
          <div>• 手工製作每件會有少許差異屬正常。</div>
          <div>• 燈光／螢幕顯示或有色差，以實物為準。</div>
          <div>• 如需客製或改動，日後可在後台補充資訊。</div>
        </div>

        <div className="footer">
          聯絡：blue.star_crochet（IG 店名顯示，不設連結）
        </div>
      </div>
    </>
  );
}
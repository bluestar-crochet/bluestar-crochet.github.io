export async function getStaticProps() {
  return { props: {} };
}
export default function Home() {
  return null;
}
export async function getStaticPaths(){ return { paths: [], fallback:false }; }
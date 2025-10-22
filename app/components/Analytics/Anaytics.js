import Script from "next/script";

Const Analytics = () => {
  return (
    <>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ML5BTCL6RB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ML5BTCL6RB');
</script>
  </>
);
};
export default Analytics;

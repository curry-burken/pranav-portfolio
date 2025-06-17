import { calibre, jetbrains_mono } from "public/fonts";
import Meta from "@/components/Meta/Meta";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <main
        className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;

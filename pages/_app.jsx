import Head from "next/head";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Frontend Mentor | Bring everyone together to build better products.</title>
        <meta name="description" content="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

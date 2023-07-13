'use client';
import type { AppProps } from "next/app";
import Layout from './layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <h1>Hello</h1>
    </Layout>
  );
}
export default App;



// export default function Home() {
//   return (
//     <div className="flex flex-col h-screen justify-between">
//       <Navbar/>
      
//       <Footer/>
//     </div>
//   );
// }

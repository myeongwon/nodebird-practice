import 'antd/dist/antd.css';
import Head from 'next/head';

const App = ({Component}) => {
  return (
    <>
      <Head>
        <title>Node bird</title>
      </Head>
      <Component/>
    </>
  );
}

export default App;

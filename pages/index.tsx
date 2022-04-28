import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Font Preview</title>
        <meta name="description" content="Preview Google web fonts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2 className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in
          repellat sunt eos iste deserunt perferendis architecto veniam at unde
          tempora nemo perspiciatis doloremque quo vel repudiandae repellendus
          quia, dicta illo quasi ipsam? Necessitatibus, fugiat veritatis nostrum
          perspiciatis facere accusamus ut asperiores voluptatum, excepturi quo,
          cum amet porro nulla voluptatem rem maiores. Maxime eum cupiditate
          excepturi doloribus aut optio pariatur possimus consequatur saepe
          explicabo quidem fuga quam, aperiam quia exercitationem. Aliquid rem
          facilis similique iste quidem qui sunt doloremque consectetur beatae
          natus? Necessitatibus rerum veniam dolorem dignissimos, delectus vel
          facere similique mollitia, obcaecati itaque error quas quam, eum sunt
          unde.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          molestiae, nam pariatur placeat ducimus culpa? Delectus architecto
          modi obcaecati quidem esse, fuga ullam. Alias iste placeat debitis
          natus, nihil maiores magni laboriosam id expedita, minus ducimus iure
          facilis nam explicabo sit qui asperiores provident nostrum. Et officia
          ipsa deserunt pariatur!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          natus, omnis debitis eos cum officia, esse distinctio corrupti minus
          repellat architecto suscipit animi?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          sapiente aperiam, autem nisi ratione unde. Iste blanditiis dolor
          commodi illum. Voluptas ab iusto possimus doloribus odit, repudiandae
          dolorum numquam. Neque at autem saepe optio eos illum aliquid
          perferendis in placeat? Molestias, repellat ab.
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

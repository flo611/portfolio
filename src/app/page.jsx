import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <img
          src="https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png"
          width="50px"
          height="auto"
          alt="logo-entreprise"
        />
        <nav className="bg-blue-500">
          <ul>
            <li className="italic text-red-500">
  
              <a href="#">Accueil</a>
            </li>
            <li className="text-red-200">

              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="bg-orange-500"> Welcome to my website </h1>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          facilis hic praesentium sapiente aliquid eligendi, dignissimos quam ab
          nemo, magni vero minus quidem placeat unde iure voluptatem illum
          consequuntur ullam?
        </p>
      </main>
      <footer>
        <img
          src="https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png"
          width="50px"
          height="auto"
          alt="logo-entreprise"
        />
        <p className="italic">Copyright - ACS 2023</p>
      </footer>
    </div>
  );
}

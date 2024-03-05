"use client";
import Navbar from "../components/layouts/navbar";
import Particlesbackground from "../components/tools/particles";
import Footer from "../components/layouts/footer";
const Cgu =() =>{

    return(
        <>

        <Particlesbackground/>
        
        <div className="overflow-x-hidden bg-gradient-to-r from-cyan-600  to-emerald-800   text-white dark:bg-gradient-to-r dark:from-cyan-700 dark:to-purple-950 dark:text-white ">
        <h2 className="font-extrabold text-xl my-10 w-full flex justify-center">Conditions Générales d'Utilisation</h2>


<p>Nous attachons une grande importance à la protection de vos données personnelles et nous nous engageons à respecter la législation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).</p>

<h2 className="font-bold my-2">1. Collecte et traitement des données personnelles</h2>

<p>Lorsque vous utilisez notre service, nous pouvons être amenés à collecter certaines informations personnelles vous concernant telles que :</p>

<ul>
  <li>Votre nom</li>
  <li>Votre prénom</li>
  <li>Votre numéro de téléphone</li>
  <li>Votre adresse e-mail</li>
  <li>L'objet de votre message</li>
</ul>

<p>Ces informations sont collectées dans le seul but de vous fournir un service personnalisé et de répondre à vos demandes. En utilisant notre formulaire de contact, vous consentez à la collecte et au traitement de vos données personnelles telles que décrites dans Collecte et traitement des données personnelles.</p>

<h2 className="font-bold my-2">2. Sécurité des données</h2>


<p>Nous prenons toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données personnelles, afin de prévenir toute perte, accès non autorisé, divulgation, altération ou destruction.</p>

<h2 className="font-bold my-2">3. Vos droits</h2>


<p>Conformément à la législation en vigueur sur la protection des données, vous disposez des droits suivants concernant vos données personnelles :</p>

<ul>
  <li>Le droit d'accéder à vos données personnelles détenues par nous</li>
  <li>Le droit de rectifier toute information inexacte vous concernant</li>
  <li>Le droit d'effacer vos données personnelles, sous réserve de certaines exceptions</li>
  <li>Le droit de limiter le traitement de vos données personnelles dans certaines circonstances</li>
  <li>Le droit de vous opposer au traitement de vos données personnelles</li>
</ul>

<p>Pour exercer ces droits ou pour toute question concernant la collecte et le traitement de vos données personnelles, veuillez nous contacter via le formulaire nous vous répondrons rapidement.</p>

<h2 className="font-bold my-2">4. Modifications des Conditions Générales d'Utilisation</h2>


<p className="mb-4">Nous nous réservons le droit de modifier ces Conditions Générales d'Utilisation à tout moment. Toute modification sera publiée sur cette page et sera effective dès sa publication. Nous vous recommandons de consulter régulièrement cette page pour rester informé des éventuelles modifications.</p>
</div>
<Footer/>
        </>
    )
}

export default Cgu
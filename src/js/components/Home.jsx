import React from "react";


import Navbar from './Navbar';
import Welcome from './Welcome';
import Cards from './Cards';
import Footer from './Footer';

//create your first component
const Home = () => {
	return (
		<>  <Navbar />
			<Welcome />
			 <Cards /> 
			<Footer />
		</>
	);
};

export default Home;
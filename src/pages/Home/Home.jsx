import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import Banner from "../../components/Banner/Banner";
import Category from "../../components/CategoryCard/CategoryCard";
import RecentBills from "../../components/RecentBills/RecentBills";
import FAQ from "../../components/Faq/Faq";
import Reviews from "../../components/Review section/Review";

const Home = () => {
 
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
    
      <motion.div variants={sectionVariant} initial="hidden" animate="visible">
        <Banner />
      </motion.div>

    
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <Category />
      </motion.div>

      
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <RecentBills />
      </motion.div>

     
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center my-10"
      >
        <Link to="/add-bills" className="btn bg-slate-400 btn-lg">
          + Add New Bill
        </Link>
      </motion.div>

    
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <FAQ />
      </motion.div>

     
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <Reviews />
      </motion.div>
    </div>
  );
};

export default Home;

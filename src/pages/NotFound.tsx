
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="glass-card p-10 text-center max-w-lg">
          <h1 className="text-6xl font-bold mb-6 neon-text">404</h1>
          <p className="text-2xl text-white/90 mb-8">You've broken through to the wrong dimension</p>
          <p className="text-white/70 mb-8">
            This portal doesn't exist...yet. Perhaps you were trying to create something new?
          </p>
          <Link 
            to="/" 
            className="ripple-button inline-block px-6 py-3 bg-neon-purple text-white rounded-lg hover:bg-neon-purple/80 transition-colors duration-300"
          >
            Return to the Main Portal
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

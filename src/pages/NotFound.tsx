
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gf-light p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-gf-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-gf-green">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gf-dark">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

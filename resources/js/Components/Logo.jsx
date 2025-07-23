import { Package } from "lucide-react";

const Logo = () => {
    return (
        <div className="flex items-center space-x-1">
            <Package className="h-6 w-6" />
            <span className="text-2xl font-extrabold">INVENTA</span>
        </div>
    );
};

export default Logo;

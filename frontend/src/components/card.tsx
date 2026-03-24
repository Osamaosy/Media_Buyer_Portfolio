import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const Card = ({ title, description, icon: Icon }: CardProps) => (
  <div className="bg-slate-800 p-6 rounded-lg hover:shadow-xl transition duration-300 hover:scale-105">
    <Icon className="text-blue-400 mb-4" size={32} />
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Card;

import logo from '../../public/assets/logoblack.jpg';

const currentYear = new Date().getFullYear()

export const Topbar = () => (
  <header 
    className="h-16 bg-gray-900 text-white border-b-2 border-gray-700 p-4 flex justify-between 
      items-center fixed top-0 left-0 right-0 z-40"
  >
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src={logo} alt="G4N - Ermelan" className="w-12 h-8 border-2 border-white rounded" />  
        <h2 className="font-bold">&nbsp;Ermelan {currentYear}</h2>
      </div>
    </div>
  </header>
);

export default Topbar;

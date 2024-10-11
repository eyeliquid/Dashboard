import PropTypes from 'prop-types'

const currentYear = new Date().getFullYear()

export const Topbar = () => (
  <header 
    className="h-16 bg-gray-900 text-white border-b-2 border-gray-700 p-4 flex justify-between 
      items-center fixed top-0 left-0 right-0 z-30"
  >
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">G4N -Ermelan {currentYear}</h1>
    </div>
  </header>
);

export default Topbar;

Topbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}
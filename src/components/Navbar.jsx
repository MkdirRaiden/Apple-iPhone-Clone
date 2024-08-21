import { appleImg, searchImg, bagImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <a className="hover:cursor-pointer" href="index.html">
          {" "}
          <img src={appleImg} alt="logo" width={18} height={18} />
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {["Phones", "Macbooks", "Tablets"].map((nav) => {
            return (
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button>
            <img src={searchImg} alt="search" width={18} height={18} />
          </button>
          <button>
            <img src={bagImg} alt="search" width={18} height={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

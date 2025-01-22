const Header = () => {
  return (
    <>
      <nav className=" text-white bg-[#555555] w-full">
        <ul className="flex justify-center p-5 gap-32">
          <li className="bg-[#777777] p-2 rounded-md shadow-xl">
            <a href="/">Motoristas</a>
          </li>
          <li className="bg-[#777777] p-2 rounded-md shadow-xl">
            <a href="/Carros">Carros</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

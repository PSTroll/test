import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <div className="flex justify-between px-20 py-5 bg-slate-900">
      <div className="text-white text-4xl font-semibold">LOGO</div>
      <div>
        <HomeIcon
          className="text-white hover:cursor-pointer hover:text-gray-200 hover:transition-colors hover:duration-500 transform hover:scale-105"
          sx={{ fontSize: "48px" }}
        />
      </div>
    </div>
  );
};

export default Header;

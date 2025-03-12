const NavLinks = ({ className }) => {
  const links = [{ name: "Ejectuvi" }, { name: "Concejo" }];

  return (
    <>
      {links.map((link) => (
        <div>
          <div className={className}>
            <h1>{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

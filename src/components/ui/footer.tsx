const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-14 bg-accent px-7 py-4">
      <span className="text-[0.625rem]  text-primary-foreground/70">
        &copy;{year} FSW Store | by ZetaDev
      </span>
    </div>
  );
};

export default Footer;

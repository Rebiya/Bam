import React from "react";

function Footer() {
  return (
    <>
      <footer>
        {/* returns the current year and copy sign  */}
        <p>&copy; {new Date().getFullYear()} your website </p>
      </footer>
    </>
  );
}

export default Footer;

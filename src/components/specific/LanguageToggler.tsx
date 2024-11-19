import { Globe } from "lucide-react";
import React from "react";

function LanguageToggler() {
  return (
    <li className="nav__item">
      <div className="nav__toggler">
        <Globe className="nav__icon" />
      </div>
    </li>
  );
}

export default LanguageToggler;

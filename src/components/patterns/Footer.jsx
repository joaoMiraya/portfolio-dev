import React from "react";

function Footer({t}) {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-gray-400 text-sm text-center mt-10 pl-16 py-4">
            <p>{t('footerTitle') + currentYear } </p>
        </footer>
    )

}

export default Footer;
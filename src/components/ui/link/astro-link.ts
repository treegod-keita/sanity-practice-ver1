// アンカーリンクを使用するときに利用する
export const astroLink = () => {
    const links = document.querySelectorAll<HTMLAnchorElement>("[data-link-interaction]");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href") || "";

            if (href.startsWith("?y=")) {
                e.preventDefault();
                const targetId = href.replace("?y=", "");
                const element = document.getElementById(targetId);

                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
};

// アンカーリンクを使用するときに利用する
export const astroLink = () => {
    const links = document.querySelectorAll<HTMLAnchorElement>("[data-link-interaction]");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href") || "";

            const isRootAnchor = href.startsWith("/?y=") && window.location.pathname === "/";
            const isCurrentAnchor = href.startsWith("?y=");

            if (isRootAnchor || isCurrentAnchor) {
                e.preventDefault();
                const targetId = href.replace("/?y=", "").replace("?y=", "");
                const element = document.getElementById(targetId);

                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
};

// 別ページからの遷移後にもスクロールさせる
export const scrollToAnchorOnLoad = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const targetId = params.get("y");

        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
};

(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (o.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    o = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (o.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  let n = !1;
  setTimeout(() => {
    if (n) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (function (e) {
      let t = document.querySelector(".dropdown__input");
      document.querySelectorAll(".dropdown__item").forEach((e, o) => {
        e.addEventListener("click", function (o) {
          t.value = e.textContent;
        });
      });
    })();
  let c = document.querySelectorAll(".dropdown");
  for (let e of c)
    e.addEventListener("click", () => {
      e.classList.toggle("_active"),
        window.addEventListener("click", (t) => {
          let o = document.querySelector(".dropdown__input"),
            n = document.querySelectorAll(".dropdown__item");
          t.target != o && t.target != n && e.classList.remove("_active");
        });
    });
  const l = document.querySelector("#current"),
    r = document.querySelectorAll(".card__thumb-gallery img");
  function i(e) {
    r.forEach((e) => (e.style.opacity = 1)),
      (l.src = e.target.src),
      l.classList.add("fade-in"),
      setInterval(() => l.classList.remove("fade-in"), 500),
      (e.target.style.opacity = 0.3);
  }
  (r[0].style.opacity = 0.3), r.forEach((e) => e.addEventListener("click", i));
  const d = document.querySelector(".footer-nav__input"),
    u = document.querySelector(".footer-nav__input-button"),
    s =
      (document.querySelector(".footer-nav__button"),
      document.querySelector(".footer-nav__error"));
  d.addEventListener("click", () => {
    u.classList.add("_active"),
      (window.onclick = (e) => {
        e.target != d && u.classList.remove("_active");
      });
  }),
    d.addEventListener("blur", (e) => {
      0 != ~e.target.value.indexOf("@")
        ? d.classList.remove("_error")
        : d.classList.add("_error"),
        d.classList.contains("_error") &&
          (s.textContent = "???? ?????????? ???? ???????????? ?????????? ?????????????????????? ??????????");
    });
  let a = 0,
    m = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    let e = window.scrollY || document.documentElement.scrollTop;
    (m.style.top = e > a ? "-44px" : "0"), (a = e);
  });
  document.querySelector(".total-counter");
  const p = document.querySelector(".to-cart__quantity-value"),
    f = document.querySelector(".increment"),
    y = document.querySelector(".decrement"),
    v = document.querySelector(".to-cart__add"),
    g = document.querySelector(".to-cart__favorite");
  f.addEventListener("click", function () {
    p.value++;
  }),
    y.addEventListener("click", function () {
      p.value--, p.value > 0 || (p.value < 0 && (p.value = 0));
    }),
    v.addEventListener("click", function () {
      const e = document.querySelector(".cartIcon"),
        t = e.querySelector("span"),
        o = document.querySelector(".details__title"),
        n = document.querySelector(".popup__addAlert");
      document.querySelector(".popup__quantity");
      o &&
        (n.textContent = `?????????? ${o.textContent} ?? ???????????????????? ${p.value}????, ???????????????? ?? ??????????????`),
        t
          ? (t.innerHTML = p.value)
          : p.value > 0 &&
            e.insertAdjacentHTML("beforeend", `<span>${p.value}</span>`);
    }),
    g.addEventListener("click", function () {
      const e = document.querySelector(".popup__favoriteAlert"),
        t = document.querySelector(".details__title"),
        o = document.querySelector(".to-cart__favorite svg");
      (e.textContent = `?????????? ${t.textContent}, ???????????????? ?? ??????????????????`),
        (o.style.fill = "#fff");
    });
  const S = document.querySelectorAll(".popup-link"),
    _ = document.querySelector("body"),
    h = document.querySelectorAll(".lock-padding");
  let q = !0;
  const L = 800;
  if (S.length > 0)
    for (let e = 0; e < S.length; e++) {
      const t = S[e];
      t.addEventListener("click", function (e) {
        const o = t.getAttribute("href").replace("#", "");
        w(document.getElementById(o)), e.preventDefault();
      });
    }
  const E = document.querySelectorAll(".close-popup");
  if (E.length > 0)
    for (let e = 0; e < E.length; e++) {
      const t = E[e];
      t.addEventListener("click", function (e) {
        A(t.closest(".popup")), e.preventDefault();
      });
    }
  function w(e) {
    if (e && q) {
      const t = document.querySelector(".popup.open");
      t
        ? A(t, !1)
        : (function () {
            const e =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
            if (h.length > 0)
              for (let t = 0; t < h.length; t++) {
                h[t].style.paddingRight = e;
              }
            (_.style.paddingRight = e),
              _.classList.add("lock"),
              (q = !1),
              setTimeout(function () {
                q = !0;
              }, L);
          })(),
        e.classList.add("open"),
        e.addEventListener("click", function (e) {
          e.target.closest(".popup__content") || A(e.target.closest(".popup"));
        });
    }
  }
  function A(e, t = !0) {
    q &&
      (e.classList.remove("open"),
      t &&
        (setTimeout(function () {
          if (h.length > 0)
            for (let e = 0; e < h.length; e++) h[e].style.paddingRight = "0px";
          (_.style.paddingRight = "0px"), _.classList.remove("lock");
        }, L),
        (q = !1),
        setTimeout(function () {
          q = !0;
        }, L)));
  }
  document.addEventListener("keydown", function (e) {
    if (27 === e.which) {
      A(document.querySelector(".popup.open"));
    }
  }),
    Element.prototype.closest ||
      (Element.prototype.closest = function (e) {
        for (var t = this; t; ) {
          if (t.matches(e)) return t;
          t = t.parentElement;
        }
        return null;
      }),
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let n = document.querySelector(".icon-menu");
      n &&
        n.addEventListener("click", function (n) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : o(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })();
})();

// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.cultureaestheticsandsalon.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.cultureaestheticsandsalon.com/","title_tag":"Aesthetics & Salon Services El Dorado Hills | Culture","meta_description":"Aesthetics El Dorado Hills experts offering Botox, dermal fillers, Hydrafacial and full salon services in El Dorado Hills. Book your personalized treatment today."},{"page_url":"https://www.cultureaestheticsandsalon.com/services-3","title_tag":"Aesthetic Services El Dorado Hills | Culture Aesthetics","meta_description":"Aesthetics El Dorado Hills clinic for dermal fillers, Botox, Hydrafacial, microneedling, threadlifting, Plasma Pen and laser treatments. Walk-in injectable bar."},{"page_url":"https://www.cultureaestheticsandsalon.com/copy-of-botox-1","title_tag":"Dermal Fillers El Dorado Hills | Culture Aesthetics","meta_description":"Dermal fillers El Dorado Hills for lips, cheeks, jawline and folds. Customized HA and collagen fillers for natural volume and lift. Pricing by syringe, book now."},{"page_url":"https://www.cultureaestheticsandsalon.com/services-8-1","title_tag":"Botox El Dorado Hills | Culture Aesthetics","meta_description":"Botox El Dorado Hills treatments for frown lines, crow’s feet, forehead, lips and underarms. FDA-approved wrinkle smoothing, priced per unit. Call for specials."},{"page_url":"https://www.cultureaestheticsandsalon.com/services-8","title_tag":"Hydrafacial El Dorado Hills | Culture Aesthetics","meta_description":"Hydrafacial El Dorado Hills for deep cleanse, exfoliation and hydration. Signature, Deluxe and Platinum Hydrafacial options to restore glowing, youthful skin."},{"page_url":"https://www.cultureaestheticsandsalon.com/copy-of-threadlifting-1","title_tag":"Plasma Pen El Dorado Hills | Culture Aesthetics","meta_description":"Plasma Pen El Dorado Hills non-surgical skin tightening for eyelids, forehead, neck, lips and more. Target sagging, wrinkles and loss of elasticity. Book now."},{"page_url":"https://www.cultureaestheticsandsalon.com/copy-of-tattoo-removal-1","title_tag":"Microneedling El Dorado Hills | Culture Aesthetics","meta_description":"Microneedling El Dorado Hills with medical-depth Skin Pen, stem cell and PRP to smooth texture, boost collagen and tighten skin. Single and package options."},{"page_url":"https://www.cultureaestheticsandsalon.com/services-2","title_tag":"Threadlifting El Dorado Hills | Culture Aesthetics","meta_description":"Threadlifting El Dorado Hills with PDO threads for full face, neck, brows, tummy and more. Minimally invasive lifting and tightening tailored to your goals."},{"page_url":"https://www.cultureaestheticsandsalon.com/copy-of-laser","title_tag":"Laser Tattoo Removal El Dorado Hills | Culture","meta_description":"Laser tattoo removal El Dorado Hills using Q-switched technology for unwanted body and cosmetic tattoos. Safe, noninvasive sessions for fading and removal."}],"keywords":["Aesthetics El Dorado Hills","Botox El Dorado Hills","Dermal Fillers El Dorado Hills","Hydrafacial El Dorado Hills","Threadlifting El Dorado Hills","Laser Tattoo Removal El Dorado Hills","Microneedling El Dorado Hills","Plasma Pen El Dorado Hills","Salon Services El Dorado Hills","Cut and Color El Dorado Hills"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://www.cultureaestheticsandsalon.com/#identity",
  "name": "Culture Aesthetics & Salon",
  "url": "https://www.cultureaestheticsandsalon.com/",
  "description": "Culture Aesthetics & Salon is located in the heart of El Dorado Hills. Our professional staff are highly trained and offer a wide variety of aesthetic and salon services tailored to your needs, including dermal fillers, Botox, Hydrafacial, Plasma Pen, microneedling, threadlifting, tattoo removal, laser treatments, and full salon cut and color services.",
  "image": [
    "https://static.wixstatic.com/media/9db732_d749bc7973224692969d99e6cfc3b886~mv2.png/v1/crop/x_0,y_169,w_486,h_154/fill/w_398,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CULTURE.png",
    "https://static.wixstatic.com/media/11062b_7a9781287e1749a5bfebf7c4dabddd70~mv2.jpeg/v1/fill/w_211,h_141,q_90,enc_avif,quality_auto/11062b_7a9781287e1749a5bfebf7c4dabddd70~mv2.jpeg",
    "https://static.wixstatic.com/media/11062b_2d9f414121db4d2f99804747eb7e5c7f~mv2.jpg/v1/fill/w_357,h_238,q_90,enc_avif,quality_auto/11062b_2d9f414121db4d2f99804747eb7e5c7f~mv2.jpg"
  ],
  "telephone": "+1-916-790-8511",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4357 Town Center Blvd. #114",
    "addressLocality": "El Dorado Hills",
    "addressRegion": "CA",
    "postalCode": "95762",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://www.cultureaestheticsandsalon.com/quality_auto/40898a93cfff4578b1779073137eb1b4.png",
    "https://www.cultureaestheticsandsalon.com/quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Aesthetic and Salon Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Aesthetic Services",
        "url": "https://www.cultureaestheticsandsalon.com/services-3",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Dermal Fillers",
            "description": "Dermal fillers, soft tissue fillers, or wrinkle fillers are medical device implants for use in helping to create a smoother and/or fuller appearance in the face, such as cheeks, chin, jaw line and lips.",
            "url": "https://www.cultureaestheticsandsalon.com/copy-of-botox-1"
          },
          {
            "@type": "Service",
            "name": "Botox",
            "description": "FDA-approved treatment to temporarily lift and smooth moderate to severe frown lines, crow's feet and forehead creases.",
            "url": "https://www.cultureaestheticsandsalon.com/services-8-1"
          },
          {
            "@type": "Service",
            "name": "Hydrafacial",
            "description": "Hydrafacial uses patented technology combined with nourishing ingredients to create an instantly gratifying glow and help restore skin health.",
            "url": "https://www.cultureaestheticsandsalon.com/services-8"
          },
          {
            "@type": "Service",
            "name": "Plasma Pen",
            "description": "Soft-surgery Plasma Pen procedure targeting skin conditions including loss of elasticity, sagging and wrinkles, especially in the sensitive eye area.",
            "url": "https://www.cultureaestheticsandsalon.com/copy-of-threadlifting-1"
          },
          {
            "@type": "Service",
            "name": "Microneedling",
            "description": "Medical depth microneedling with stem cell and PRP to stimulate collagen and elastin, tightening skin and improving texture and appearance.",
            "url": "https://www.cultureaestheticsandsalon.com/copy-of-tattoo-removal-1"
          },
          {
            "@type": "Service",
            "name": "Threadlifting",
            "description": "Thread lift procedure using temporary sutures to produce a subtle but visible lift in the skin without surgical removal of loose facial skin.",
            "url": "https://www.cultureaestheticsandsalon.com/services-2"
          },
          {
            "@type": "Service",
            "name": "Tattoo Removal",
            "description": "Laser tattoo removal using a Q-switched laser device to break down pigment colors of unwanted tattoos while minimizing damage to surrounding tissue.",
            "url": "https://www.cultureaestheticsandsalon.com/copy-of-laser"
          },
          {
            "@type": "Service",
            "name": "Laser Resurfacing",
            "description": "Laser resurfacing facial rejuvenation procedure to improve skin appearance or treat minor facial flaws.",
            "url": "https://www.cultureaestheticsandsalon.com/services-3"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Salon Services",
        "url": "https://www.cultureaestheticsandsalon.com/",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Cut & Color",
            "description": "Professional salon hair cutting and color services.",
            "url": "https://www.cultureaestheticsandsalon.com/"
          },
          {
            "@type": "Service",
            "name": "Waxing",
            "description": "Salon waxing services.",
            "url": "https://www.cultureaestheticsandsalon.com/"
          },
          {
            "@type": "Service",
            "name": "Special Occasion Styling",
            "description": "Salon hair and beauty services for special occasions.",
            "url": "https://www.cultureaestheticsandsalon.com/"
          }
        ]
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();

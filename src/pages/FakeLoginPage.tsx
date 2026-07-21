import { useEffect, useState } from "react";

import breadCat from "@/assets/images/cat-bread-bread-cat.gif";
import warCat from "@/assets/images/cat-cat-war.gif";
import catCute from "@/assets/images/cat-cute.gif";
import catFunny from "@/assets/images/cat-funny.gif";
import catHello from "@/assets/images/cat-hello.gif";
import catKitty from "@/assets/images/cat-kitty.gif";
import catOrange from "@/assets/images/cat-orange-cat.gif";
import cuteCat from "@/assets/images/cute-cat.gif";
import kittyCat from "@/assets/images/kitty-cat.gif";
import workerKitty from "@/assets/images/kitty-worker-kitty.gif";
import scubaCat from "@/assets/images/scuba-scuba-cat.gif";
import wiggleCat from "@/assets/images/wiggle-cat-wiggle.gif";
import porridgeCat from "@/assets/images/milk-cat-cat.gif";
import watchingCat from "@/assets/images/cat1.gif";
import sadCat from "@/assets/images/sad-cat-sad-cat-meme.gif";
import eatingCat from "@/assets/images/cat-cat-eating.gif";
import smirkingCat from "@/assets/images/kitty-angry-kitty.gif"
import huhCat from "@/assets/images/huh-cat-huh-m4rtin.gif";
import cryingCat from "@/assets/images/cat.gif";
import moneyCat from "@/assets/images/elgatitolover-elgatitoloves.gif";
import girlCat from "@/assets/images/cute-cat-cute.gif";
import tongueCat from "@/assets/images/dil-atan-kedi.gif";


interface CatItem {
  id: string;
  src: string;
  alt?: string;
}

const CAT_GALLERY: CatItem[] = [
  { id: "cat-bread", src: breadCat, alt: "Cat in bread" },
  { id: "cat-war", src: warCat, alt: "Cat war" },
  { id: "cat-cute", src: catCute, alt: "Cute cat" },
  { id: "cat-hello", src: catHello, alt: "Hello cat" },
  { id: "cat-funny", src: catFunny, alt: "Funny cat" },
  { id: "cat-kitty", src: catKitty, alt: "Kitty cat" },
  { id: "cat-orange", src: catOrange, alt: "Orange cat" },
  { id: "cute-cat", src: cuteCat, alt: "Another cute cat" },
  { id: "kitty-cat", src: kittyCat, alt: "Kitty" },
  { id: "kitty-worker", src: workerKitty, alt: "Worker cat" },
  { id: "scuba-cat", src: scubaCat, alt: "Scuba cat" },
  { id: "wiggle-cat", src: wiggleCat, alt: "Wiggle cat" },
  { id: "porridge-cat", src: porridgeCat, alt: "Porridge cat" },
  { id: "watching-cat", src: watchingCat, alt: "Watching cat" },
  { id: "sad-cat", src: sadCat, alt: "Sad cat" },
  { id: "eating-cat", src: eatingCat, alt: "Eating cat" },
  { id: "smirking-cat", src: smirkingCat, alt: "Smirking cat" },
  { id: "huh-cat", src: huhCat, alt: "Huh cat" },
  { id: "crying-cat", src: cryingCat, alt: "Crying cat" },
  { id: "money-cat", src: moneyCat, alt: "Money cat" },
  { id: "girl-cat", src: girlCat, alt: "Girl cat" },
  { id: "tongue-cat", src: tongueCat, alt: "Tongue cat" }
];

function FakeLoginPage() {
  const [activeImage, setActiveImage] = useState<CatItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__subtitle">You are so gullible</span>
          <h2 className="section__title">I Appreciate the Enthusiasm...</h2>
          <p className="section__text">
            However, did you really think I would be that dumb to make it this
            easy for you all hackers out there to gain access to admin
            functionality? Don't be ridiculous.
          </p>
        </header>

        <div className="section__content">
          <p className="section__text">
            Anyhow, here are cool kitty pictures and gifs for you to enjoy:
          </p>

          <ul className="media-grid">
            {CAT_GALLERY.map((item) => (
              <li key={item.id} className="media-grid__item">
                <button
                  type="button"
                  className="media-grid__button"
                  onClick={() => setActiveImage(item)}
                >
                  <img src={item.src} alt={item.alt || item.id} />
                </button>
              </li>
            ))}
          </ul>

          {activeImage && (
            <div
              className="lightbox"
              onClick={() => setActiveImage(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="lightbox__close"
                onClick={() => setActiveImage(null)}
                aria-label="Close full view"
              >
                &times;
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.alt || activeImage.id}
                onClick={(e) => e.stopPropagation()}
                className="lightbox__image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FakeLoginPage;

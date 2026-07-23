import { useEffect, useState } from "react";

import Button from "@/components/Button";

interface CatItem {
  id: string;
  src: string;
  alt?: string;
}

const CAT_GALLERY: CatItem[] = [
  {
    id: "cat-bread",
    src: "/images/cat-bread-bread-cat.gif",
    alt: "Cat in bread",
  },
  { id: "cat-war", src: "/images/cat-cat-war.gif", alt: "Cat war" },
  { id: "cat-cute", src: "/images/cat-cute.gif", alt: "Cute cat" },
  { id: "cat-hello", src: "/images/cat-hello.gif", alt: "Hello cat" },
  { id: "cat-funny", src: "/images/cat-funny.gif", alt: "Funny cat" },
  { id: "cat-kitty", src: "/images/cat-kitty.gif", alt: "Kitty cat" },
  { id: "cat-orange", src: "/images/cat-orange-cat.gif", alt: "Orange cat" },
  { id: "cute-cat", src: "/images/cute-cat.gif", alt: "Another cute cat" },
  { id: "kitty-cat", src: "/images/kitty-cat.gif", alt: "Kitty" },
  {
    id: "kitty-worker",
    src: "/images/kitty-worker-kitty.gif",
    alt: "Worker cat",
  },
  { id: "scuba-cat", src: "/images/scuba-scuba-cat.gif", alt: "Scuba cat" },
  { id: "wiggle-cat", src: "/images/wiggle-cat-wiggle.gif", alt: "Wiggle cat" },
  { id: "porridge-cat", src: "/images/milk-cat-cat.gif", alt: "Porridge cat" },
  { id: "watching-cat", src: "/images/cat1.gif", alt: "Watching cat" },
  { id: "sad-cat", src: "/images/sad-cat-sad-cat-meme.gif", alt: "Sad cat" },
  { id: "eating-cat", src: "/images/cat-cat-eating.gif", alt: "Eating cat" },
  {
    id: "smirking-cat",
    src: "/images/kitty-angry-kitty.gif",
    alt: "Smirking cat",
  },
  { id: "huh-cat", src: "/images/huh-cat-huh-m4rtin.gif", alt: "Huh cat" },
  { id: "crying-cat", src: "/images/cat.gif", alt: "Crying cat" },
  {
    id: "money-cat",
    src: "/images/elgatitolover-elgatitoloves.gif",
    alt: "Money cat",
  },
  { id: "girl-cat", src: "/images/cute-cat-cute.gif", alt: "Girl cat" },
  { id: "tongue-cat", src: "/images/dil-atan-kedi.gif", alt: "Tongue cat" },
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
              <Button
                className="lightbox__close"
                onClick={() => setActiveImage(null)}
                variant="icon"
              >
                &times;
              </Button>

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

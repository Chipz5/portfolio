import { useEffect, useRef, useState } from 'react'

function usePathname() {
  const [path, setPath] = useState(
    () => window.location.pathname.replace(/\/$/, '') || '/',
  )

  useEffect(() => {
    const sync = () =>
      setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  return path
}

function navigate(href) {
  const next = href.replace(/\/$/, '') || '/'
  if (window.location.pathname.replace(/\/$/, '') === next) return
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

const FLOATERS = [
  { kind: 'flower', src: 3, left: '6%', top: '76%', width: '5.8rem', rot: '10deg', dur: '15s', delay: '-1s', path: 3, opacity: 0.92 },
  { kind: 'flower', src: 1, left: '76%', top: '74%', width: '7.6rem', rot: '-12deg', dur: '17s', delay: '-9s', path: 1, opacity: 0.95 },
  { kind: 'flower', src: 2, left: '38%', top: '84%', width: '5.6rem', rot: '8deg', dur: '19s', delay: '-4s', path: 2, opacity: 0.9 },
  { kind: 'petal', src: 1, left: '24%', top: '8%', width: '3.6rem', rot: '20deg', dur: '12s', delay: '-2s', path: 3, opacity: 0.92 },
  { kind: 'petal', src: 4, left: '66%', top: '7%', width: '3.4rem', rot: '-30deg', dur: '14s', delay: '-6s', path: 1, opacity: 0.9 },
  { kind: 'petal', src: 6, left: '14%', top: '18%', width: '4rem', rot: '40deg', dur: '11s', delay: '-1s', path: 2, opacity: 0.88 },
  { kind: 'petal', src: 2, left: '90%', top: '16%', width: '3rem', rot: '-12deg', dur: '13s', delay: '-8s', path: 3, opacity: 0.9 },
  { kind: 'petal', src: 7, left: '32%', top: '20%', width: '3.5rem', rot: '18deg', dur: '12s', delay: '-3s', path: 1, opacity: 0.86 },
  { kind: 'petal', src: 3, left: '72%', top: '18%', width: '3.3rem', rot: '-24deg', dur: '15s', delay: '-5s', path: 2, opacity: 0.88 },
  { kind: 'petal', src: 8, left: '2%', top: '88%', width: '3.2rem', rot: '32deg', dur: '13s', delay: '-10s', path: 3, opacity: 0.86 },
  { kind: 'petal', src: 5, left: '22%', top: '78%', width: '3.8rem', rot: '-8deg', dur: '11s', delay: '-2s', path: 1, opacity: 0.9 },
  { kind: 'petal', src: 9, left: '58%', top: '76%', width: '3.4rem', rot: '26deg', dur: '14s', delay: '-7s', path: 2, opacity: 0.88 },
  { kind: 'petal', src: 1, left: '88%', top: '90%', width: '3.1rem', rot: '-40deg', dur: '16s', delay: '-4s', path: 3, opacity: 0.84 },
  { kind: 'petal', src: 6, left: '48%', top: '92%', width: '3.6rem', rot: '12deg', dur: '13s', delay: '-11s', path: 1, opacity: 0.86 },
  { kind: 'petal', src: 4, left: '68%', top: '86%', width: '3.2rem', rot: '-18deg', dur: '12s', delay: '-6s', path: 2, opacity: 0.88 },
  { kind: 'sparkle', src: 1, left: '34%', top: '4%', width: '2.1rem', rot: '0deg', dur: '10s', delay: '-1s', path: 2, opacity: 1, twinkle: '3.1s' },
  { kind: 'sparkle', src: 3, left: '58%', top: '3%', width: '1.8rem', rot: '0deg', dur: '9s', delay: '-4s', path: 1, opacity: 1, twinkle: '2.6s' },
  { kind: 'sparkle', src: 7, left: '10%', top: '12%', width: '1.7rem', rot: '0deg', dur: '11s', delay: '-2s', path: 3, opacity: 0.95, twinkle: '3.8s' },
  { kind: 'sparkle', src: 2, left: '76%', top: '12%', width: '2rem', rot: '0deg', dur: '8s', delay: '-6s', path: 2, opacity: 1, twinkle: '2.9s' },
  { kind: 'sparkle', src: 10, left: '20%', top: '2%', width: '1.5rem', rot: '0deg', dur: '12s', delay: '-3s', path: 1, opacity: 0.9, twinkle: '4.2s' },
  { kind: 'sparkle', src: 4, left: '40%', top: '22%', width: '1.8rem', rot: '0deg', dur: '10s', delay: '-8s', path: 3, opacity: 0.92, twinkle: '3.4s' },
  { kind: 'sparkle', src: 8, left: '62%', top: '20%', width: '1.6rem', rot: '0deg', dur: '9s', delay: '-1s', path: 2, opacity: 0.95, twinkle: '2.8s' },
  { kind: 'sparkle', src: 5, left: '18%', top: '84%', width: '1.7rem', rot: '0deg', dur: '11s', delay: '-5s', path: 1, opacity: 0.95, twinkle: '3.6s' },
  { kind: 'sparkle', src: 11, left: '50%', top: '80%', width: '1.5rem', rot: '0deg', dur: '8s', delay: '-2s', path: 3, opacity: 0.9, twinkle: '2.4s' },
  { kind: 'sparkle', src: 6, left: '64%', top: '92%', width: '1.8rem', rot: '0deg', dur: '10s', delay: '-7s', path: 2, opacity: 0.95, twinkle: '3.2s' },
  { kind: 'sparkle', src: 9, left: '90%', top: '80%', width: '1.7rem', rot: '0deg', dur: '12s', delay: '-4s', path: 1, opacity: 0.92, twinkle: '4s' },
  { kind: 'sparkle', src: 12, left: '8%', top: '92%', width: '1.3rem', rot: '0deg', dur: '9s', delay: '-6s', path: 3, opacity: 0.88, twinkle: '2.2s' },
  { kind: 'sparkle', src: 1, left: '30%', top: '90%', width: '2rem', rot: '0deg', dur: '11s', delay: '-9s', path: 2, opacity: 1, twinkle: '3s' },
  { kind: 'sparkle', src: 2, left: '82%', top: '92%', width: '1.9rem', rot: '0deg', dur: '8s', delay: '-3s', path: 1, opacity: 0.95, twinkle: '2.7s' },
]

const ABOUT_SPARKLES = [
  { kind: 'sparkle', src: 1, left: '8%', top: '4%', width: '1.8rem', rot: '0deg', dur: '10s', delay: '-1s', path: 1, opacity: 0.95, twinkle: '3.1s' },
  { kind: 'sparkle', src: 3, left: '22%', top: '10%', width: '1.4rem', rot: '0deg', dur: '9s', delay: '-4s', path: 2, opacity: 0.88, twinkle: '2.6s' },
  { kind: 'sparkle', src: 7, left: '38%', top: '3%', width: '1.6rem', rot: '0deg', dur: '11s', delay: '-2s', path: 3, opacity: 0.92, twinkle: '3.8s' },
  { kind: 'sparkle', src: 2, left: '54%', top: '8%', width: '1.9rem', rot: '0deg', dur: '8s', delay: '-6s', path: 1, opacity: 1, twinkle: '2.9s' },
  { kind: 'sparkle', src: 10, left: '70%', top: '2%', width: '1.3rem', rot: '0deg', dur: '12s', delay: '-3s', path: 2, opacity: 0.85, twinkle: '4.2s' },
  { kind: 'sparkle', src: 4, left: '84%', top: '11%', width: '1.7rem', rot: '0deg', dur: '10s', delay: '-8s', path: 3, opacity: 0.9, twinkle: '3.4s' },
  { kind: 'sparkle', src: 8, left: '14%', top: '16%', width: '1.2rem', rot: '0deg', dur: '9s', delay: '-1s', path: 2, opacity: 0.8, twinkle: '2.8s' },
  { kind: 'sparkle', src: 12, left: '92%', top: '5%', width: '1.1rem', rot: '0deg', dur: '8s', delay: '-5s', path: 1, opacity: 0.86, twinkle: '2.2s' },
  { kind: 'sparkle', src: 5, left: '6%', top: '80%', width: '1.5rem', rot: '0deg', dur: '11s', delay: '-2s', path: 3, opacity: 0.9, twinkle: '3.6s' },
  { kind: 'sparkle', src: 11, left: '20%', top: '88%', width: '1.3rem', rot: '0deg', dur: '8s', delay: '-7s', path: 1, opacity: 0.84, twinkle: '2.4s' },
  { kind: 'sparkle', src: 6, left: '36%', top: '78%', width: '1.8rem', rot: '0deg', dur: '10s', delay: '-4s', path: 2, opacity: 0.92, twinkle: '3.2s' },
  { kind: 'sparkle', src: 9, left: '52%', top: '90%', width: '1.6rem', rot: '0deg', dur: '12s', delay: '-1s', path: 3, opacity: 0.88, twinkle: '4s' },
  { kind: 'sparkle', src: 1, left: '68%', top: '82%', width: '2rem', rot: '0deg', dur: '9s', delay: '-6s', path: 1, opacity: 0.95, twinkle: '3s' },
  { kind: 'sparkle', src: 2, left: '82%', top: '92%', width: '1.7rem', rot: '0deg', dur: '11s', delay: '-3s', path: 2, opacity: 0.9, twinkle: '2.7s' },
  { kind: 'sparkle', src: 3, left: '90%', top: '76%', width: '1.4rem', rot: '0deg', dur: '8s', delay: '-9s', path: 3, opacity: 0.86, twinkle: '3.3s' },
  { kind: 'sparkle', src: 8, left: '44%', top: '96%', width: '1.2rem', rot: '0deg', dur: '10s', delay: '-5s', path: 2, opacity: 0.8, twinkle: '2.5s' },
]

function floaterSrc(kind, src) {
  if (kind === 'flower') return `/float/flowers/flower-${src}.png`
  if (kind === 'petal') return `/float/petals/petal-${src}.png`
  return `/float/sparkles/sparkle-${src}.png`
}

function FloatField({ items = FLOATERS }) {
  return (
    <div className="float-field" aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={index}
          className={`floater floater--${item.kind} floater--path-${item.path}`}
          style={{
            '--left': item.left,
            '--top': item.top,
            '--width': item.width,
            '--rot': item.rot,
            '--dur': item.dur,
            '--delay': item.delay,
            '--opacity': item.opacity,
            '--twinkle': item.twinkle || '3s',
          }}
        >
          <img src={floaterSrc(item.kind, item.src)} alt="" draggable="false" />
        </span>
      ))}
    </div>
  )
}

function SparkleLink({ href, label, className, onNavigate }) {
  const [play, setPlay] = useState(false)

  return (
    <a
      className={`scene__sparkle ${className}${play ? ' scene__sparkle--play' : ''}`}
      href={href}
      aria-label={label}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
      onFocus={() => setPlay(true)}
      onBlur={() => setPlay(false)}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(href)
      }}
    >
      {[0, 1, 2, 3].map((frame) => (
        <img
          key={frame}
          className={`sparkle sparkle--${frame}`}
          src={`/sparkle-${frame}.png`}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
      ))}
    </a>
  )
}

function WorkshopScene() {
  return (
    <div className="page">
      <FloatField />
      <div className="brand">
        <img
          src="/logo.png"
          alt="Shilpa’s Workshop of Ideas"
          width="972"
          height="330"
          draggable="false"
        />
      </div>
      <div className="scene" aria-label="Shilpa’s Workshop of Ideas">
        <img
          className="scene__art"
          src="/workshop.jpg"
          alt="Shilpa’s Workshop of Ideas"
          width="1024"
          height="576"
        />
        <img
          className="scene__eyes scene__eyes--half"
          src="/eyes-half.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <img
          className="scene__eyes scene__eyes--closed"
          src="/eyes-closed.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <img
          className="scene__dog scene__dog--0"
          src="/dog-wag-0.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <img
          className="scene__dog scene__dog--1"
          src="/dog-wag-1.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <img
          className="scene__dog scene__dog--2"
          src="/dog-wag-2.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <img
          className="scene__dog scene__dog--3"
          src="/dog-wag-3.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        <SparkleLink
          className="scene__sparkle--books"
          href="/books"
          label="Books"
          onNavigate={navigate}
        />
        <SparkleLink
          className="scene__sparkle--about"
          href="/about"
          label="About Me"
          onNavigate={navigate}
        />
        <SparkleLink
          className="scene__sparkle--frodo"
          href="/frodo"
          label="Meet Frodo"
          onNavigate={navigate}
        />
        <SparkleLink
          className="scene__sparkle--products"
          href="/products"
          label="Product Prototype"
          onNavigate={navigate}
        />
        <SparkleLink
          className="scene__sparkle--games"
          href="/games"
          label="Games"
          onNavigate={navigate}
        />
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page page--secondary page--about">
      <FloatField items={ABOUT_SPARKLES} />
      <main className="about">
        <a
          className="about__back"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            navigate('/')
          }}
        >
          ← Back to workshop
        </a>
        <h1 className="about__title">
          <img
            src="/about-title.png"
            alt="About Me"
            width="908"
            height="225"
            draggable="false"
          />
        </h1>
        <div className="scene" aria-label="About me">
          <img
            className="scene__art"
            src="/about.jpg?v=2"
            alt="Shilpa waving in a sunlit room"
            width="1024"
            height="576"
          />
          <div className="about-copy">
            <p className="about-copy__body">
              Hi, I’m Shilpa! I’m an engineer, product builder, and storyteller
              who loves designing games and creating immersive worlds. My
              background spans computer science, game engineering, and business,
              with a focus on product management and strategy.
            </p>
            <p className="about-copy__body">
              I enjoy turning ideas into immersive experiences that people
              remember. My work has ranged from engineering features for major
              video games to building digital products, developing independent
              games, and creating children’s stories.
            </p>
            <p className="about-copy__body">
              What connects everything I do is a curiosity about people and what
              makes an experience meaningful. I’m drawn to the intersection of
              technology, creativity, and business strategy, where I can
              understand people’s needs, solve complex problems, and bring
              ideas to life.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

const FRODO_PHOTOS = [
  {
    src: '/frodo/camping.jpg',
    alt: 'Frodo sitting in a camping chair beside a campfire in the woods',
  },
  {
    src: '/frodo/couch.jpg',
    alt: 'Frodo lying on a couch, looking toward the camera',
  },
  {
    src: '/frodo/park.jpg',
    alt: 'Frodo wearing a yellow coat at a dog park, tongue out',
  },
  {
    src: '/frodo/dragon.jpg',
    alt: 'Frodo on a bed with a teal dragon stuffed toy',
  },
  {
    src: '/frodo/smile.jpg',
    alt: 'Frodo on his back, smiling with his tongue out',
  },
]

function FrodoPage() {
  return (
    <div className="page page--secondary page--frodo">
      <FloatField items={ABOUT_SPARKLES} />
      <main className="frodo">
        <a
          className="frodo__back"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            navigate('/')
          }}
        >
          ← Back to workshop
        </a>
        <h1 className="frodo__title">
          <img
            src="/frodo-title.png"
            alt="Meet Frodo"
            width="975"
            height="242"
            draggable="false"
          />
        </h1>
        <ul className="frodo__gallery">
          {FRODO_PHOTOS.map((photo) => (
            <li key={photo.src}>
              <figure className="frodo__photo">
                <img src={photo.src} alt={photo.alt} />
              </figure>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

const STANLEY_PHOTOS = [
  {
    src: '/books/stanley-cover.jpg',
    alt: 'Stanley the Sea Lion cover by N.T. Miller',
    width: 568,
    height: 581,
  },
  {
    src: '/books/stanley-back.jpg',
    alt: 'Stanley the Sea Lion back cover and story blurb',
    width: 573,
    height: 578,
  },
]

const MIKHAEL_PHOTOS = [
  {
    src: '/books/mikhael-kaleidoscope.jpg',
    alt: 'Mikhael’s Kaleidoscope illustration of Mikhael and Grandma Sally',
    width: 1009,
    height: 1024,
  },
]

const ADVENTURE_PHOTOS = [
  {
    src: '/books/adventure-wip.jpg',
    alt: 'Work in Progress cover with a frog at a forked garden path',
    width: 682,
    height: 1024,
  },
]

function BookGallery({ photos, onOpen, label }) {
  const [index, setIndex] = useState(0)
  const photo = photos[index]
  const count = photos.length
  const scrollable = count > 1

  const show = (next) => {
    setIndex((next + count) % count)
  }

  return (
    <div className="book-gallery">
      <div className="book-gallery__stage">
        {scrollable ? (
          <button
            type="button"
            className="book-gallery__nav book-gallery__nav--prev"
            aria-label="Previous image"
            onClick={() => show(index - 1)}
          >
            ‹
          </button>
        ) : null}
        <button
          type="button"
          className="book-gallery__frame"
          aria-haspopup="dialog"
          aria-label={`View ${label} details`}
          onClick={onOpen}
          onKeyDown={(event) => {
            if (!scrollable) return
            if (event.key === 'ArrowLeft') {
              event.preventDefault()
              show(index - 1)
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              show(index + 1)
            }
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            draggable="false"
          />
        </button>
        {scrollable ? (
          <button
            type="button"
            className="book-gallery__nav book-gallery__nav--next"
            aria-label="Next image"
            onClick={() => show(index + 1)}
          >
            ›
          </button>
        ) : null}
      </div>
      {scrollable ? (
        <div className="book-gallery__dots">
          {photos.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              className={`book-gallery__dot${
                itemIndex === index ? ' book-gallery__dot--active' : ''
              }`}
              aria-label={`Show image ${itemIndex + 1} of ${count}`}
              aria-current={itemIndex === index ? 'true' : undefined}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function BookModal({ open, onClose, title, titleId, copyId, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const node = dialogRef.current
    if (!node) return
    if (open && !node.open) node.showModal()
    if (!open && node.open) node.close()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="book-modal"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={copyId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <div className="book-modal__panel">
        <button
          type="button"
          className="book-modal__close"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <h2 id={titleId} className="book-modal__title">
          {title}
        </h2>
        <div id={copyId} className="book-modal__copy">
          {children}
        </div>
      </div>
    </dialog>
  )
}

function BooksPage() {
  const [stanleyOpen, setStanleyOpen] = useState(false)
  const [mikhaelOpen, setMikhaelOpen] = useState(false)
  const [adventureOpen, setAdventureOpen] = useState(false)

  return (
    <div className="page page--secondary page--books">
      <FloatField items={ABOUT_SPARKLES} />
      <main className="books">
        <a
          className="books__back"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            navigate('/')
          }}
        >
          ← Back to workshop
        </a>
        <h1 className="books__title">
          <img
            src="/books-title.png"
            alt="Books"
            width="904"
            height="311"
            draggable="false"
          />
        </h1>
        <p className="books__intro">
          I love creating imaginative children’s stories filled with humor,
          heart, and a little bit of magic. Through playful characters and
          interactive adventures, I hope to create stories that children enjoy
          exploring and remember long after they finish reading.
        </p>
        <section className="books__section" aria-labelledby="books-published">
          <h2 id="books-published">Published</h2>
          <article className="book-product">
            <h3>Stanley the Sea Lion</h3>
            <BookGallery
              photos={STANLEY_PHOTOS}
              label="Stanley the Sea Lion"
              onOpen={() => setStanleyOpen(true)}
            />
          </article>
        </section>
        <section className="books__section" aria-labelledby="books-unpublished">
          <h2 id="books-unpublished">Unpublished</h2>
          <div className="books__list">
            <article className="book-product">
              <h3>Mikhael’s Kaleidoscope</h3>
              <BookGallery
                photos={MIKHAEL_PHOTOS}
                label="Mikhael’s Kaleidoscope"
                onOpen={() => setMikhaelOpen(true)}
              />
            </article>
            <article className="book-product">
              <h3>Work in Progress</h3>
              <BookGallery
                photos={ADVENTURE_PHOTOS}
                label="Work in Progress"
                onOpen={() => setAdventureOpen(true)}
              />
            </article>
          </div>
        </section>
      </main>
      <BookModal
        open={stanleyOpen}
        onClose={() => setStanleyOpen(false)}
        title="Stanley the Sea Lion"
        titleId="stanley-modal-title"
        copyId="stanley-modal-copy"
      >
        <p>Published under the pseudonym N.T.Miller on amazon.</p>
        <p>Role: Author and creator</p>
        <p>
          Stanley is a silly sea lion who thinks he’s a dog. From trying to
          bark to watching real dogs play on the beach, Stanley’s journey
          becomes a heartwarming lesson about self-acceptance and learning
          that it’s wonderful to be yourself.
        </p>
      </BookModal>
      <BookModal
        open={mikhaelOpen}
        onClose={() => setMikhaelOpen(false)}
        title="Mikhael’s Kaleidoscope"
        titleId="mikhael-modal-title"
        copyId="mikhael-modal-copy"
      >
        <p>Role: Author and creator</p>
        <p>Status: Unpublished</p>
        <p>
          Join Mikhael and his Grandma Sally as a magical kaleidoscope takes
          him on exciting adventures around the world. Along the way, Mikhael
          explores new places, discovers different experiences, and learns to
          see the world in colorful new ways.
        </p>
      </BookModal>
      <BookModal
        open={adventureOpen}
        onClose={() => setAdventureOpen(false)}
        title="Work in Progress"
        titleId="adventure-modal-title"
        copyId="adventure-modal-copy"
      >
        <p>Ages 4–7</p>
        <p>Role: Author, Creator, and Experience Designer</p>
        <p>Status: Work in Progress</p>
        <p>
          A magical backyard filled with glowing flowers becomes the beginning
          of an interactive adventure. Young readers make choices throughout
          the story, with each decision leading them down a different path.
        </p>
      </BookModal>
    </div>
  )
}

const NBA_2K_COVERS = [
  {
    src: '/games/2k23.png',
    href: 'https://nba.2k.com/2k23/',
    alt: 'NBA 2K23 cover art featuring Devin Booker',
    width: 452,
    height: 678,
  },
  {
    src: '/games/2k24.png',
    href: 'https://nba.2k.com/2k24/',
    alt: 'NBA 2K24 cover art featuring Kobe Bryant',
    width: 554,
    height: 554,
  },
  {
    src: '/games/2k25.png',
    href: 'https://nba.2k.com/2k25/',
    alt: 'NBA 2K25 cover art featuring Jayson Tatum',
    width: 452,
    height: 678,
  },
  {
    src: '/games/2k26.jpg',
    href: 'https://nba.2k.com/2k26/',
    alt: 'NBA 2K26 cover art featuring Shai Gilgeous-Alexander',
    width: 682,
    height: 1024,
  },
]

const OTHER_GAMES = [
  {
    title: 'Alice in Space',
    meta: 'Developer | C++',
    body: 'A console-based survival game in which players must find the right balance between shrinking and growing monsters to survive.',
    href: 'https://github.com/Chipz5/AliceInSpace',
  },
  {
    title: 'Juice N Honor',
    meta: 'Gameplay Engineer & Producer | Unreal Engine',
    body: 'A 3D deathmatch game for which I designed and implemented the character abilities and animation systems. I also managed project tracking and coordinated design updates and asset integration across the team.',
  },
  {
    title: 'Compulsions',
    meta: 'Gameplay Engineer | Unity · Android',
    body: 'A 3D serious game designed to help players better understand and empathize with people living with OCD. I programmed the character movement and interactive-object mechanics.',
    href: 'https://github.com/Chipz5/SeriousGame',
  },
  {
    title: 'Submariner',
    meta: 'Lead Designer | Phaser 3 · HTML5',
    body: 'A 2D arcade game inspired by Asteroids, in which the player must destroy giant alien jellyfish to escape an increasingly dangerous bloom.',
    href: 'https://github.com/Chipz5/Rapid-Prototype-Team-8',
  },
  {
    title: 'Truckin’ Along',
    meta: 'Lead Engineer | MonoGame',
    body: 'A pixel-art 2D side-scrolling game for which I led the engineering and oversaw technical development within the MonoGame framework.',
  },
]

function GamesPage() {
  const [hatOpen, setHatOpen] = useState(false)
  const [nestOpen, setNestOpen] = useState(false)

  return (
    <div className="page page--secondary page--games">
      <FloatField items={ABOUT_SPARKLES} />
      <main className="games">
        <a
          className="games__back"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            navigate('/')
          }}
        >
          ← Back to workshop
        </a>
        <h1 className="games__title">
          <img
            src="/games-title.png"
            alt="Games"
            width="960"
            height="285"
            draggable="false"
          />
        </h1>
        <p className="games__intro">
          Games are where my technical and creative interests come together. My
          work spans engineering gameplay systems for AAA titles and designing
          independent games that experiment with playful ideas and immersive
          experiences.
        </p>
        <section className="games__section" aria-labelledby="games-nba-2k">
          <h2 id="games-nba-2k">NBA 2K Series</h2>
          <p className="games__editions">
            NBA 2K23 · NBA 2K24 · NBA 2K25 · NBA 2K26
          </p>
          <p className="games__role">Gameplay Engineer — Visual Concepts</p>
          <p className="games__body">
            As a Gameplay Engineer at Visual Concepts, I contributed to four
            consecutive NBA 2K titles. My work focused primarily on shooting
            mechanics and the underlying shot systems, along with other gameplay
            features. I was credited on each released title.
          </p>
          <ul className="game-covers">
            {NBA_2K_COVERS.map((cover) => (
              <li key={cover.href}>
                <a
                  href={cover.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${cover.alt} (opens in a new tab)`}
                >
                  <img
                    src={cover.src}
                    alt=""
                    width={cover.width}
                    height={cover.height}
                    draggable="false"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="games__section" aria-labelledby="games-weird-hat">
          <h2 id="games-weird-hat">Weird Hat Fight</h2>
          <article className="game-product">
            <button
              type="button"
              className="game-card"
              aria-haspopup="dialog"
              aria-label="View Weird Hat Fight details"
              onClick={() => setHatOpen(true)}
            >
              <img
                src="/games/weird-hat-fight.png"
                alt="Weird Hat Fight cover art"
                width="460"
                height="215"
                draggable="false"
              />
            </button>
          </article>
        </section>
        <section className="games__section" aria-labelledby="games-shadownest">
          <h2 id="games-shadownest">Shadownest</h2>
          <article className="game-product">
            <button
              type="button"
              className="game-card"
              aria-haspopup="dialog"
              aria-label="View Shadownest details"
              onClick={() => setNestOpen(true)}
            >
              <img
                src="/games/shadownest.png"
                alt="Shadownest cover art"
                width="460"
                height="215"
                draggable="false"
              />
            </button>
          </article>
        </section>
        <section
          className="games__section games__section--other"
          aria-labelledby="games-other"
        >
          <h2 id="games-other">Other Games</h2>
          <ul className="other-games">
            {OTHER_GAMES.map((game) => (
              <li key={game.title} className="other-game">
                <h3>{game.title}</h3>
                <p className="other-game__meta">{game.meta}</p>
                <p className="other-game__body">{game.body}</p>
                {game.href ? (
                  <a
                    className="other-game__code"
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <BookModal
        open={hatOpen}
        onClose={() => setHatOpen(false)}
        title="Weird Hat Fight"
        titleId="weird-hat-modal-title"
        copyId="weird-hat-modal-copy"
      >
        <p>Engine: Unity</p>
        <p>Players: 2–4</p>
        <p>Release status: Published on Steam</p>
        <p>Platform: PC</p>
        <p>Role: Gameplay & Animation Engineer</p>
        <p>
          Weird Hat Fight is a competitive party game where two to four players
          use magical hats and their unique abilities to battle inside colorful
          arenas. As the Gameplay and Animation Engineer, I designed and
          implemented the hat-based ability system that became the game’s
          central mechanic. I also led the development of the player animation
          systems, including ragdoll physics, and helped prepare the game for
          distribution through Steam and Itch.io.
        </p>
        <a
          className="book-modal__action"
          href="https://store.steampowered.com/app/1883820/Weird_Hat_Fight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play on Steam
        </a>
      </BookModal>
      <BookModal
        open={nestOpen}
        onClose={() => setNestOpen(false)}
        title="Shadownest"
        titleId="shadownest-modal-title"
        copyId="shadownest-modal-copy"
      >
        <p>Engine: Unity</p>
        <p>Genre: Asymmetric multiplayer survival horror</p>
        <p>Players: Four-player online multiplayer</p>
        <p>Release status: Published</p>
        <p>Role: Lead Gameplay Engineer</p>
        <p>
          Shadownest is an asymmetric multiplayer horror game in which three
          scientists attempt to escape an underground cave while a fourth player
          hunts them as a shadow-dwelling monster. As Lead Gameplay Engineer, I
          built the game’s core system architecture, implemented its networked
          multiplayer functionality, and developed responsive character movement
          for both sides of the competitive experience. I also helped lead the
          title through development and its eventual release on Steam.
        </p>
        <a
          className="book-modal__action"
          href="https://store.steampowered.com/app/1592180/Shadownest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play on Steam
        </a>
      </BookModal>
    </div>
  )
}

const CAREER_TRACK_PHOTOS = [
  {
    src: '/products/board.png',
            alt: 'Career Track My Board kanban with job applications across wishlist, applied, follow-up, interviewing, and offer',
    width: 1024,
    height: 361,
  },
  {
    src: '/products/networking.png',
            alt: 'Career Track Networking page with contact cards across companies',
    width: 1024,
    height: 546,
  },
  {
    src: '/products/insights.png',
            alt: 'Career Track Community Insights feed of anonymous interview questions, timelines, and tips',
    width: 1024,
    height: 613,
  },
  {
    src: '/products/analytics.png',
            alt: 'Career Track Analytics dashboard with recruiting funnel and conversion rates',
    width: 1024,
    height: 687,
  },
  {
    src: '/products/feedback.png',
            alt: 'Career Track Feedback AI interview coach with conversation prompts',
    width: 1024,
    height: 710,
  },
]

const AROUND_THE_WORLD_PHOTOS = [
  {
    src: '/products/around-the-world.png',
    alt: 'Around the World Daily news dashboard with location curator, local dispatches, and international headlines',
    width: 679,
    height: 777,
  },
]

const MAP_LAYER_PHOTOS = [
  {
    src: '/products/map-layer.jpg',
    alt: 'Personalized Map Layer concept comparing a cluttered standard map with a highlighted favorite café nearby',
    width: 1024,
    height: 576,
  },
]

function ProductsPage() {
  const [careerTrackOpen, setCareerTrackOpen] = useState(false)
  const [aroundWorldOpen, setAroundWorldOpen] = useState(false)
  const [mapLayerOpen, setMapLayerOpen] = useState(false)
  const [lastWarOpen, setLastWarOpen] = useState(false)

  return (
    <div className="page page--secondary page--products">
      <FloatField items={ABOUT_SPARKLES} />
      <main className="products">
        <a
          className="products__back"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            navigate('/')
          }}
        >
          ← Back to workshop
        </a>
        <h1 className="products__title">
          <img
            src="/products-title.png"
            alt="Products"
            width="955"
            height="270"
            draggable="false"
          />
        </h1>
        <p className="products__intro">
          I build products by starting with real user problems and turning them
          into practical, thoughtful experiences. My projects combine user
          research, product strategy, technical development, and continuous
          iteration, all the way from early ideas to working products used by
          real people.
        </p>
        <section className="products__section" aria-labelledby="products-career-track">
          <article className="product-item">
            <h2 id="products-career-track">Career Track</h2>
            <p className="products__role">
              Product Co-Creator & Lead Developer
            </p>
            <BookGallery
              photos={CAREER_TRACK_PHOTOS}
              label="Career Track"
              onOpen={() => setCareerTrackOpen(true)}
            />
          </article>
        </section>
        <section
          className="products__section"
          aria-labelledby="products-around-the-world"
        >
          <article className="product-item">
            <h2 id="products-around-the-world">Around the World Daily</h2>
            <p className="products__role">
              Independent Creator & Product Designer
            </p>
            <BookGallery
              photos={AROUND_THE_WORLD_PHOTOS}
              label="Around the World Daily"
              onOpen={() => setAroundWorldOpen(true)}
            />
          </article>
        </section>
        <section
          className="products__section"
          aria-labelledby="products-map-layer"
        >
          <article className="product-item">
            <h2 id="products-map-layer">Personalized Map Layer</h2>
            <p className="products__role">Product Concept</p>
            <BookGallery
              photos={MAP_LAYER_PHOTOS}
              label="Personalized Map Layer"
              onOpen={() => setMapLayerOpen(true)}
            />
          </article>
        </section>
        <section
          className="products__section products__section--other"
          aria-labelledby="products-other"
        >
          <h2 id="products-other">Other Product Work</h2>
          <ul className="other-products">
            <li className="other-product other-product--teardown">
              <button
                type="button"
                className="other-product__hit"
                aria-haspopup="dialog"
                aria-label="View Last War: Survival — Product Teardown details"
                onClick={() => setLastWarOpen(true)}
              >
                <span className="other-product__award">First Place</span>
                <img
                  src="/products/last-war.jpg"
                  alt="Last War: Survival product teardown with mobile gameplay and key art"
                  width="1024"
                  height="501"
                  draggable="false"
                />
                <span className="other-product__copy">
                  <h3>Last War: Survival — Product Teardown</h3>
                </span>
              </button>
            </li>
            <li className="other-product">
              <h3>Gamified Task Tracker</h3>
              <p className="other-product__meta">Product Concept</p>
              <p className="other-product__body">
                A productivity tool designed to make large goals feel more
                achievable. Users break a goal into smaller tasks, assign points
                based on effort or importance, and earn the final reward only
                after completing the required tasks.
              </p>
              <p className="other-product__focus">
                Focus: Gamification, goal setting, and behavior design
              </p>
            </li>
            <li className="other-product">
              <h3>KinPulse</h3>
              <p className="other-product__meta">Product Concept</p>
              <p className="other-product__body">
                KinPulse helps people maintain meaningful relationships by
                tracking how often they interact with important contacts. Users
                choose a communication frequency for each person, eg: calling an
                aunt once a month, and receive reminders when it is time to
                reconnect.
              </p>
              <p className="other-product__focus">
                Focus: Relationship management, personalized reminders, and
                habit building
              </p>
            </li>
          </ul>
        </section>
      </main>
      <BookModal
        open={careerTrackOpen}
        onClose={() => setCareerTrackOpen(false)}
        title="Career Track"
        titleId="career-track-modal-title"
        copyId="career-track-modal-copy"
      >
        <p>Role: Product Co-Creator & Lead Developer</p>
        <p>Team: Three people</p>
        <p>Users: MBA students</p>
        <p>Status: Launched and iterating</p>
        <p>
          USC Career Track is a job-search and networking platform that I
          co-created with two teammates for MBA students. It brings applications,
          professional contacts, interview insights, analytics, and AI-powered
          career support into one place, helping students manage a process that
          is often spread across spreadsheets, notes, and disconnected tools.
        </p>
        <h3>The Problem</h3>
        <p>
          MBA students manage numerous job applications while also conducting
          coffee chats, requesting referrals, preparing for interviews, and
          keeping track of follow-ups. Many rely on spreadsheets, making it
          difficult to connect their applications with the people they meet,
          understand their progress, and determine what to do next.
        </p>
        <h3>The Solution</h3>
        <p>
          We designed USC Career Track as a centralized workspace where students
          can manage their job-search pipeline, organize networking
          relationships, learn from their peers, and receive personalized
          guidance based on their activity.
        </p>
        <h3>Core Features</h3>
        <ul>
          <li>
            <strong>Application Board:</strong> Tracks opportunities from
            wishlist through offer using a visual pipeline.
          </li>
          <li>
            <strong>Networking Hub:</strong> Organizes contacts and connects
            relationships to relevant companies and applications.
          </li>
          <li>
            <strong>Community Insights:</strong> Allows students to anonymously
            share interview questions, timelines, experiences, and advice.
          </li>
          <li>
            <strong>Analytics:</strong> Turns application activity into
            conversion rates, pipeline trends, and actionable job-search
            insights.
          </li>
          <li>
            <strong>Feedback AI:</strong> Provides interview practice,
            personalized recommendations, email assistance, and
            skill-development guidance.
          </li>
        </ul>
        <h3>Product Development and Iteration</h3>
        <p>
          Working with two teammates, I helped shape the product concept and led
          most of its development. We built and launched the initial product
          during the summer and introduced it to approximately 30 students in
          our MBA cohort. Early feedback was positive, although some users felt
          overwhelmed by the number of features and others wanted more
          personalized AI support. In response, I led the addition of
          AI-assisted guidance while continuing to refine how its features are
          organized and introduced to new users.
        </p>
        <h3>Current Status</h3>
        <p>
          The product has been released to our MBA cohort and is currently being
          refined based on user feedback. My next priorities are simplifying
          onboarding, improving feature discoverability, and increasing adoption
          among students.
        </p>
        <div className="book-modal__actions">
          <a
            className="book-modal__action"
            href="https://usccareertrack.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live product
          </a>
          <a
            className="book-modal__action"
            href="https://career-track-165303940083.us-east1.run.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View prototype
          </a>
        </div>
      </BookModal>
      <BookModal
        open={aroundWorldOpen}
        onClose={() => setAroundWorldOpen(false)}
        title="Around the World Daily"
        titleId="around-the-world-modal-title"
        copyId="around-the-world-modal-copy"
      >
        <p>Role: Independent Creator & Product Designer</p>
        <p>Platform: Google AI Studio</p>
        <p>Status: Interactive prototype</p>
        <p>
          AroundTheWorld Daily is an interactive news-dashboard prototype that
          allows users to build a personalized feed around changing global and
          local interests. Instead of committing to one permanent location,
          users can follow news from any combination of villages, towns, cities,
          states, or countries and update those locations whenever their
          interests change.
        </p>
        <h3>The Problem</h3>
        <p>
          Traditional news aggregators often organize local coverage around a
          single fixed location. This creates friction for people whose
          interests span multiple—and frequently changing—parts of the world,
          such as international students, expatriates, global business
          professionals, and frequent travelers.
        </p>
        <h3>The Solution</h3>
        <p>
          I designed a modular dashboard that combines international headlines
          with news from locations selected by the user. Readers can also filter
          stories by topic, explore articles without leaving the page, and
          switch between light and dark modes.
        </p>
        <div className="book-modal__actions">
          <a
            className="book-modal__action"
            href="https://aroundtheworld-daily-165303940083.us-east1.run.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Prototype
          </a>
        </div>
      </BookModal>
      <BookModal
        open={mapLayerOpen}
        onClose={() => setMapLayerOpen(false)}
        title="Personalized Map Layer"
        titleId="map-layer-modal-title"
        copyId="map-layer-modal-copy"
      >
        <p>Product Concept</p>
        <p>
          Personalized Map Layer is a proposed Google Maps feature that helps
          users notice the places they already care about while traveling. When
          enabled, it reduces visual clutter, highlights saved and preferred
          locations, and alerts users when a relevant place is nearby.
        </p>
        <h3>The Problem</h3>
        <p>
          During navigation, every commercial pin competes for attention. Users
          may drive or walk directly past a favorite restaurant, store, or
          routine destination without realizing it is nearby—even when Google
          already has signals about their preferences.
        </p>
        <h3>The Solution</h3>
        <p>
          Users can enable a personalized layer that prioritizes favorite
          locations while dimming less relevant map markers. Nearby saved
          locations receive a visual highlight and contextual card, allowing
          users to add them as stops without interrupting navigation.
        </p>
      </BookModal>
      <BookModal
        open={lastWarOpen}
        onClose={() => setLastWarOpen(false)}
        title="Last War: Survival — Product Teardown"
        titleId="last-war-modal-title"
        copyId="last-war-modal-copy"
      >
        <p>First Place — MIGA Video Game Teardown</p>
        <p>
          I conducted a strategic teardown of Last War: Survival, examining its
          core gameplay mechanics, player experience, market positioning, and
          monetization strategy. The analysis demonstrated how the game’s
          systems work together to attract, engage, and monetize players.
        </p>
        <p>
          Focus: Game strategy, market analysis, mechanics, and monetization
        </p>
        <p>Recognition: First place</p>
      </BookModal>
    </div>
  )
}

export default function App() {
  const path = usePathname()
  if (path === '/books') return <BooksPage />
  if (path === '/about') return <AboutPage />
  if (path === '/frodo') return <FrodoPage />
  if (path === '/products') return <ProductsPage />
  if (path === '/games') return <GamesPage />
  return <WorkshopScene />
}

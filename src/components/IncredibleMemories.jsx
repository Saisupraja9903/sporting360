import { useState, useRef, useEffect } from "react";
import {
  FaSearchPlus,
  FaLink,
  FaExpand,
  FaCompress,
  FaSearch,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaDownload,
  FaPinterestP,
} from "react-icons/fa";
import memories1 from "../assets/Memories/02.jpg";
import memories2 from "../assets/Memories/03.jpg";
import memories3 from "../assets/Memories/04.jpg";
import memories4 from "../assets/Memories/05.jpg";
import memories5 from "../assets/Memories/06.jpg";
import memories6 from "../assets/Memories/07.jpg";

export default function IncredibleMemories() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [showShare, setShowShare] = useState(false);

  const popupRef = useRef(null);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[selectedImage].src;
    link.download = "sporting360-image.jpg";
    link.click();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      popupRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  const images = [
    {
      src: memories2,
      title: "Fighter",
    },
    {
      src: memories5,
      title: "Hockey",
    },
    {
      src: memories4,
      title: "Basketball",
    },
    {
      src: memories1,
      title: "Sports",
    },
    {
      src: memories3,
      title: "Champions",
    },
    {
      src: memories6,
      title: "Martial Arts",
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[420px_1fr] gap-14 items-start">
            {/* LEFT CONTENT */}
            <div className="pt-24 pl-24">
              <h2
                className="
                  text-[20px]
                  lg:text-[25px]
                  leading-[0.95]
                  font-extrabold
                  text-[#25256b]
                  mb-8
                "
              >
                Incredible Memories
                <br />
                In Sporting360
              </h2>

              <p
                className="
                  text-[15px]
                  leading-[1.6]
                  text-gray-600
                  max-w-[350px]
                  mb-10
                "
              >
                Celebrate victories, build lasting friendships, and create
                unforgettable moments on and off the field.
                <br />
                <br />
                At Sporting360, every training session and event becomes a
                memory worth keeping.
              </p>
              <a href="#">
                <button
                  className="
                  bg-[#0BCB63]
                  hover:bg-[#09b55a]
                  transition
                  px-6
                  py-3
                  text-white
                  underline
                  transition hover:bg-[#0b234d]
                  text-[15px]
                  font-bold
                "
                >
                  Join Our Club
                </button>
              </a>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((item, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="
                      w-full
                      h-[280px]
                      object-cover
                    "
                  />

                  {/* HOVER OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-[#23408f]/60
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-300
                      flex
                      flex-col
                      items-center
                      justify-center
                    "
                  >
                    <h3 className="text-white text-[22px] font-bold mb-6">
                      {item.title}
                    </h3>

                    <div className="flex gap-5">
                      {/* ZOOM */}
                      <button
                        onClick={() => setSelectedImage(index)}
                        className="
                          w-14 h-14
                          rounded-full
                          bg-white/80
                          flex items-center justify-center
                        "
                      >
                        <FaSearchPlus size={18} className="text-[#0BCB63]" />
                      </button>

                      {/* LINK */}
                      {/* <button
                        className="
                          w-14 h-14
                          rounded-full
                          bg-white/80
                          flex items-center justify-center
                        "
                      >
                        <FaLink
                          size={18}
                          className="text-[#0BCB63]"
                        />
                      </button> */}
                      <a href="#">
                        <button
                          className="
      w-14 h-14
      rounded-full
      bg-white/80
      flex items-center justify-center
    "
                        >
                          <FaLink size={18} className="text-[#0BCB63]" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE POPUP */}
      {selectedImage !== null && (
        <div ref={popupRef} className="fixed inset-0 bg-black/85 z-[9999]">
          {/* TOP BAR */}

          <div className="h-[60px] bg-[#005500] flex items-center justify-between px-6">
            <span className="text-white text-[20px] font-semibold">
              {selectedImage + 1} / {images.length}
            </span>

            <div className="flex items-center gap-6 relative">
              {/* FULLSCREEN */}

              <button
                onClick={toggleFullscreen}
                className="text-white text-1xl"
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>

              {/* ZOOM */}
              <button
                onClick={() =>
                  setZoom((prev) => (prev >= 2.5 ? 1 : prev + 0.3))
                }
                className="text-white text-1xl"
              >
                <FaSearch />
              </button>

              {/* SHARE */}
              <button
                onClick={() => setShowShare(!showShare)}
                className="text-white text-1xl"
              >
                <FaShareAlt />
              </button>

              {/* SHARE MENU */}
              {showShare && (
                <div
                  className="
          absolute
          right-16
          top-12
          bg-white
          rounded-md
          shadow-xl
          p-3
          flex
          gap-3
        "
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href,
                    )}&media=${encodeURIComponent(
                      images[selectedImage].src,
                    )}&description=${encodeURIComponent(
                      images[selectedImage].title,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center"
                  >
                    <FaPinterestP />
                  </a>

                  <button
                    onClick={downloadImage}
                    className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center"
                  >
                    <FaDownload />
                  </button>
                </div>
              )}

              {/* CLOSE */}
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-3xl leading-none"
              >
                ×
              </button>
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prevImage}
            className="
        absolute
        left-8
        top-1/2
        -translate-y-1/2
        text-white
        text-4xl
        z-10
      "
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextImage}
            className="
        absolute
        right-8
        top-1/2
        -translate-y-1/2
        text-white
        text-4xl
        z-10
      "
          >
            ›
          </button>

          {/* IMAGE */}

          <div
            className={`
    flex justify-center items-center
    h-[calc(100vh-70px)]
    overflow-hidden
  `}
          >
            <img
              src={images[selectedImage].src}
              alt=""
              style={{
                transform: `scale(${zoom})`,
                transition: "0.3s ease",
              }}
              className={`
    object-contain
    shadow-2xl
    ${isFullscreen ? "max-w-[95vw] max-h-[90vh]" : "max-w-[500px] max-h-[70vh]"}
  `}
            />
          </div>
        </div>
      )}
    </>
  );
}

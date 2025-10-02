import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
        {/* Glowing light strips */}
        <div className="absolute inset-0">
          <div className="absolute w-[200%] h-[24px] bg-white/90 rotate-12 top-1/3 -left-1/2 blur-2xl animate-pulse"></div>
          <div className="absolute w-[200%] h-[24px] bg-white/90 -rotate-12 top-2/3 -left-1/2 blur-2xl animate-pulse"></div>
        </div>
  
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Controller with image inside */}
          <div className="mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-40 h-40 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            >
              <defs>
                <clipPath id="controller-clip">
                  <path d="M48 12H16a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12l8-8h16l8 8a12 12 0 0 0 12-12V24a12 12 0 0 0-12-12z" />
                </clipPath>
              </defs>
  
              {/* Your image inside controller shape */}
              <image
                href="/img/gallery-5.webp"
                width="64"
                height="64"
                clipPath="url(#controller-clip)"
                preserveAspectRatio="xMidYMid slice"
              />
  
              {/* White outline */}
              <path
                d="M48 12H16a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12l8-8h16l8 8a12 12 0 0 0 12-12V24a12 12 0 0 0-12-12z"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
  
          {/* 404 Text */}
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            404
          </h1>
          <p className="text-gray-400 mt-3 mb-8 text-lg">
            Controller disconnected... Page not found.
          </p>
  
          {/* Back Button */}
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
// Tailwind css
/** ***********************************************
 * *** ---> Handling Hover, Focus, and Other States
 * ------------------------------------------------
 * Pseudo-classes        => :hover, :focus, :first-child, active and :required
 * Pseudo-elements       => ::before, ::after, ::placeholder, and ::selection
 * Media queries         =>responsive breakpoints, dark mode, and prefers-reduced-motion
 * Attribute selectors   => [dir="rtl"] and [open]
 * -> Tailwind also includes modifiers for other form states like => :disabled, :read-only, :indeterminate, :checked, and more.
 *
 *
 * *** ---> Responsive Design
 * --------------------------
 * sm	=> 640px	=> @media (min-width: 640px) { ... }
 * md	=> 768px	=> @media (min-width: 768px) { ... }
 * lg	=> 1024px	=> @media (min-width: 1024px) { ... }
 * xl	=> 1280px	=> @media (min-width: 1280px) { ... }
 * 2xl	=> 1536px	=> @media (min-width: 1536px) { ... }
 *
 *
 * *** ---> Dark Mode
 * dark: bg-scale-600;
 * tailwind.config.js =>
 * module.exports = {
 *  darkMode: 'class',
 * }
 *  // class => enable;
 *  // media => disabled;
 *
 * *** ---> Aspect Ratio
 * aspect-auto	    => aspect-ratio: auto;
 * aspect-square    => aspect-ratio: 1 / 1;
 * aspect-video	    => aspect-ratio: 16 / 9;
 *
 *
 * *** ---> Container
 * None	width: 100%;
 * sm (640px)	max-width: 640px;
 * md (768px)	max-width: 768px;
 * lg (1024px)	max-width: 1024px;
 * xl (1280px)	max-width: 1280px;
 * 2xl (1536px)	max-width: 1536px;
 *
 *
 * *** ---> Visibility
 * visible	    visibility: visible;
 * invisible	visibility: hidden;
 *
 *
 * *** ---> Z-Index
 * z-0	    z-index: 0;
 * z-10	    z-index: 10;
 * z-20	    z-index: 20;
 * z-30	    z-index: 30;
 * z-40	    z-index: 40;
 * z-50	    z-index: 50;
 * z-auto	z-index: auto;
 *
 *
 * *** --->Min-Width & Max-Width
 * min-w-0	    min-width: 0px;
 * min-w-full	min-width: 100%;
 * min-w-min	min-width: min-content;
 * min-w-max	min-width: max-content;
 * min-w-fit	min-width: fit-content;
 * -- ...
 * max-w-full	max-width: 100%;
 *
 *
 * *** ---> Min-Height
 * min-h-0	min-height: 0px;
 * min-h-full	min-height: 100%;
 * min-h-screen	min-height: 100vh;
 * min-h-min	min-height: min-content;
 * min-h-max	min-height: max-content;
 * min-h-fit	min-height: fit-content;
 * -- ...
 * max-h-full	max-height: 100%;
 * max-h-screen	max-height: 100vh;
 *
 *
 *
 * *** ---> Background Attachment
 * bg-fixed	    background-attachment: fixed;
 * bg-local	    background-attachment: local;
 * bg-scroll	background-attachment: scroll;
 *  -- ... (Background Size)
 * bg-auto	    background-size: auto;
 * bg-cover	    background-size: cover;
 * bg-contain	background-size: contain;
 *
 *
 * *** ---> Border Radius
 * rounded-none	border-radius: 0px;
 * rounded-sm	border-radius: 0.125rem;    /* 2px * /
 * rounded	    border-radius: 0.25rem;     /* 4px * /
 * rounded-md	border-radius: 0.375rem;    /* 6px * /
 * rounded-lg	border-radius: 0.5rem;      /* 8px * /
 * rounded-xl	border-radius: 0.75rem;     /* 12px * /
 * rounded-2xl	border-radius: 1rem;        /* 16px * /
 * rounded-3xl	border-radius: 1.5rem;      /* 24px * /
 * rounded-full	border-radius: 9999px;      (50%)
 *
 *
 * *** ---> Outline Offset
 * outline-offset-0	outline-offset: 0px;
 * outline-offset-1	outline-offset: 1px;
 * outline-offset-2	outline-offset: 2px;
 * outline-offset-4	outline-offset: 4px;
 * outline-offset-8	outline-offset: 8px;
 *
 *
 * *** ---> Ring Width
 * ring-offset-2 ring-2
 *
 *
 *
 * *** ---> Box shadow
 * shadow-gray-50
 *
 *
 * *** ---> Opacity
 * opacity-(0-100)
 *
 *
 *
 * *** ---> Mix Blend Mode
 * mix-blend-hue
 * mix-blend-color
 *
 *
 *
 * *** ---> Background Blend Mode
 * bg-blend-screen
 *
 *
 *
 *
 * *** ---> Blur
 * blur => blur(8px)
 * blur-sm => blur(4px)
 *
 *
 *
 *
 *
 *
 *  -- -- -- -- -- -- -- -- -- -- -- -- - - - -
 *  -- -- -- -- -- -- -- -- -- -- -- -- - - - -
 * ***********  Text decoration  ***************
 * first-letter: text-2xl;
 * first-letter: text-blue-600;
 * selection: bg-red;
 * ltr:ml-3 rtl:mr-3;
 *
 *
 * ***********  Input decoration  ***************
 * after: content-['*'];
 * after: ml-1;
 *
 *
 * ***********  Color ----------  ***************
 * shadow-blue-500/30;
 *
 *
 * ***********  Print decoration  ***************
 * print: text:red;
 *
 *
 * ***********  snap decoration  ***************
 * (scroll on x axios)
 * parent div => snap-x
 * child div => snap-center
 *
 *
 * ***********  Scroll & scroll-margin ***************
 * html => scroll-smooth
 * scroll-mt-14;
 *
 *
 * ***********  Column decoration  ***************
 * parent div => columns-3 columns-xm-2
 *
 *
 * ***********  Underline  decoration  ***************
 * underline decoration-gray; decoration-2;
 *
 *
 *
 *
 * */

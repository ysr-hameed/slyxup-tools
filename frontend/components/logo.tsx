"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        viewBox="0 0 512 512"
        aria-hidden="true"
        className="size-8 shrink-0"
        fill="none"
      >
        <defs>
          <linearGradient
            id="logo-teal"
            x1="105"
            y1="415"
            x2="405"
            y2="85"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--logo-teal-0)" />
            <stop offset="0.38" stopColor="var(--logo-teal-38)" />
            <stop offset="0.72" stopColor="var(--logo-teal-72)" />
            <stop offset="1" stopColor="var(--logo-teal-100)" />
          </linearGradient>
          <linearGradient
            id="logo-top"
            x1="120"
            y1="105"
            x2="370"
            y2="270"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--logo-top-0)" />
            <stop offset="0.52" stopColor="var(--logo-top-52)" />
            <stop offset="1" stopColor="var(--logo-top-100)" />
          </linearGradient>
          <linearGradient
            id="logo-bottom"
            x1="125"
            y1="400"
            x2="340"
            y2="245"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--logo-bottom-0)" />
            <stop offset="0.5" stopColor="var(--logo-bottom-50)" />
            <stop offset="1" stopColor="var(--logo-bottom-100)" />
          </linearGradient>
        </defs>

        <path
          d="M368 91 C329 68 274 64 220 77 C165 90 124 121 111 160 C96 202 112 239 151 266 C170 279 194 291 218 303 C234 311 243 320 241 331 C239 343 225 348 210 343 C191 337 174 327 157 318 L113 370 C132 385 151 398 173 408 C219 430 273 426 305 397 C337 369 342 327 320 294 C304 269 278 251 247 235 L201 211 C185 202 178 193 182 182 C187 167 204 157 224 155 C258 151 291 160 321 182 L368 91 Z"
          fill="url(#logo-teal)"
        />
        <path
          d="M368 91 C335 72 294 66 255 72 C208 78 169 96 141 123 C121 143 112 166 111 188 C109 220 126 246 157 267 C176 279 198 289 219 301 L247 235 L201 211 C185 202 178 193 182 182 C187 167 204 157 224 155 C258 151 291 160 321 182 Z"
          fill="url(#logo-top)"
        />
        <path
          d="M368 91 L321 182 C335 193 347 203 356 214 C365 197 373 179 379 160 C385 137 382 111 368 91 Z"
          fill="var(--logo-tip)"
        />
        <path
          d="M247 235 C276 250 300 267 317 291 C340 323 335 365 304 395 C272 426 219 430 173 408 C151 398 132 385 113 370 L157 318 C174 327 191 337 210 343 C225 348 239 343 241 331 C243 320 234 311 218 303 C199 293 177 281 157 267 Z"
          fill="url(#logo-bottom)"
        />
        <path
          d="M201 211 C218 220 237 230 254 238 C281 251 302 267 316 286 L291 311 C278 294 259 280 239 270 L198 249 C188 244 181 239 176 234 Z"
          fill="var(--logo-inner)"
          opacity="0.92"
        />
        <path
          d="M254 238 C276 249 297 264 311 280 L291 300 C276 285 260 275 241 266 Z"
          fill="var(--logo-accent)"
          opacity="0.9"
        />
        <path
          d="M157 318 L113 370 C126 380 139 388 153 395 L177 356 Z"
          fill="var(--logo-tail)"
          opacity="0.65"
        />
        <path
          d="M368 91 L350 127"
          stroke="#D9FFFC"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.72"
        />
        <circle cx="368" cy="91" r="6" fill="#E8FFFD" />
      </svg>
      {showText && (
        <span className="font-heading text-lg font-semibold tracking-tight">
          Slyxup <span className="text-gradient">Tools</span>
        </span>
      )}
    </Link>
  );
}
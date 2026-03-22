# Design System Specification: The Academic Aura

## 1. Overview & Creative North Star
This design system is built to transform the often-tedious process of language acquisition into an elite, editorial experience. Our Creative North Star is **"The Intelligent Atelier."** 

We move beyond the "gamified" aesthetic of typical learning apps. Instead of loud colors and heavy borders, we embrace a high-end, minimalist workspace. The experience should feel like a bespoke digital tutor: sophisticated, calm, and deeply intentional. We break the standard mobile grid through **intentional asymmetry**—using staggered card layouts and high-contrast typography scales (the "Plus Jakarta Sans" headers against "Inter" body copy) to create a sense of rhythm and forward motion.

## 2. Colors & Surface Philosophy
The palette centers on a high-trust Vibrant Indigo (`primary: #3525cd`), supported by the refreshing Mint (`secondary: #006b5f`) and motivating Amber (`tertiary: #684000`).

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined solely through:
*   **Tonal Shifts:** Placing a `surface-container-low` component on a `surface` background.
*   **Negative Space:** Using the `12` (4rem) or `16` (5.5rem) spacing tokens to create natural breathing room between concepts.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine stationery.
*   **Base:** `surface` (#fcf8ff)
*   **Sectioning:** `surface-container-low` (#f5f2ff)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clarity.
*   **Overlays/Modals:** `surface-container-high` (#eae6f4) to pull the user's focus inward.

### The "Glass & Signature Gradient" Rule
For hero states (like "Lesson Complete" or "AI Voice Active"), use a linear gradient from `primary` (#3525cd) to `primary-container` (#4f46e5) at a 135-degree angle. Floating elements over these backgrounds should utilize **Glassmorphism**: a background of `surface/40%` with a `24px` backdrop-blur.

## 3. Typography
We utilize a dual-typeface system to balance authority with readability.

*   **Display & Headlines (Plus Jakarta Sans):** Used for "Moments of Achievement" and Lesson Titles. The generous x-height and geometric curves feel modern and confident.
    *   *Display-LG:* 3.5rem (Use for big progress numbers like "95%")
    *   *Headline-MD:* 1.75rem (Use for lesson titles)
*   **Body & Labels (Inter):** Optimized for long-form reading and vocabulary definitions.
    *   *Body-LG:* 1rem (Standard reading size)
    *   *Label-MD:* 0.75rem (All-caps with 0.05em tracking for UI metadata)

## 4. Elevation & Depth
We eschew "Material" style drop shadows in favor of **Ambient Tonal Layering**.

*   **The Layering Principle:** Rather than adding a shadow to a card, place a `surface-container-lowest` (#ffffff) card on top of a `surface-container` (#f0ecf9) background. The delta in luminance creates a cleaner "lift."
*   **Ambient Shadows:** If a floating action button (FAB) or high-priority modal requires a shadow, use: `color: on-surface / 6%`, `blur: 32px`, `y-offset: 8px`. Never use pure black or grey; always tint the shadow with the surface hue.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline-variant` (#c7c4d8) at **20% opacity**.

## 5. Components

### Buttons & CTAs
*   **Primary:** Background: `primary` (#3525cd); Text: `on-primary` (#ffffff); Radius: `xl` (1.5rem). Use a subtle 2px inner-shadow (white at 15% opacity) on the top edge to give it a "pressed" premium feel.
*   **Secondary (Progress-focused):** Background: `secondary-container` (#62fae3); Text: `on-secondary-container` (#007165). Use for "Next Step" or "Submit."

### Learning Cards
*   **The Card Rule:** No dividers. Separate the word, the phonetic spelling, and the definition using the `3` (1rem) spacing token.
*   **Shape:** Always use `lg` (1rem) or `xl` (1.5rem) corner radius.

### Input Fields (AI Chat)
*   Avoid the "box" look. Use a `surface-container-highest` background with no border. 
*   **State Change:** On focus, transition the background color to `primary-fixed` (#e2dfff) and change the text color to `on-primary-fixed` (#00201c).

### Progress Indicators
*   Use `secondary-fixed` (#62fae3) for the "fill" and `surface-variant` (#e4e1ee) for the "track." The transition should be an elastic ease-out animation to feel "motivating."

### Chips (Vocabulary Tags)
*   Selection chips should use the `tertiary-fixed` (#ffddb8) background for highlights. This "Warm Amber" acts as a highlighter pen, drawing the eye to key grammatical points.

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetric Padding:** Try giving the top of a container `spacing-8` and the bottom `spacing-12` to create a modern, editorial "weighted" look.
*   **Leverage Soft Mint:** Use `secondary` for all "Success" states. It is less alarming than traditional green and feels more "educational."
*   **Embrace Whitespace:** If a screen feels "busy," increase the `spacing` token rather than adding a divider line.

### Don’t:
*   **Don't use 100% Black:** Always use `on-surface` (#1b1b24) for text to keep the "Lightweight" feel.
*   **Don't use hard corners:** Never use a radius smaller than `md` (0.75rem) unless it's for a tiny tag.
*   **Don't use standard shadows:** Avoid `0, 0, 4px, #000`. It cheapens the AI-powered premium brand. Use the Ambient Shadow spec instead.
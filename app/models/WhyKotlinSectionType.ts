import type { ReactNode } from "react";

export interface WhyKotlinSectionType {
        title: ReactNode,
        description: ReactNode,
        buttonText: string,
        buttonLink: string,
        media: "image" | "youtube",
        youtubeId?: string,
}
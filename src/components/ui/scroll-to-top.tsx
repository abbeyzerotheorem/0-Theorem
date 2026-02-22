
"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Button
            variant="default"
            size="icon"
            onClick={scrollToTop}
            className={cn(
                'fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110',
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            )}
            aria-label="Go to top"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    )
}

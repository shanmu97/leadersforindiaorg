import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function InvestmentTicker({ showTicker, setShowTicker }) {
    const [tickerPosition, setTickerPosition] = useState(0);

    useEffect(() => {
        if (!showTicker) return;

        setTickerPosition(window.innerWidth);

        const animationFrame = () => {
            const tickerElement = document.getElementById("ticker-text");
            if (!tickerElement) return;

            const tickerWidth = tickerElement.offsetWidth;
            const viewportWidth = window.innerWidth;

            setTickerPosition((prevPos) => {
                if (prevPos < -tickerWidth) return viewportWidth;
                return prevPos - 1;
            });

            if (showTicker) requestAnimationFrame(animationFrame);
        };

        const animation = requestAnimationFrame(animationFrame);
        return () => cancelAnimationFrame(animation);
    }, [showTicker]);

    const vanillaSansClass =
        "font-['Vanilla_Sans','Vanilla','Inter','Helvetica_Neue',Helvetica,Arial,sans-serif]";

    if (!showTicker) return null;

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 bg-black text-white py-2 overflow-hidden h-[30px] ${vanillaSansClass}`}
        >
            <div className="flex">
                <div
                    id="ticker-text"
                    className="whitespace-nowrap font-light text-sm"
                    style={{ transform: `translateX(${tickerPosition}px)` }}
                >
                    In just 8 days since our Business Shower, we've successfully closed
                    the Follow-On Investment Round, disbursing a ₹1.34 Cr investment into
                    Cloud tailor 🎉✨
                </div>
                <div
                    className="whitespace-nowrap font-medium"
                    style={{ transform: `translateX(${tickerPosition + window.innerWidth}px)` }}
                >
                    Jungle Ventures launches First Cheque@Jungle
                </div>
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 px-4 cursor-pointer bg-black"
                onClick={() => setShowTicker(false)}
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}

import "@/app/ui/globals.css";
import ToastProvider from "./ui/toastProvider";

export const metadata = {
    title: {
        template: "SK Leasing | %s",
        default: "SK Leasing | Especialistas en arrendamiento puro, enfocados al servicio al cliente",
    },
    description: "SK Leasing (Promotora SKU, S.A.P.I. de C.V.) es una empresa 100% mexicana especializada en Arrendamiento Puro, enfocada en el Servicio al Cliente, y en la Velocidad de Respuesta.",
    author: "SK Leasing",
    generator: "Next.js",
    referrer: 'origin-when-cross-origin',
    creator: 'Jonathan Meléndez Macedonio',
    publisher: 'Jonathan Meléndez Macedonio',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "SK Leasing | Especialistas en arrendamiento puro, enfocados al servicio al cliente",
        description: "SK Leasing (Promotora SKU, S.A.P.I. de C.V.) es una empresa 100% mexicana especializada en Arrendamiento Puro, enfocada en el Servicio al Cliente, y en la Velocidad de Respuesta.",
        url: "https://skleasing.mx",
        siteName: "SK Leasing",
        locale: "es_MX",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "SK Leasing | Especialistas en arrendamiento puro, enfocados al servicio al cliente",
        description: "SK Leasing (Promotora SKU, S.A.P.I. de C.V.) es una empresa 100% mexicana especializada en Arrendamiento Puro, enfocada en el Servicio al Cliente, y en la Velocidad de Respuesta.",
    },
    verification: {
        google: "bUIJYev_Rajl5CGrCFb_S0jM2-O5FNXYUiaTZ_0kZOE",
    }
}

export const viewport = {
    themeColor: '#075892',
    maximumScale: 1,
    userScalable: false,
    colorScheme: "light dark",
}

export default function RootLayout({ children }) {
    return (
        <html lang="es_MX" className="h-full scroll-smooth">
            <body className="h-full">
                <ToastProvider>
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}

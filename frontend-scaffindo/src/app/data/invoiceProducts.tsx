import { ImDropbox } from "react-icons/im";
import { IoLeaf, IoCube, IoCar, IoStorefront, IoPerson } from "react-icons/io5";

const invoiceProducts = [
    {
        id: 1,
        name: "Kaos Printing",
        description: "Kaos dengan desain custom printing.",
        category: ["Clothing"],
        image: "/assets/images/sucofindo-1.jpg",
        harga: 100000,
        certification: [
            {
                certificationId: "CERT-KAOS-001",
                certificationName: "SNI Tekstil",
                certificationExpired: "2026-12-31",
            },
            {
                certificationId: "CERT-KAOS-002",
                certificationName: "ISO 9001:2015",
                certificationExpired: "2027-06-30",
            },
            {
                certificationId: "CERT-KAOS-003",
                certificationName: "ISO 9001:2015",
                certificationExpired: "2027-06-25",
            },
        ],
        labels: [
            {
                id: "KaosPrinting-1",
                qrCode: "QR_KaosPrinting-1",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-01T10:00:00Z" },
                    { role: "distributor", status: "Belum diterima", updatedAt: "" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "1 September 2025, 10:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                ],
            },
            {
                id: "KaosPrinting-2",
                qrCode: "QR_KaosPrinting-2",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-01T10:00:00Z" },
                    { role: "distributor", status: "Belum diterima", updatedAt: "" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "2 September 2025, 12:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                ],
            },
        ],
        invoices: [
            {
                id: "INV-001",
                labels: ["KaosPrinting-1", "KaosPrinting-2"],
                qrCode: "QR_Invoice_KaosPrinting_INV001",
            },
        ],
    },
    {
        id: 2,
        name: "Sticker",
        description: "Sticker vinyl tahan air untuk berbagai kebutuhan.",
        image: "/assets/images/sucofindo-1.jpg",
        harga: 20000,
        certification: [
            {
                certificationId: "CERT-STICKER-001",
                certificationName: "SNI Plastik",
                certificationExpired: "2026-09-01",
            },
        ],
        labels: [
            {
                id: "Sticker-1",
                qrCode: "QR_Sticker-1",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-05T09:30:00Z" },
                    { role: "distributor", status: "Belum diterima", updatedAt: "" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "5 September 2025, 09:30 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                ],
            },
        ],
        invoices: [
            {
                id: "INV-002",
                labels: ["Sticker-1"],
                qrCode: "QR_Invoice_Sticker_INV002",
            },
        ],
    },
    {
        id: 3,
        name: "Banner",
        description: "Banner promosi dengan bahan berkualitas tinggi.",
        image: "/assets/images/sucofindo-1.jpg",
        harga: 50000,
        certification: [
            {
                certificationId: "CERT-BANNER-001",
                certificationName: "ISO 14001:2015",
                certificationExpired: "2028-01-01",
            },
        ],
        labels: [
            {
                id: "Banner-1",
                qrCode: "QR_Banner-1",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-06T14:00:00Z" },
                    { role: "distributor", status: "Dalam perjalanan", updatedAt: "2025-09-07T09:00:00Z" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "6 September 2025, 14:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                    {
                        id: 2,
                        icon: <IoCar className="w-6 h-6 text-blue-500" />,
                        title: "Distributor",
                        date: "7 September 2025, 09:00 WIB",
                        details: ["Status: Dalam perjalanan"],
                    },
                ],
            },
        ],
        invoices: [
            {
                id: "INV-003",
                labels: ["Banner-1"],
                qrCode: "QR_Invoice_Banner_INV003",
            },
        ],
    },
    {
        id: 4,
        name: "Totebag",
        description: "Totebag custom printing ramah lingkungan.",
        image: "/assets/images/sucofindo-1.jpg",
        harga: 800000,
        certification: [
            {
                certificationId: "CERT-TOTEBAG-001",
                certificationName: "Ecolabel",
                certificationExpired: "2027-03-15",
            },
        ],
        labels: [
            {
                id: "Totebag-1",
                qrCode: "QR_Totebag-1",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-08T10:00:00Z" },
                    { role: "distributor", status: "Belum diterima", updatedAt: "" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "8 September 2025, 10:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                ],
            },
            {
                id: "Totebag-2",
                qrCode: "QR_Totebag-2",
                tracking: [
                    { role: "pabrik", status: "Produksi selesai", updatedAt: "2025-09-08T11:00:00Z" },
                    { role: "distributor", status: "Dalam perjalanan", updatedAt: "2025-09-09T15:00:00Z" },
                    { role: "agent", status: "Belum diterima", updatedAt: "" },
                    { role: "retailer", status: "Belum diterima", updatedAt: "" },
                    { role: "consument", status: "Belum diterima", updatedAt: "" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "8 September 2025, 11:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                    {
                        id: 2,
                        icon: <IoCar className="w-6 h-6 text-blue-500" />,
                        title: "Distributor",
                        date: "9 September 2025, 15:00 WIB",
                        details: ["Status: Dalam perjalanan"],
                    },
                ],
            },
        ],
        invoices: [
            {
                id: "INV-004",
                labels: ["Totebag-1"],
                qrCode: "QR_Invoice_Totebag_INV004",
            },
            {
                id: "INV-005",
                labels: ["Totebag-2"],
                qrCode: "QR_Invoice_Totebag_INV005",
            },
        ],
    },
    {
        id: 5,
        name: "Aqua",
        description: "Air dengan kemurnian 100%",
        category: ["FOOD_BEVERAGES"],
        image: "/assets/images/sucofindo-1.jpg",
        harga: 4000,
        certification: [
            {
                certificationId: "CERT-AQUA-001",
                certificationName: "BPOM",
                certificationExpired: "2026-12-31",
            },
            {
                certificationId: "CERT-AQUA-002",
                certificationName: "HALAL",
                certificationExpired: "2027-06-30",
            },
        ],
        labels: [
            {
                id: "Batch-Aqua-001",
                qrCode: "QR_Batch-Aqua-001",
                tracking: [
                    { role: "pabrik", status: "Produksi Selesai", updatedAt: "2025-09-01T10:00:00Z" },
                    { role: "distributor", status: "Telah diserahkan ke agent A", updatedAt: "2025-09-05T10:00:00Z" },
                    { role: "agent", status: "Telah diserahkan ke retailer B", updatedAt: "2025-09-15T10:00:00Z" },
                    { role: "retailer", status: "Dibeli oleh Customer", updatedAt: "2025-09-25T10:00:00Z" },
                    { role: "consument", status: "Dibeli dengan harga Rp 4.000,00", updatedAt: "2025-09-25T10:00:00Z" },
                ],
                journey: [
                    {
                        id: 1,
                        icon: <IoLeaf className="w-6 h-6 text-green-500" />,
                        title: "Pabrik",
                        date: "1 September 2025, 10:00 WIB",
                        details: ["Status: Produksi selesai"],
                    },
                    {
                        id: 2,
                        icon: <IoCar className="w-6 h-6 text-blue-500" />,
                        title: "Distributor",
                        date: "5 September 2025, 15:00 WIB",
                        details: ["Status: Diterima dari Pabrik A", "Status: Dalam perjalanan menuju agent A", "Telah diserahkan ke agent A"],
                    },
                    {
                        id: 3,
                        icon: <IoStorefront className="w-6 h-6 text-green-500" />,
                        title: "Agent",
                        date: "15 September 2025, 10:00 WIB",
                        details: ["Status: Diterima dari Distributor A", "Status: Dalam perjalanan menuju retail B", "Telah diserahkan ke retail B"],
                    },
                    {
                        id: 4,
                        icon: <ImDropbox className="w-6 h-6 text-green-500" />,
                        title: "Retail",
                        date: "25 September 2025, 10:00 WIB",
                        details: ["Status: Diterima dari Retail A", "Status: Telah dijual kepada Customer"],
                    },
                    {
                        id: 5,
                        icon: <IoPerson className="w-6 h-6 text-green-500" />,
                        title: "Customer",
                        date: "25 September 2025, 10:00 WIB",
                        details: ["Status: Dibeli dengan harga Rp 4.000,00"],
                    },
                ],
            },
        ],
        invoices: [
            {
                id: "INV-001",
                labels: ["KaosPrinting-1", "KaosPrinting-2"],
                qrCode: "QR_Invoice_KaosPrinting_INV001",
            },
        ],
    }
];

export default invoiceProducts;

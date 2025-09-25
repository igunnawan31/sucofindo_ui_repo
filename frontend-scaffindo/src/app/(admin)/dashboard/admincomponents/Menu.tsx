"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { IoCaretForward } from "react-icons/io5";
import { IoCaretForward, IoCaretDown, IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";

const menuDashboards = [
    {
        title: "Dashboard",
        items: [
            {
                icon: "/assets/icons/home.svg",
                alt: "Dashboard",
                label: "Dashboard",
                href: "/dashboard",
            },
        ],
    },
];

const factoryMenus = [
    {
        title: "Menu Factory",
        items: [
            {
                icon: "/assets/icons/factory.svg",
                alt: "Factory",
                label: "Print Label Barang",
                href: "/dashboard/print-label",
            },
            {
                icon: "/assets/icons/pengecekkan-barang.svg",
                alt: "Pengecekkan Barang",
                label: "Pengecekkan Barang",
                href: "/dashboard/pengecekkan-barang",
            },
            {
                icon: "/assets/icons/delivery-white.svg",
                alt: "Pengiriman Barang",
                label: "Pengiriman Barang",
                href: "/dashboard/pengiriman-barang",
            },
        ],
    },
];

const distributorMenus = [
    {
        title: "Menu Distributor",
        items: [
            {
                icon: "/assets/icons/notification.svg",
                alt: "Permintaan Barang",
                label: "Permintaan Barang",
                href: "/dashboard/permintaan-barang-distributor",
            },
            {
                icon: "/assets/icons/pengecekkan-barang.svg",
                alt: "Pengecekkan Barang",
                label: "Pengecekkan Barang",
                href: "/dashboard/pengecekkan-barang-distributor",
            },
            {
                icon: "/assets/icons/delivery-white.svg",
                alt: "Pengiriman Barang",
                label: "Pengiriman Barang",
                href: "/dashboard/pengiriman-barang-distributor",
            },
        ],
    },
];

const agentMenus = [
    {
        title: "Menu Agent",
        items: [
            {
                icon: "/assets/icons/notification.svg",
                alt: "Permintaan Barang",
                label: "Permintaan Barang",
                href: "/dashboard/permintaan-barang-agent",
            },
            {
                icon: "/assets/icons/pengecekkan-barang.svg",
                alt: "Pengecekkan Barang",
                label: "Pengecekkan Barang",
                href: "/dashboard/pengecekkan-barang-agent",
            },
            {
                icon: "/assets/icons/delivery-white.svg",
                alt: "Pengiriman Barang",
                label: "Pengiriman Barang",
                href: "/dashboard/pengiriman-barang-agent",
            },
            {
                icon: "/assets/icons/shop.svg",
                alt: "Penjualan Customer",
                label: "Penjualan Customer",
                href: "/dashboard/penjualan-customer",
            },
        ],
    },
];

const userManages = [
    {
        title: "Manage User",
        items: [
            {
                icon: "/assets/icons/user.svg",
                alt: "Manage User",
                label: "Manage User",
                href: "/dashboard/manage-user",
            }
        ]
    }
]

type UserResponseDTO = {
    userId: string;
    userName: string;
    userEmail: string;
    userBranch: string;
    userPhone: string;
    userRole: string;
    userSubRole: string;
};

interface Branch {
    branchId: string;
    branchName: string;
}
const allMenus = [...menuDashboards, ...userManages, ...factoryMenus, ...distributorMenus, ...agentMenus];


const Menu = () => {
    const [users, setUser] = useState<UserResponseDTO | null>(null);
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>(
        Object.fromEntries(allMenus.map((menu) => [menu.title, true]))
    );
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasParentId, setHasParentId] = useState<boolean | null>(null);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserAndBranchData = async () => {
        try {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                setError("No user ID found. Please log in.");
                setLoading(false);
                return;
            }

            const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/by-id/${userId}`);
            if (!userResponse.ok) throw new Error("Failed to fetch user data");
            const userData = await userResponse.json();
            setUser(userData);

            if (userData.userBranch) {
            const branchResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/branch/by-id/${userData.userBranch}`);
            if (!branchResponse.ok) throw new Error("Failed to fetch branch data");
            
            const branchData = await branchResponse.json();
            setHasParentId(branchData.parentId !== null && branchData.parentId !== undefined);
            }

            const branchesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/branch/index`);
            if (branchesResponse.ok) {
            const branchesData = await branchesResponse.json();
            setBranches(branchesData);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
            setHasParentId(true);
        } finally {
            setLoading(false);
        }
        };

        fetchUserAndBranchData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
            closeMobileMenu();
        }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    const handleMenuClick = (title: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleMenuItemClick = () => {
        closeMobileMenu();
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="text-sm">
            <div className="flex lg:hidden items-center mb-4 justify-center">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="text-white focus:outline-none cursor-pointer"
                >
                    <div className="bg-blue-800 p-4 rounded-lg">
                        <Image 
                            src={'/assets/icons/hamburger-white.svg'} 
                            width={20} 
                            height={20} 
                            alt={"Hamburger Menu"} 
                        />
                    </div>
                </button>
            </div>
            
            {/* Icons Menu */}
            <div className="flex flex-col items-center justify-center gap-4 lg:hidden">
                {allMenus.map((menu) => menu.items.length === 1 ? (
                    <Link
                        href={menu.items[0].href}
                        key={menu.items[0].label}
                        className="flex items-center p-4 text-white hover:bg-blue-800 rounded"
                    >
                        <Image src={menu.items[0].icon} width={20} height={20} alt={menu.items[0].alt} className="block" />
                    </Link>
                ) : (
                    <div key={menu.title} className="flex flex-col items-center gap-4">
                        {menu.items.map((item) => (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="flex items-center gap-3 p-4 text-white hover:bg-blue-800 rounded"
                            >
                                <Image
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt={item.alt}
                                    className="block"
                                />
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            
            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 left-0 h-full w-1/2 bg-blue-900 z-50 flex flex-col p-6 lg:hidden overflow-y-auto transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="flex lg:hidden items-center justify-end">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="text-white focus:outline-none cursor-pointer"
                    > 
                        <div className="bg-blue-800 p-4 rounded-lg">
                            <IoClose className="w-5 h-5 text-white" /> 
                        </div>
                    </button>
                </div>
                <div className="flex flex-col gap-3 text-lg mt-4">
                    {allMenus.map((menu) => menu.items.length === 1 ? (
                        <Link
                            href={menu.items[0].href}
                            key={menu.items[0].label}
                            className="flex items-center gap-3 p-4 text-white hover:bg-blue-800 rounded-lg"
                        >
                            <Image src={menu.items[0].icon} width={20} height={20} alt={menu.items[0].alt} className="block" />
                            {isSidebarOpen && (
                                <span className="block text-sm">{menu.items[0].label}</span>
                            )}
                        </Link>
                    ) : (
                        <div key={menu.title}>
                            <div
                                className="flex justify-between items-center cursor-pointer text-white font-bold hover:bg-blue-800 p-4 rounded-lg"
                                onClick={() => handleMenuClick(menu.title)}
                            >
                                <span className="text-sm">{menu.title}</span>
                                <IoCaretForward
                                    className={`transition-transform duration-300 ${
                                        openMenus[menu.title] ? "rotate-90" : "rotate-0"
                                    }`}
                                />
                            </div>
                            {openMenus[menu.title] && (
                                <div className="flex flex-col gap-2 mt-3">
                                    {menu.items
                                        .filter((item) => {
                                            if (item.label === "Asset Dashboard" && hasParentId === false) {
                                                return false;
                                            }
                                                return true;
                                        })
                                        .map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.label}
                                                className="flex items-center gap-3 p-4 text-white hover:bg-blue-800 rounded-lg"
                                                onClick={handleMenuItemClick}
                                            >
                                                <Image src={item.icon} width={20} height={20} alt={item.alt} className="block" />
                                                {isSidebarOpen && (
                                                    <span className="block text-sm">{item.label}</span>
                                                )}
                                            </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        
            {/* Web Menu */}
            <div className={`hidden lg:block lg:bg-transparent`}>
                {allMenus.map((menu) => menu.items.length === 1 ? (
                    <Link
                        href={menu.items[0].href}
                        key={menu.items[0].label}
                        className="flex items-center justify-start gap-4 p-4 text-white hover:bg-blue-800"
                    >
                        <Image 
                            src={menu.items[0].icon} 
                            width={20} 
                            height={20} 
                            alt={menu.items[0].alt} 
                        />
                        <span className="hidden lg:block text-sm">{menu.items[0].label}</span>
                    </Link>
                ) : (
                    <div className="flex flex-col" key={menu.title}>
                        <div
                            className="flex justify-between items-center cursor-pointer text-white font-bold hover:bg-blue-800 p-4"
                            onClick={() => handleMenuClick(menu.title)}
                        >
                            <span className="text-sm">{menu.title}</span>
                            <IoCaretForward
                                className={`transition-transform duration-300 ${
                                    openMenus[menu.title] ? "rotate-90" : "rotate-0"
                                }`}
                            />
                        </div>

                        {openMenus[menu.title] && (
                            <div className="flex flex-col gap-2 cursor-pointer ">
                                {menu.items
                                    .filter((item) => {
                                        if (item.label === "Asset Dashboard" && hasParentId === false) return false;
                                        return true;
                                    })
                                    .map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.label}
                                            className="flex items-center gap-4 p-4 text-white hover:bg-blue-800"
                                            onClick={handleMenuItemClick}
                                        >
                                            <Image src={item.icon} width={20} height={20} alt={item.alt} className="block" />
                                            {isSidebarOpen && (
                                                <span className="block text-sm">{item.label}</span>
                                            )}
                                        </Link>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

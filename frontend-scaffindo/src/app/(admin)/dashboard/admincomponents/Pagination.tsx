import { useState } from "react";
import Image from "next/image";
import { IoArrowForwardCircle,IoArrowBackCircle } from "react-icons/io5";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (items: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    onItemsPerPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [inputPage, setInputPage] = useState(currentPage);

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-sm hidden sm:block">Items per Page</span>
                <select
                    className="border px-2 py-1 rounded-md bg-blue-900 text-white border-blue-900 hover:bg-blue-800 cursor-pointer"
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <div className="text-gray-500 text-sm">
                {itemsPerPage * (currentPage - 1) + 1} -{" "}
                {Math.min(itemsPerPage * currentPage, totalItems)} of {totalItems} items
            </div>

            <div className="flex items-center space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`px-2 py-1 border rounded-md flex items-center gap-2 ${
                        currentPage === 1 ? "text-gray-300" : "bg-blue-900 text-white border-blue-900 hover:bg-blue-800 cursor-pointer"
                    }`}
                >
                    <IoArrowBackCircle />
                    <div className="hidden sm:block"> Previous</div>
                </button>
                <input
                    type="text"
                    className="border text-center w-10"
                    value={inputPage}
                    onChange={(e) => setInputPage(Number(e.target.value))}
                    onBlur={() => {
                        if (inputPage > 0 && inputPage <= totalPages) {
                            onPageChange(inputPage);
                        } else {
                            setInputPage(currentPage);
                        }
                    }}
                />
                <span className="text-gray-500 text-sm">of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`px-2 py-1 border rounded-md flex items-center gap-1 ${
                        currentPage === totalPages ? "text-gray-300" : "bg-blue-900 text-white border-blue-900 hover:bg-blue-800 cursor-pointer"
                    }`}
                >
                    <div className="hidden sm:block">
                        Next
                    </div>
                    <IoArrowForwardCircle />
                </button>
            </div>
        </div>
    );
};

export default Pagination;

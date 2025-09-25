"use client"

import dummyProducts from "@/app/data/productsData";
import SearchProducts from "../../admincomponents/SearchProducts";
import CategoryProducts from "../../admincomponents/CategoryProducts";
import ProductShows from "../../admincomponents/ProductShows";
import { useState } from "react";
import InvoiceShowsPage from "../../admincomponents/invoiceShows";

const PermintaanBarangDistributor = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };
    const handleAcceptInvoice = (invoiceId: string) => {
        console.log("Invoice diterima:", invoiceId);
    };
    return (
        <>
            <div className="flex gap-3">
                <CategoryProducts />
                <SearchProducts 
                    placeholder="Search your products" 
                    onSearch={handleSearch}
                />
            </div>
            <div className="mt-5">
                <InvoiceShowsPage link="permintaan-barang-distributor" showButton={true} buttonText="Accept" onButtonClick={ handleAcceptInvoice } />
            </div>
        </>
    )
}

export default PermintaanBarangDistributor
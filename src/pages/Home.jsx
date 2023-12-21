import { useState, useEffect } from "react";
import { getAllCategories } from "../api";

import { useSearchParams } from "react-router-dom";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

export default function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        if (str.length) {
            setSearchParams(`?search=${str}`);
        } else {
            setSearchParams("");
        }
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, []);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
        </>
    );
}

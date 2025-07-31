import { Suspense } from "react";
import SearchPage from "./_page-container/SearcPage";

const Search = () => {
    return (
        <Suspense>
            <SearchPage />
        </Suspense>
    );
};

export default Search;

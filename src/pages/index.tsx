import { Route, Routes, Navigate } from "react-router-dom";
import { Main } from "@/pages/main";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
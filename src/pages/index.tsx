import { Route, Routes } from "react-router-dom";
import { Main } from "@/pages/main";
import { Authorization } from "@/pages/authorization";
import { Registration } from "@/pages/registration";
import { RegistrationSuccessful } from "@/pages/registration-successful";
import { PasswordRecoveryNew } from "@/pages/password-recovery-new";
import { PasswordRecoveryPincode } from "@/pages/password-recovery-pincode";
import { PasswordRecoverySuccessful } from "@/pages/password-recovery-successful";
import { RoomCard } from "@/pages/room-card";
import { Profile } from "@/pages/profile";
import { ErrorPage } from "@/pages/error-page";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="authorization" element={<Authorization/>} />
            <Route path="registration" element={<Registration/>} />
            <Route path="registration/successful" element={<RegistrationSuccessful/>} />
            <Route path="password/recovery/new" element={<PasswordRecoveryNew/>} />
            <Route path="password/recovery/pincode" element={<PasswordRecoveryPincode/>} />
            <Route path="password/recovery/successful" element={<PasswordRecoverySuccessful/>} />
            <Route path="roomcard" element={<RoomCard/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    );
};
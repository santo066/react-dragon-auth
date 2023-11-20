import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
                <Outlet></Outlet>
        </div>
    )
}
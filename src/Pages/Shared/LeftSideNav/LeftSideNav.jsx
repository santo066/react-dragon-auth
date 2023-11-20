import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import { TbEPassport } from "react-icons/tb";
export default function LeftSideNav() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(categoriy =>
                    <Link
                        className="block ml-4 font-semibold text-xl"
                        key={categoriy.id}
                        to={`/category/${categoriy.id}`}
                    >{categoriy.name}</Link>)
            }


            <div className="card card-compact bg-base-100 ">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions ">
                        <button>sport</button>
                        <div className="flex items-center ml-9">
                            <TbEPassport className="mr-3" />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 ">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions ">
                        <button>sport</button>
                        <div className="flex items-center ml-9">
                            <TbEPassport className="mr-3" />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 ">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions ">
                        <button>sport</button>
                        <div className="flex items-center ml-9">
                            <TbEPassport className="mr-3" />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
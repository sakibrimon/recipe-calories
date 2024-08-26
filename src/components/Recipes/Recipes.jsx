import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";
import WannaCook from "../WannaCook/WannaCook";
import Cooking from "../Cooking/Cooking";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ targetRef }) => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleWantToCook = recipe => {
        if (wantToCook.includes(recipe)) {
            toast("Already exists!")
        } else {
            const newWantToCook = [...wantToCook, recipe];
            setWantToCook(newWantToCook);
        }
    }

    const handleCurrentlyCooking = recipe => {
        const newWantToCook = wantToCook.filter(item => item !== recipe);
        setWantToCook(newWantToCook);
        const newCurrentlyCooking = [...currentlyCooking, recipe];
        setCurrentlyCooking(newCurrentlyCooking);
        setTotalTime(totalTime + parseFloat(recipe.preparing_time));
        setTotalCalories(totalCalories + parseFloat(recipe.calories));
    }

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="mt-24 mb-24 w-[82.5%] container mx-auto" ref={targetRef}>
            <div className="text-center w-[62%] mx-auto">
                <h1 className="font-semibold text-[40px]">Our Recipes</h1>
                <p className="mt-6 text-[#150B2B99]">Discover our diverse recipes featuring easy-to-follow instructions, fresh ingredients, and delightful flavors. Perfect for every meal, from quick weeknight dinners to special occasions.</p>
            </div>
            <div className="mt-12 flex flex-col xl:flex-row gap-6">
                <div className="xl:w-2/3 grid gap-6 grid-cols-1 md:grid-cols-2 mx-auto">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="w-full xl:w-1/3 border rounded-2xl mx-auto">
                    <div className="mt-8">
                        <div className="w-[70%] mx-auto border-b">
                            <h2 className="text-2xl font-semibold text-center pb-4">Want to cook: {wantToCook.length.toString().padStart(2, '0')}</h2>
                        </div>
                        <WannaCook wantToCook={wantToCook} handleCurrentlyCooking={handleCurrentlyCooking}></WannaCook>
                    </div>
                    <div className="mt-8">
                        <div className="w-[70%] mx-auto border-b">
                            <h2 className="text-2xl font-semibold text-center pb-4">Currently cooking: {currentlyCooking.length.toString().padStart(2, '0')}</h2>
                        </div>
                        <Cooking currentlyCooking={currentlyCooking} totalTime={totalTime} totalCalories={totalCalories}></Cooking>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Recipes.propTypes = {
    targetRef: PropTypes.object.isRequired
}

export default Recipes;
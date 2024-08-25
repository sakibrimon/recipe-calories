import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";


const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-96# w-full h-full shadow-xl# p-6 border">
                <figure>
                    <img
                        src={recipe_image}
                        alt={`picture of ${recipe_name}`}
                        className="rounded-xl w-full h-[200px] object-cover" />
                </figure>
                <div className="mt-6 card-body# flex flex-col flex-grow">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="my-4 fira-sans-font text-[#878787]">{short_description}</p>
                    <hr />
                    <p className="mt-6 font-medium text-lg">Ingredients: {ingredients.length}</p>
                    <ul className="my-4 fira-sans-font text-[#878787] list-disc pl-4">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>
                                {ingredient}
                            </li>)
                        }
                    </ul>
                    <hr className="mt-auto" />
                    <div className="mt-7 flex items-center gap-5 fira-sans-font text-[#282828CC]">
                        <div className="flex items-center gap-1">
                            <CiClock2 />
                            <span>{preparing_time} minute(s)</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <AiOutlineFire />
                            <span>{calories} calorie(s)</span>
                        </div>
                    </div>

                    <div className="mt-6 card-actions justify-end#">
                        <button className="btn btn-primary# bg-prime border-0 rounded-[50px]" onClick={() => handleWantToCook(recipe)}>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipe;
import PropTypes from 'prop-types';

const WannaCook = ({ wantToCook, handleCurrentlyCooking }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-xs fira-sans-font">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className='text-[#282828B3]'>
                        {/* row(s) */}
                        {
                            wantToCook.map((recipe, idx) => <tr key={recipe.recipe_id} className="bg-base-200">
                                <th>{idx+1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minute(s)</td>
                                <td>{recipe.calories} calorie(s)</td>
                                <td>
                                    <button className="btn btn-primary# btn-xs bg-prime border-0 rounded-[50px] lexend-font" onClick={() => handleCurrentlyCooking(recipe)}>Preparing</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

WannaCook.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func
}

export default WannaCook;
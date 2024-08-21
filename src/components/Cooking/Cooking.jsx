import PropTypes from 'prop-types';

const Cooking = ({ currentlyCooking, totalTime, totalCalories }) => {
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
                            currentlyCooking.map((recipe, idx) => <tr key={idx} className='bg-base-200'>
                                <th>{idx+1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minute(s)</td>
                                <td>{recipe.calories} calorie(s)</td>
                            </tr>)
                        }
                        <tr className='lexend-font text-[#282828CC] font-medium'>
                            <th></th>
                            <th></th>
                            <td>Total Time = <br /> {totalTime} minute(s)</td>
                            <td>Total Calories = <br /> {totalCalories} calorie(s)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    currentlyCooking: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
}

export default Cooking;
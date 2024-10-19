import { useState } from "react";
import './Filters.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import dishes from "../DishesJSON";
import { useNavigate } from "react-router-dom";

const Filters = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        vegFilter: ['Veg', 'Non-Veg'],
        allergies: [...new Set(dishes.flatMap(dish => dish.allergies))],
        spiceLevel: ['Low', 'Medium', 'High']
    });

    const [filtersAdded, setFiltersAdded] = useState({
        vegFilter: [],
        allergies: [],
        spiceLevel: []
    });

    const addFilter = (filter, item) => {
        setFilters(prevFilters => {
            const updatedFilters = { ...prevFilters };
            updatedFilters[filter] = updatedFilters[filter].filter(i => i !== item);
            return updatedFilters;
        });

        setFiltersAdded(prevFiltersAdded => ({
            ...prevFiltersAdded,
            [filter]: [...prevFiltersAdded[filter], item]
        }));
    };

    const removeFilter = (filter, item) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filter]: [...prevFilters[filter], item] 
        }));

        setFiltersAdded(prevFiltersAdded => ({
            ...prevFiltersAdded,
            [filter]: prevFiltersAdded[filter].filter(i => i !== item) 
        }));
    };

    const vegOptions = filters.vegFilter.map(item => ({ value: item, label: item }));
    const allergyOptions = filters.allergies.map(item => ({ value: item, label: item }));
    const spiceOptions = filters.spiceLevel.map(item => ({ value: item, label: item }));

    return (
        <div className="commonBackground">
            <div className="filtersSection">
                <div className="row filtersSectionContent">
                <div className="col-md-4">
                        <Select
                            options={allergyOptions}
                            onChange={(selectedOption) => {
                                if (selectedOption) {
                                    addFilter('allergies', selectedOption.value);
                                }
                            }}
                            value={null}
                            placeholder="Allergens to be Avoided"
                        />
                        <div className="selected-filter-div">
                            {filtersAdded.allergies.map((item, index) => (
                                <div key={index} className='selected-filter' onClick={() => removeFilter('allergies', item)}>
                                    {item } <FontAwesomeIcon icon={faTimes} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <Select
                            options={vegOptions}
                            onChange={(selectedOption) => {
                                if (selectedOption) {
                                    addFilter('vegFilter', selectedOption.value);
                                }
                            }}
                            value={null}
                            placeholder="Select Veg or Non-Veg"                        
                        />
                        <div className="selected-filter-div">
                            {filtersAdded.vegFilter.map((item, index) => (
                                <div key={index} className='selected-filter' onClick={() => removeFilter('vegFilter', item)}>
                                    {item} <FontAwesomeIcon icon={faTimes} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <Select
                            options={spiceOptions}
                            onChange={(selectedOption) => {
                                if (selectedOption) {
                                    addFilter('spiceLevel', selectedOption.value);
                                }
                            }}
                            value={null}
                            placeholder="Select Spice Level"
                        />
                        <div className="selected-filter-div">
                            {filtersAdded.spiceLevel.map((item, index) => (
                                <div key={index} className='selected-filter' onClick={() => removeFilter('spiceLevel', item)}>
                                    {item } <FontAwesomeIcon icon={faTimes} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>            
            <button className="search-recipes" onClick={()=>{navigate('/dishes',{state: filtersAdded})}}> Search Recipes</button>
        </div>
    );
};

export default Filters;

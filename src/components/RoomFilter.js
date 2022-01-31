import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = () => {
    const context = useContext(DataContext)
    const {
        rooms,
        handleChange,
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //get unique
    let types = getUnique(rooms, "type")
    //add all
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
  return (
      <section className='filter-container'>
          <Title title="search rooms" />
          <form className='filter-form'>
              <div className='form-group'>
                  <label htmlFor='type'>room type</label>
                  <select 
                  name='type'
                  id="type"
                  value={type}
                  className='form-control'
                  onChange={handleChange}
                   >
                       {types}
                   </select>
              </div>
              <div className='form-group'>
                  <label htmlFor='capacity'>Guest</label>
                  <select 
                  name='capacity'
                  id='capacity'
                  value={capacity}
                  className='form-control'
                  onChange={handleChange}
                  >
                      {people}
                  </select>
              </div>
              <div className='form-group'>
                  <label htmlFor='price'> room price ${price}</label>
                  <input
                    type="range"
                    name='price'
                    min={minPrice}
                    max={maxPrice}
                    id='price'
                    value={price}
                    onChange={handleChange}
                    className='form-control' 
                  ></input>
              </div>
              <div className='form-group'>
                  <label htmlFor='size'>room size</label>
                  <div className='size-inputs'>
                      <input 
                        type="number"
                        name='minSize'
                        id='size'
                        value={minSize}
                        onChange={handleChange}
                        className='size-input'
                       />
                       <input 
                         type="number"
                         name="minSize"
                         id="size"
                         value={maxSize}
                         onChange={handleChange}
                         className='size-input'
                        />
                  </div>
              </div>
              <div className='form-group'>
                  <div className='single-extra'>
                    <input 
                      type="checkbox"
                      name='breakfast'
                      id='breakfast'
                      checked={breakfast}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor='breakfast'>breakfast</label>
                  </div>
                  <div className='single-extra'>
                      <input 
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                      ></input>
                      <label htmlFor='pets'>pets</label>
                  </div>
              </div>
          </form>
      </section>
  );
};

export default RoomFilter;

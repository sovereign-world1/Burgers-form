import {useState} from 'react'

import pathFunnyBurger from './img/burger-ayam.jpg'
import pathBurger from './img/burger.jpg'

import './App.css';

const MEAT = [
  {id: '1', name: 'Говядина'},
  {id: '2', name: 'Свинина'},
  {id: '3', name: 'Курица'},
  {id: '4', name: 'Рыба'}
]

const CHEESE = [
  {id: '1', name: 'Моцарелла'},
  {id: '2', name: 'Пармезан'},
  {id: '3', name: 'Чедер'},
  {id: '4', name: 'Гауда'}
]

const SAUSES = [
  {id: '1', name: 'Кетчуп'},
  {id: '2', name: 'Майонез'},
  {id: '3', name: 'Сырный'},
  {id: '4', name: 'Чесночный'}
]

const App = () => {

  const [meat, setMeat] = useState(MEAT[0].id)
  const [cheese, setCheese] = useState(CHEESE[0].id)
  const [sauses, setSauses] = useState(SAUSES[0].id)
  const [hasOnion, setHasOnion] = useState(true)
  const [countTomatoes, setCountTomatoes] = useState(2)
  const [countCucumbers, setCountCucumbers] = useState(2)
  const [hasOrdered, setHasOrdered] = useState(false)



  const handleChangeMeat = (event) => {
    setMeat(event.target.value)
  }

  const handleChangeCheese = (event) => {
    setCheese(event.target.value)
  }

  const handleChangeSauses = (event) => {
    setSauses(event.target.value)
  }

  const handleIncreaseCountTomatoes = (event) => {
    event.preventDefault()
    setCountTomatoes(prevValue => prevValue >= 4 ? 4 : prevValue + 1)
  }

  const handleDecreaseCountTomatoes = (event) => {
    event.preventDefault()
    setCountTomatoes(prevValue => prevValue <= 0 ? 0 : prevValue - 1)
  }

  const handleIncreaseCountCucumbers = (event) => {
    event.preventDefault()
    setCountCucumbers(prevValue => prevValue >= 4 ? 4 : prevValue + 1)
  }

  const handleDecreaseCountCucumbers = (event) => {
    event.preventDefault()
    setCountCucumbers(prevValue => prevValue <= 0 ? 0 : prevValue - 1)
  }

  const handleSubmitButton = (event) => {
    event.preventDefault()
    setHasOrdered(!hasOrdered)
  }

  const handleOnionChange = () => {
    setHasOnion(!hasOnion)
  }

  return (
      <section>
    <div className="form-app">
        {!hasOrdered && <form className="form-app__form">
        <h2>Заполните свои данные</h2>
        <div className="contact-information">
          <div className="field-input">
            <p>Имя</p>
            <input type="text"/>
          </div>
          <div className="field-input">
            <p>Почта</p>
            <input type="text"/>
          </div>
          <div className="field-input">
            <p>Телефон</p>
            <input type="text"/>
          </div>

        </div>
        <div className="selection">
          <p className="selection__text">Выбор котлеты: </p>
          <select onChange={handleChangeMeat}>
            {MEAT.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
          </select>

          <p className="selection__text">Выбор сыра: </p>
          <select onChange={handleChangeCheese}>
            {CHEESE.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
          </select>

          <p className="selection__text">Выбор соуса: </p>
          <select onChange={handleChangeSauses}>
            {SAUSES.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
          </select>

          <p className="selection__text">Количество ломтиков помидора: </p>
          <div className="number">
            <button className="number-minus" onClick={handleDecreaseCountTomatoes}>-</button>
            <input type="number" value={countTomatoes} readOnly/>
            <button className="number-plus" onClick={handleIncreaseCountTomatoes}>+</button>
          </div>

          <p className="selection__text">Лук: </p>
          <div className="selection__container">
            <input type="checkbox" name="onion" value checked={hasOnion} onChange={handleOnionChange}/>
          </div>

          <p className="selection__text">Количество ломтиков огурца: </p>
          <div className="number">
            <button className="number-minus" onClick={handleDecreaseCountCucumbers}>-</button>
            <input type="number" value={countCucumbers} readOnly/>
            <button className="number-plus" onClick={handleIncreaseCountCucumbers}>+</button>
          </div>

          <button type="submit" onClick={handleSubmitButton}>Сформировать заказ</button>

          <button type="submit" onClick={handleSubmitButton}>Сбросить все настройки</button>

          <img className="image-decoration" src={pathFunnyBurger} alt="Иконка бургера"/>

        </div>
      </form>}

      {hasOrdered && <div className="modal-window">
        <h2>Ваш бургер готовится</h2>
        <p>Котлета: {MEAT.find(elem => elem.id === meat)?.name}</p>
        <p>Сыр: {CHEESE.find(elem => elem.id === cheese)?.name}</p>
        <p>Соус: {SAUSES.find(elem => elem.id === sauses)?.name}</p>
        <p>Лук: {hasOnion ? 'Есть' : 'Нет'}</p>
        <p>Количество ломтиков помидора: {countTomatoes}</p>
        <p>Количество ломтиков огурца: {countCucumbers}</p>
        <img width={400} src={pathBurger} alt="фотография бургера"/>
        <button onClick={handleSubmitButton}>Сделать еще один заказ</button>
      </div>}

    </div>
      </section>
  )
}

export default App;

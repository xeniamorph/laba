import { useState } from 'react';
import styles from './Сontacts.module.scss';

const options = [
  { label: '3D визуализация и анимационный ролик', value: 'option1' },
  { label: 'Виртуальный тур / Панорама 360°', value: 'option2' },
  { label: 'Рекламный анимационный ролик', value: 'option3' },
  { label: 'Интерактивная модель / VR / AR', value: 'option4' },
  { label: 'Видео продакшн', value: 'option5' },
  { label: 'Промо Лэндинг', value: 'option6' },
  { label: 'Многостраничный сайт', value: 'option7' },
  { label: 'Корпоративный сайт', value: 'option8' },
  { label: 'Редизайн', value: 'option9' },
  { label: 'Разработка приложения', value: 'option10' },
  { label: 'Фирменный стиль и брендбук', value: 'option11' },
];

function Сontacts() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prevSelected) => (checked ? [...prevSelected, value] : prevSelected.filter((option) => option !== value)));
  };

  const handleRemoveOption = (value) => {
    setSelectedOptions((prevSelected) => prevSelected.filter((option) => option !== value));
  };

  return (
    <section className={styles.Сontacts}>
      <div className={styles.Сontacts__title}>
        <h2>Заполните бриф</h2>
        <p>Выберете подходящие вам услуги, либо звоните, мы пообщаемся и подберем лучшее решение для вашей компании</p>
      </div>

      <div className={styles.Сontacts__form}>
        <form>
          <div className={styles.Сontacts__services}>
            <div className={styles.Сontacts__selectedItems}>
              {selectedOptions.map((option, index) => (
                <span key={index} onClick={() => handleRemoveOption(option)}>
                  {options.find((o) => o.value === option).label}
                </span>
              ))}
            </div>
            <div className={styles.Сontacts__dropdown}>
              <button type="button" onClick={handleDropdownToggle}>
                {isDropdownOpen ? ' ' : 'Выбрать услуги'}
              </button>
              {isDropdownOpen && (
                <div className={styles.Сontacts__select}>
                  {options.map((option, index) => (
                    <label key={index}>
                      <input type="checkbox" value={option.value} checked={selectedOptions.includes(option.value)} onChange={handleOptionChange} />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          <h3>Контактные данные</h3>
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Еmail" required />
          <label className={styles.Сontacts__agreement}>
            Подтвердите согласие на обработку персональных данных
            <input type="checkbox" required />
          </label>
          <button className={styles.Сontacts__submit} type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

export default Сontacts;

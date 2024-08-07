import { useState } from 'react';
import styles from './FormBrief.module.scss';

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

function FormBrief() {
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
    <section className={styles.FormBrief}>
      <div className={styles.FormBrief__header}>
        <h2>Заполните бриф</h2>
        <p>Выберете подходящие вам услуги, либо звоните, мы пообщаемся и подберем лучшее решение для вашей компании</p>
      </div>
      <form action="https://echo.htmlacademy.ru/" method="post">
        <div className={styles.FormBrief__services}>
          <div className={styles.FormBrief__dropdown}>
            <div className={`${styles.FormBrief__dropclick} ${isDropdownOpen ? styles.active : ''}`} aria-expanded={isDropdownOpen}>
              <span onClick={handleDropdownToggle}>Выбрать услуги</span>
              <div className={styles.FormBrief__selectedItems}>
                {selectedOptions.map((option, index) => (
                  <div key={index} onClick={() => handleRemoveOption(option)}>
                    {options.find((o) => o.value === option).label}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.FormBrief__select} ${isDropdownOpen ? styles.active : ''}`}>
              {options.map((option, index) => (
                <label key={index} className={`${styles.FormBrief__option} ${selectedOptions.includes(option.value) ? styles.active : ''}`}>
                  <input type="checkbox" name="services" value={option.value} checked={selectedOptions.includes(option.value)} onChange={handleOptionChange} />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.FormBrief__contacts}>
          <h3 className={styles.FormBrief__subtitle}>Контактные данные</h3>
          <div className={`${styles.FormBrief__input} ${styles.FormBrief__input_name}`}>
            <input type="text" id="name" name="name" autoComplete="name" placeholder="Ваше имя" />
          </div>
          <div className={`${styles.FormBrief__input} ${styles.FormBrief__input_email}`}>
            <input type="email" id="email" name="email" autoComplete="email" placeholder="Еmail" required />
            <span className={styles.FormBrief__error}>Не корректный Email</span>
          </div>
          <label className={styles.FormBrief__agreement}>
            Подтвердите согласие на обработку персональных данных
            <input id="agreement" name="agreement" type="checkbox" required />
          </label>
          <button className={styles.FormBrief__submit} type="submit">
            Отправить заявку
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormBrief;

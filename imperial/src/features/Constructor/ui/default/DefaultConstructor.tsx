import { Select } from "@shared/ui/Select";
import "./DefaultConstructor.css";

const DefaultConstructor = () => {
  return (
    <div className="constuctor constructor--default">
      <div className="constructor__editor">
        <div className="constructor__size">
          <div className="constuctor__icon constuctor__icon--size" />
          <p className="constuctor__label">Задайте размер</p>
          <Select className="constuctor__size-select">
            <Select.Option value="80 см">80 см</Select.Option>
            <Select.Option value="90 см">90 см</Select.Option>
            <Select.Option value="100 см">100 см</Select.Option>
          </Select>
          <span className="constuctor__size-divider">x</span>
          <Select
            defaultValue="190 см"
            className="constuctor__size-select"
            ui="borderless"
          >
            <Select.Option value="180 см">180 см</Select.Option>
            <Select.Option value="190 см">190 см</Select.Option>
            <Select.Option value="200 см">200 см</Select.Option>
          </Select>
        </div>
        <div className="constuctor__structure-label">
          <div className="constuctor__icon constuctor__icon--editor" />
          <p className="constuctor__label">Выберите состав матраса</p>
        </div>
      </div>
      <div className="constuctor__visual"></div>
    </div>
  );
};

export default DefaultConstructor;

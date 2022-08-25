import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Cross } from "../../assets/icons/Cross.svg";
import "./input.scss";

const Input = () => {
    return (
        <div className="input">
            <Search />

            <input type="text" placeholder=" Search  " />

            <Cross />
        </div>
    );
};

export default Input;

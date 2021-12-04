import useToggle from './useToggle.js';

const HookToggleUseToggle = () => {
    let [smile, setSmile] = useToggle();

    return (
        <p onClick={() => setSmile(!smile)}>
            {smile ? "⚽" : "🏀"}
        </p>
    );
};

export default HookToggleUseToggle;
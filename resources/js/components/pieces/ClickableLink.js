/** Represents a colorful link that can be clicked. */
export const ClickableLink = ({name, onClick, color = 'purple', size = 'text-sm'}) => <div
    className={`${size} font-medium text-indigo-600`}>
    <div className={`text-${color}-500 hover:underline`} onClick={evt => {
        evt.stopPropagation();
        onClick();
    }}>
        {name}
    </div>
</div>;

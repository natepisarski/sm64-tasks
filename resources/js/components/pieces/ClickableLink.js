/** Represents a colorful link that can be clicked. */
export const ClickableLink = ({name, onClick, color = 'purple', size = 'text-sm'}) => {
    const textColor = onClick ? `text-indigo-600` : '';
    const hover = onClick ? 'hover:underline cursor-pointer': '';
    const innerTextColor = onClick ? `text-${color}-600` : null; // TODO: The colors are jacked up

    return <div
        className={`${size} font-medium ${textColor}`}>
        <div className={`${innerTextColor} ${hover}`} onClick={evt => {
            evt.stopPropagation();
            if (onClick) {
                onClick();
            }
        }}>
            {name}
        </div>
    </div>;
}

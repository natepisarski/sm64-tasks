import moment from 'moment';
import {formatDateTime} from "../utilities";
import {ClickableLink} from "./pieces/ClickableLink";

/**
 * A generic Card component. This has some slots for putting whatever you want in, and can show
 * a large hero section; whether that's an image or just a piece of text.
 *
 * Cards are clickable, but if a card CAN'T be clicked for some reason, we style it differently.
 */
export const Card = ({
                         title,
                         hero,
                         onClick,
                         description,
                         preTitle,
                         color = 'bg-white',
                         border = '',
                         style = {},
                         children
                     }) => {
    const classes = onClick ? {
        top: `cursor-pointer hover:shadow-md`,
        card: 'hover:bg-blue-200',
        text: 'hover:text-blue-600 hover:underline'
    } : {
        top: '',
        card: '',
        text: ''
    };

    return <div key={title}
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${classes.top} ${border}`}
                onClick={onClick}
                style={style}
    >
        <div className={'flex-shrink-0'}>
            {hero}
        </div>
        <div className={`flex-1 ${color} p-6 flex flex-col justify-between ${classes.card}`}>
            {preTitle}
            {children}
            <div onClick={onClick} className="block mt-2">
                <p className={`text-xl font-semibold text-gray-900 ${classes.text}`}>{title}</p>
                {description}
            </div>
        </div>
    </div>
};

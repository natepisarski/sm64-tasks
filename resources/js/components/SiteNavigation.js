import {useLocation, useParams} from "react-router";

export const SiteNavigation = ({}) => {
    let location = useLocation();
    console.debug('Just found this location: ', location);
    return <div className={'grid col-span-1 h-full'}> Navigation </div>
};

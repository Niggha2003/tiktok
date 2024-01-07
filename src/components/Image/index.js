import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleFallback = () => {
        setFallback(images.noImage);
        console.log(images.noImage);
    };

    return (
        <img
            ref={ref}
            src={fallBack || src}
            className={classNames(className)}
            alt={alt}
            {...props}
            onError={handleFallback}
        />
    );
});

export default Image;

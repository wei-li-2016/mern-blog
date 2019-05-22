import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from './style';

const Links = () => (
    <div>
        <Link href="https://github.com/white112">
            <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </Link>
        <Link href="https://twitter.com">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
        </Link>
        <Link href="https://medium.com">
            <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
        </Link>
    </div>
);

export default Links;
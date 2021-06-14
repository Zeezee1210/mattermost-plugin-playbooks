// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import Icon from 'src/components/assets/icons/icon';

const Svg = styled(Icon)`
    width: 28px;
    height: 38px;
    color: var(--button-bg)
`;

const Profiles = (props: {className?: string}) => (
    <Svg
        className={props.className}
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            opacity='0.84'
            d='M19.5848 19.46L16.34 17.4944C17.0056 16.5792 17.5152 15.5392 17.8688 14.3744C18.2432 13.1888 18.4304 11.9824 18.4304 10.7552C18.4304 9.34078 18.1288 8.09278 17.5256 7.01118C16.9432 5.92958 16.1216 5.09758 15.0608 4.51518C14 3.91198 12.7832 3.61038 11.4104 3.61038C10.0376 3.61038 8.82083 3.91198 7.76003 4.51518C6.69923 5.09758 5.86723 5.92958 5.26403 7.01118C4.68162 8.09278 4.39042 9.34078 4.39042 10.7552C4.39042 11.9824 4.56722 13.1888 4.92082 14.3744C5.29522 15.5392 5.80483 16.5792 6.44963 17.4944L3.20482 19.46C2.56002 19.7928 2.02962 20.2816 1.61362 20.9264C1.19762 21.5712 0.989625 22.2576 0.989625 22.9856C0.989625 23.6928 1.16642 24.3584 1.52002 24.9824C1.89442 25.6064 2.37282 26.0952 2.95522 26.4488C3.55842 26.8232 4.20322 27.0104 4.88962 27.0104H17.9C18.628 27.0104 19.2832 26.8232 19.8656 26.4488C20.4688 26.0952 20.9368 25.6064 21.2696 24.9824C21.6232 24.3584 21.8 23.6928 21.8 22.9856C21.8 22.2576 21.592 21.5712 21.176 20.9264C20.76 20.2816 20.2296 19.7928 19.5848 19.46ZM6.98002 10.7552C6.98002 9.25758 7.40642 8.10318 8.25923 7.29198C9.04962 6.56398 10.1 6.19998 11.4104 6.19998C12.7208 6.19998 13.7608 6.56398 14.5304 7.29198C15.3832 8.10318 15.8096 9.25758 15.8096 10.7552C15.8096 11.7536 15.6536 12.7416 15.3416 13.7192C15.0296 14.676 14.5824 15.508 14 16.2152C13.3136 17.172 12.4088 17.6504 11.2856 17.6504C10.724 17.6504 10.2144 17.5256 9.75683 17.276C9.36163 17.0472 8.95603 16.6936 8.54003 16.2152C8.08242 15.4872 7.70802 14.6344 7.41682 13.6568C7.12562 12.6584 6.98002 11.6912 6.98002 10.7552ZM17.9 24.3896H4.88962C4.51522 24.3896 4.20322 24.2544 3.95362 23.984C3.72482 23.6928 3.61042 23.3496 3.61042 22.9544V22.58L3.67283 22.4552C3.81842 22.164 3.92242 21.9872 3.98482 21.9248C4.02642 21.9248 4.08882 21.904 4.17202 21.8624C4.27602 21.8208 4.34882 21.8 4.39042 21.8L8.41522 19.3352C9.35123 19.8552 10.3496 20.1152 11.4104 20.1152C11.972 20.1152 12.5024 20.0424 13.0016 19.8968C13.4384 19.7928 13.9064 19.6056 14.4056 19.3352L18.4304 21.8C18.9504 22.0496 19.2104 22.4864 19.2104 23.1104C19.2104 23.4432 19.0752 23.7448 18.8048 24.0152C18.5344 24.2648 18.2328 24.3896 17.9 24.3896ZM22.9856 15.4352C23.4016 13.7088 23.6096 12.1488 23.6096 10.7552C23.6096 9.90238 23.5056 9.03918 23.2976 8.16558C22.9024 6.43918 22.1848 4.92078 21.1448 3.61038C20.6248 2.94478 19.8968 2.34158 18.9608 1.80078C18.0248 1.25998 17.2344 0.989582 16.5896 0.989582C15.6536 0.989582 14.8736 1.12478 14.2496 1.39518C15.1024 1.64478 15.9032 1.99838 16.652 2.45598C17.4216 2.89278 18.0976 3.40238 18.68 3.98478C19.9904 5.41998 20.7704 7.19838 21.02 9.31998C21.02 9.48638 21.0408 9.72558 21.0824 10.0376C21.124 10.3288 21.1448 10.568 21.1448 10.7552C21.1448 12.856 20.76 14.8008 19.9904 16.5896L21.02 17.2448C21.748 17.7024 22.3512 18.1808 22.8296 18.68C23.204 19.1168 23.4952 19.512 23.7032 19.8656C23.9528 20.3232 24.14 20.7912 24.2648 21.2696L24.3584 21.7376C24.4832 22.32 24.5456 22.7776 24.5456 23.1104C24.5456 23.6304 24.4936 24.0152 24.3896 24.2648C25.0344 24.0776 25.5752 23.7448 26.012 23.2664C26.4696 22.788 26.8024 22.216 27.0104 21.5504C27.0936 21.28 27.1352 20.9264 27.1352 20.4896C27.052 19.5744 26.6984 18.68 26.0744 17.8064C25.3256 16.7456 24.296 15.9552 22.9856 15.4352Z'
            fill='currentColor'
        />
    </Svg>
);

export default Profiles;
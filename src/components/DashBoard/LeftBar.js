import styled from 'styled-components'
import { Colors } from '../StyledComponents'

export const LeftBar = ({one,two,three}) => {

    return (
        <LeftBarHolder>
            <LogoHolder>
                <SVG4/>
            </LogoHolder>
            <MenuHolder>
                <MenuItemA href="/campaigns" bg={one.bg}>
                    <SvgHolder>
                        <MenuItemSvg viewBox="0 0 18 18" fill="none" stroke={one.color} xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4 5H2.6C1.71634 5 1 5.71634 1 6.6V15.4C1 16.2837 1.71634 17 2.6 17H15.4C16.2837 17 17 16.2837 17 15.4V6.6C17 5.71634 16.2837 5 15.4 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 1L9 5L5 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </MenuItemSvg>
                    </SvgHolder>
                    <MenuItemText color={one.color} weight={one.weight}>
                        Campaigns
                    </MenuItemText>
                </MenuItemA>
                <MenuItemA href="/audience" bg={two.bg}>
                    <SvgHolder>
                        <MenuItemSvg viewBox="0 0 22 18" fill="none" stroke={two.color} xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2222 16.9994V15.2216C15.2222 14.2786 14.8476 13.3742 14.1808 12.7074C13.514 12.0406 12.6097 11.666 11.6667 11.666H4.55556C3.61256 11.666 2.70819 12.0406 2.0414 12.7074C1.3746 13.3742 1 14.2786 1 15.2216V16.9994" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.11122 8.11111C10.0749 8.11111 11.6668 6.51924 11.6668 4.55556C11.6668 2.59188 10.0749 1 8.11122 1C6.14754 1 4.55566 2.59188 4.55566 4.55556C4.55566 6.51924 6.14754 8.11111 8.11122 8.11111Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5553 16.999V15.2213C20.5548 14.4335 20.2926 13.6682 19.8099 13.0455C19.3272 12.4229 18.6515 11.9782 17.8887 11.7812" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.333 1.11523C15.0978 1.31106 15.7757 1.75586 16.2598 2.37951C16.7439 3.00316 17.0066 3.77019 17.0066 4.55968C17.0066 5.34916 16.7439 6.11619 16.2598 6.73985C15.7757 7.3635 15.0978 7.8083 14.333 8.00412" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </MenuItemSvg>
                    </SvgHolder>
                    <MenuItemText color={two.color} weight={two.weight}>
                        Audience
                    </MenuItemText>
                </MenuItemA>
                <MenuItemA href="/account" bg={three.bg}>
                    <SvgHolder>
                        <MenuItemSvg viewBox="0 0 17 18" fill="none" stroke={three.color} xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2222 16.9993V15.2216C15.2222 14.2786 14.8476 13.3742 14.1808 12.7074C13.514 12.0406 12.6097 11.666 11.6667 11.666H4.55556C3.61256 11.666 2.70819 12.0406 2.0414 12.7074C1.3746 13.3742 1 14.2786 1 15.2216V16.9993" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.11122 8.11111C10.0749 8.11111 11.6668 6.51923 11.6668 4.55556C11.6668 2.59188 10.0749 1 8.11122 1C6.14754 1 4.55566 2.59188 4.55566 4.55556C4.55566 6.51923 6.14754 8.11111 8.11122 8.11111Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </MenuItemSvg>
                    </SvgHolder>
                    <MenuItemText color={three.color} weight={three.weight}>
                        Account
                    </MenuItemText>
                </MenuItemA>
            </MenuHolder>
            <HoverToOpen>
                <HoverSvg viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96406 5.60637L0.920314 0.104809C0.901908 0.0903191 0.879789 0.081314 0.856496 0.0788282C0.833203 0.0763424 0.809681 0.0804768 0.788632 0.0907565C0.767583 0.101036 0.749861 0.117045 0.7375 0.136943C0.725139 0.156841 0.71864 0.179822 0.718751 0.203247V1.41106C0.718751 1.48762 0.754689 1.56106 0.814064 1.60793L6.43906 6.00012L0.814064 10.3923C0.753126 10.4392 0.718751 10.5126 0.718751 10.5892V11.797C0.718751 11.9017 0.839064 11.9595 0.920314 11.8954L7.96406 6.39387C8.02393 6.34717 8.07236 6.28744 8.10567 6.21921C8.13898 6.15098 8.1563 6.07605 8.1563 6.00012C8.1563 5.92419 8.13898 5.84927 8.10567 5.78104C8.07236 5.71281 8.02393 5.65307 7.96406 5.60637Z"/>
                </HoverSvg>

            </HoverToOpen>
        </LeftBarHolder>
    )
}

const HoverSvg = styled.svg`

    height: 50%;
    fill: ${Colors.dark};

`

const HoverToOpen = styled.div`

    width: 50px;
    height: 50px;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${Colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: -1;
    transition: 400ms ease-in-out;

    @media (min-width: 1366px)
        {
            left: -50px;
        }

`

const MenuItemText = styled.div`

    font-size: 14px;
    font-weight: ${props=> props.weight};
    margin-right: 15%;
    display: flex;
    align-items: center;
    color: ${props => props.color};
    transition: 400ms ease-in-out;

`

const SvgHolder = styled.div`

    height: 50px;
    margin-left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 400ms ease-in-out;

`

const MenuItemSvg = styled.svg`

    height: 18px;
    transition: 400ms ease-in-out;
`

const MenuHolder = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;    
    transition: 400ms ease-in-out;

`

const MenuItemA = styled.a`

    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props=> props.bg};
    border-radius: 5px;
    margin-bottom: 12px;
    transition: 400ms ease-in-out;

`


const LogoHolder = styled.div`

    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 400ms ease-in-out;

`

const LeftBarHolder = styled.div`

    position: fixed;
    left: 0px;
    width: 15vw;
    max-width: 320px;
    min-width: 200px; 
    height: 100vh;
    background-color: ${Colors.light};
    transition: 400ms ease-in-out;

    @media (max-width: 1366px)
    {
        width: 320px;
        left: -320px;
    }

    &:hover
    {
        left: 0px;
    }

    &:hover ${HoverToOpen} {
        left: -50px;
    }

    transition: 400ms ease-in-out;

`

const SVG4 = () => {
    return(
        <svg width="130" height="21" viewBox="0 0 130 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.994 11.8572L1.74609 0.309762C1.10136 -0.352038 0 0.116804 0 1.05294V6.16672L13.717 20.2492L27.4344 6.16672V1.05294C27.4344 0.116804 26.3327 -0.352038 25.6883 0.309762L14.4401 11.8572C14.2482 12.0541 13.9882 12.1647 13.717 12.1647C13.4459 12.1647 13.1858 12.0541 12.994 11.8572Z" fill="#111E6C"/>
            <path d="M0 19.4588V12.4102L7.83839 20.2485H0.789085C0.579807 20.2485 0.3791 20.1653 0.231118 20.0172C0.0831356 19.8692 0 19.6682 0 19.4588Z" fill="#111E6C"/>
            <path d="M27.4341 19.458V12.4102L19.5957 20.2485H26.6441C26.8536 20.2485 27.0545 20.1652 27.2027 20.017C27.3508 19.8687 27.4341 19.6675 27.4341 19.458Z" fill="#111E6C"/>
            <path d="M58.4591 18.7004C58.0879 18.5021 57.8651 18.3038 57.7413 18.1054C57.4938 17.684 57.37 16.8163 57.37 15.4529V11.2385C57.37 9.8502 57.172 8.809 56.7512 8.13966C55.9839 6.92493 54.87 6.32995 53.3848 6.32995C51.7264 6.32995 50.4145 7.07367 49.3996 8.5611C49.3006 8.68505 49.2264 8.68505 49.2016 8.5611C48.6818 7.27199 47.4441 6.32995 45.6372 6.32995C43.954 6.32995 42.6174 7.07367 41.6272 8.53631C41.5777 8.61068 41.553 8.63547 41.5282 8.63547C41.5035 8.63547 41.4787 8.61068 41.4787 8.5611V6.92493C41.4787 6.52828 41.3055 6.32995 40.9837 6.32995C40.8599 6.32995 40.7114 6.35475 40.5629 6.42912C39.944 6.70181 39.3005 6.90014 38.6569 7.04888C38.2361 7.14804 38.0381 7.32157 38.0381 7.59427C38.0381 7.79259 38.2114 7.94134 38.5579 8.0405C38.9539 8.16445 39.2262 8.2884 39.35 8.43714C39.5233 8.66026 39.6223 9.28002 39.6223 10.346V15.4529C39.6223 16.8411 39.4985 17.7336 39.251 18.1054C39.0777 18.3533 38.8302 18.5517 38.5084 18.7004C38.2609 18.8244 38.1371 18.9731 38.1371 19.1466C38.1371 19.4193 38.3351 19.5433 38.7312 19.5433H42.3698C42.7411 19.5433 42.9391 19.4193 42.9391 19.1466C42.9391 18.9731 42.8154 18.8244 42.5678 18.7004C42.2213 18.5021 41.9738 18.3038 41.85 18.1054C41.6025 17.7336 41.4787 16.8659 41.4787 15.4529C41.4787 13.3457 41.553 11.8582 41.7263 10.941C41.8995 10.0237 42.2461 9.3296 42.7164 8.83379C43.3352 8.21403 44.0778 7.91655 44.9689 7.91655C45.6372 7.91655 46.2065 8.09008 46.6521 8.46194C47.2709 8.95775 47.5679 9.89978 47.5679 11.2881V15.4529C47.5679 16.8163 47.4442 17.684 47.1966 18.1054C47.0729 18.3285 46.8253 18.5269 46.4788 18.7004C46.2065 18.8244 46.0827 18.9731 46.0827 19.1466C46.0827 19.4193 46.2808 19.5433 46.6768 19.5433H50.3155C50.7115 19.5433 50.9095 19.4193 50.9095 19.1466C50.9095 18.9731 50.7858 18.8244 50.5383 18.7004C50.167 18.5021 49.9442 18.3038 49.8204 18.1054C49.5481 17.6592 49.4244 16.7667 49.4244 15.4529C49.4244 13.2465 49.4986 11.7343 49.6224 10.8666C49.7462 9.99895 50.0432 9.30481 50.464 8.83379C51.0333 8.21403 51.7759 7.89175 52.667 7.89175C53.4343 7.89175 54.0779 8.11487 54.573 8.58589C55.1918 9.15607 55.5136 10.0733 55.5136 11.2881V15.4529C55.5136 16.8163 55.3898 17.684 55.1423 18.1054C54.9938 18.3533 54.7462 18.5517 54.3997 18.7004C54.1522 18.8244 54.0284 18.9731 54.0284 19.1466C54.0284 19.4193 54.2264 19.5433 54.6225 19.5433H58.2611C58.6572 19.5433 58.8552 19.4193 58.8552 19.1466C58.8552 18.9731 58.7314 18.8244 58.4591 18.7004ZM68.428 12.7507C68.428 14.5852 68.23 15.9239 67.8339 16.742C67.2151 18.0559 66.0517 18.7252 64.8883 18.7252C63.626 18.7252 62.7348 17.9319 62.7348 16.6676C62.7348 15.7503 63.1804 15.0314 64.0715 14.4612C64.4675 14.2133 65.1606 13.8663 66.1755 13.4448C67.1904 12.9986 67.8834 12.6267 68.2547 12.3293C68.2795 12.3045 68.329 12.2797 68.3537 12.2797C68.4032 12.2797 68.428 12.3045 68.428 12.3788V12.7507ZM71.3488 18.155C71.2746 18.155 71.0518 18.2046 70.9775 18.2046C70.6557 18.2046 70.4577 17.9567 70.3587 17.3865C70.2845 16.8163 70.2845 16.5684 70.2845 15.7999C70.2845 15.3041 70.2845 14.5852 70.3092 13.6184C70.334 12.6515 70.3587 11.9574 70.3587 11.536C70.3587 9.72625 70.0122 8.46194 69.3438 7.69343C68.527 6.77618 67.3636 6.32995 65.8537 6.32995C65.0864 6.32995 64.418 6.40433 63.824 6.57786C62.9081 6.80097 62.2893 7.12325 61.9675 7.5199C61.6952 7.89175 61.5715 8.48673 61.5715 9.3296C61.5715 10.0485 61.7447 10.4204 62.116 10.4204C62.3141 10.4204 62.4873 10.2964 62.6358 10.0485C62.8339 9.77583 63.4527 8.63547 64.1953 8.0405C64.7646 7.56948 65.4082 7.34636 66.1755 7.34636C67.5864 7.34636 68.428 8.31319 68.428 9.6023C68.428 10.7179 67.7349 11.6103 66.3488 12.2549C66.0765 12.3788 65.4329 12.6019 64.3933 12.9738C63.3537 13.3457 62.5863 13.6927 62.0665 14.0646C61.1012 14.7339 60.6061 15.6016 60.6061 16.6428C60.6061 17.6096 60.9774 18.3781 61.7447 18.9483C62.5121 19.5185 63.4032 19.816 64.4428 19.816C66.027 19.816 67.5616 19.0971 68.3537 17.8079C68.4032 17.7336 68.428 17.7088 68.4527 17.7088C68.4775 17.7088 68.5023 17.7336 68.5023 17.8079C68.626 19.1466 69.1706 19.816 70.1359 19.816C70.9528 19.816 71.6954 19.1218 71.6954 18.5269C71.6954 18.279 71.5716 18.155 71.3488 18.155ZM77.9204 2.53701C77.9204 2.28911 77.7223 1.96683 77.3263 1.59497C76.955 1.19832 76.6332 1 76.3609 1C76.1134 1 75.7916 1.19832 75.3956 1.59497C75.0243 1.99162 74.8262 2.3139 74.8262 2.53701C74.8262 2.78491 75.0243 3.10719 75.3956 3.50384C75.7916 3.90049 76.1134 4.09881 76.3609 4.09881C76.6332 4.09881 76.955 3.90049 77.3263 3.52863C77.7223 3.13198 77.9204 2.80971 77.9204 2.53701ZM78.4649 18.7004C78.1184 18.5269 77.8708 18.3285 77.7471 18.1054C77.4996 17.7336 77.3758 16.8411 77.3758 15.4529V6.92493C77.3758 6.52828 77.2273 6.32995 76.9302 6.32995C76.856 6.32995 76.7075 6.37953 76.5094 6.45391C75.9154 6.70181 75.2718 6.90014 74.554 7.07367C73.9847 7.19762 73.8856 7.32157 73.8856 7.59427C73.8856 7.79259 74.0837 7.94134 74.455 8.0405C74.8263 8.11487 75.0738 8.26361 75.2223 8.43714C75.3956 8.63547 75.4698 9.0817 75.4698 9.80062V15.4529C75.4698 16.8659 75.3461 17.7336 75.0985 18.1054C74.9748 18.3038 74.752 18.5021 74.3807 18.7004C74.1332 18.8244 74.0094 18.9731 74.0094 19.1218C74.0094 19.3945 74.2074 19.5433 74.5787 19.5433H78.2669C78.6382 19.5433 78.8362 19.3945 78.8362 19.1218C78.8362 18.9979 78.7124 18.8491 78.4649 18.7004ZM85.6407 18.7004C85.2941 18.5269 85.0466 18.3285 84.9228 18.1054C84.6753 17.7336 84.5515 16.8411 84.5515 15.4529V1.61976C84.5515 1.22311 84.403 1.02479 84.106 1.02479C84.0317 1.02479 83.8832 1.07437 83.6852 1.14874C83.0911 1.39665 82.4475 1.59497 81.7297 1.76851C81.1604 1.89246 81.0614 2.01641 81.0614 2.28911C81.0614 2.48743 81.2594 2.63617 81.6307 2.73533C82.002 2.80971 82.2495 2.95845 82.398 3.13198C82.5713 3.33031 82.6456 3.77653 82.6456 4.49546V15.4529C82.6456 16.8659 82.5218 17.7336 82.2743 18.1054C82.1505 18.3038 81.9277 18.5021 81.5564 18.7004C81.3089 18.8244 81.1851 18.9731 81.1851 19.1218C81.1851 19.3945 81.3832 19.5433 81.7545 19.5433H85.4426C85.8139 19.5433 86.0119 19.3945 86.0119 19.1218C86.0119 18.9979 85.8882 18.8491 85.6407 18.7004ZM102.079 18.2542C101.757 18.0806 101.411 17.7584 101.064 17.3369C100.718 16.8907 100.149 16.0478 99.3317 14.8331L98.4406 13.4696C98.2426 13.1721 97.9208 12.7011 97.7228 12.5276C97.4505 12.1805 97.104 11.9574 96.7574 11.9574C96.5594 11.9574 96.3366 12.0813 96.2624 12.0813C96.1881 12.0813 96.1386 12.0566 96.1386 11.9822C96.1386 11.9326 96.1633 11.883 96.2376 11.8087C97.5247 10.5939 98.5149 9.72625 99.1832 9.18086C99.8763 8.61068 100.569 8.21403 101.262 7.94134C101.733 7.69343 102.426 7.69343 102.426 7.14804C102.426 6.77618 102.178 6.60265 101.683 6.60265H96.9059C96.3614 6.60265 96.0891 6.77618 96.0891 7.14804C96.0891 7.32157 96.2128 7.5199 96.4604 7.71822C96.7079 7.89176 96.8317 8.09008 96.8317 8.26361C96.8317 8.66026 96.2871 9.40397 95.198 10.4948L92.9702 12.6267C92.9455 12.6515 92.896 12.6763 92.8712 12.6763C92.8217 12.6763 92.797 12.6515 92.797 12.5772V1.76851C92.797 1.2727 92.5989 1.02479 92.2276 1.02479C92.0049 1.02479 91.7326 1.09916 91.3613 1.2479C90.7425 1.49581 89.8266 1.76851 88.6632 2.0412C88.1434 2.16515 87.8959 2.36348 87.8959 2.66096C87.8959 2.88408 88.1434 3.10719 88.6137 3.28072C89.0345 3.42947 89.3068 3.65258 89.4801 3.97486C89.6038 4.24755 89.6781 4.84252 89.6781 5.80935V14.7587C89.6781 16.1222 89.5791 17.0147 89.3811 17.4361C89.2078 17.8079 88.9355 18.1054 88.5395 18.3533C88.1682 18.5765 87.9949 18.7748 87.9949 18.9731C87.9949 19.345 88.2672 19.5433 88.8365 19.5433H93.6633C94.2326 19.5433 94.5049 19.345 94.5049 18.9731C94.5049 18.7748 94.3316 18.5765 93.9603 18.3533C93.5395 18.1302 93.2673 17.8079 93.094 17.4361C92.9207 17.0394 92.8217 16.3205 92.8217 15.2793C92.8217 15.1306 92.8712 15.0066 92.9455 14.9323L93.7128 14.2133C93.9603 13.9654 94.1831 13.8415 94.3564 13.8415C94.5792 13.8415 94.8019 14.015 95.0495 14.3373C95.3217 14.6596 95.7425 15.3041 96.3366 16.2957C97.5 18.2046 97.9455 18.8739 98.5149 19.1962C98.8861 19.4193 99.505 19.5433 100.322 19.5433H102.154C102.624 19.5433 102.871 19.3697 102.871 18.9979C102.871 18.6756 102.5 18.4773 102.079 18.2542ZM106.659 11.0897C106.659 10.5195 107.401 7.84217 109.703 7.86696C111.213 7.86696 112.178 8.95775 112.178 10.1229C112.178 11.0154 111.634 11.3376 110.347 11.3376H106.906C106.733 11.3376 106.659 11.2633 106.659 11.0897ZM114.505 16.2957C114.084 16.2957 112.772 17.56 110.718 17.56C109.332 17.56 108.267 17.0394 107.5 15.9735C106.931 15.1554 106.634 14.2133 106.634 13.1473C106.634 12.9738 106.733 12.8746 106.931 12.8746H113.243C114.852 12.8746 115.273 12.3788 115.273 11.1641C115.273 9.97416 114.678 8.53631 113.466 7.5199C112.5 6.7266 111.337 6.32995 109.975 6.32995C108.911 6.32995 107.946 6.57786 107.055 7.07367C104.753 8.36277 103.465 10.8666 103.465 13.4448C103.465 14.3125 103.614 15.1802 103.936 16.0478C104.901 18.5517 107.104 19.7912 109.604 19.7912C111.04 19.7912 112.327 19.4193 113.441 18.7004C114.307 18.1302 115.025 17.3121 115.025 16.8163C115.025 16.5436 114.827 16.2957 114.505 16.2957ZM126.757 13.7919C126.757 16.3949 125.618 18.2294 123.712 18.2294C122.598 18.2294 121.732 17.6344 121.113 16.4693C120.494 15.2793 120.173 13.8415 120.173 12.1805C120.173 9.47835 121.386 7.86696 123.242 7.86696C124.381 7.86696 125.247 8.46194 125.841 9.67667C126.46 10.8666 126.757 12.2301 126.757 13.7919ZM123.49 6.32995C121.608 6.35474 120.049 7.02409 118.787 8.36277C117.524 9.67667 116.905 11.2881 116.905 13.1721C116.905 15.1802 117.499 16.7915 118.712 18.0063C119.925 19.221 121.485 19.816 123.44 19.816C125.297 19.816 126.856 19.1466 128.118 17.8327C129.381 16.4941 130 14.8827 130 12.9986C130 11.0401 129.405 9.45356 128.242 8.21403C127.079 6.94972 125.495 6.32995 123.49 6.32995Z" fill="#111E6C"/>
        </svg>

    )
}
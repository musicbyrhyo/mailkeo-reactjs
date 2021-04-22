import { LeftBar } from "../components/DashBoard/LeftBar"
import { RightBar } from "../components/DashBoard/RightBar"
import { Colors } from "../components/StyledComponents"

export const Account = () => {
    const MenuActive = {
        color: Colors.light,
        bg: Colors.dark,
        weight: 400
    }

    const MenuInActive = {
        color: Colors.dark,
        bg: 'transparent',
        weight: 600
    }


    return (
        <>
            <LeftBar one={MenuInActive} two={MenuInActive} three={MenuActive} />
            <RightBar />
        </>
    )
}

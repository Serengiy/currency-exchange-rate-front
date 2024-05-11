import Side from './Side'
// import Cover from './Cover'
// import Simple from './Simple'
import View from '@/views'
import { useAppSelector } from '@/store'
import {LAYOUT_TYPE_BLANK, LAYOUT_TYPE_MODERN} from '@/constants/theme.constant'
import HorizontalNav from "@/components/template/HorizontalNav";

const AuthLayout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)

    return (
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
            {layoutType === LAYOUT_TYPE_MODERN  ? (
                <div className="h-full">
                    <HorizontalNav></HorizontalNav>
                    <div className="h-full col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                        <div className="px-8">
                            <View />
                        </div>
                    </div>
                </div>
            ) : (
                <Side>
                    <View />
                </Side>
            )}
        </div>
    )
}

export default AuthLayout

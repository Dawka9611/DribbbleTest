import LayoutComponent from "../components/Layout";

const EmptyPage = () => {
    return <LayoutComponent>
        <div className="textBig text-6xl flex items-center justify-center text-white font-bold tracking-wide h-full p-48">
            No content to show
        </div>
    </LayoutComponent>
}

export default EmptyPage
import DashboardButton from "./sideBarButtons/DashboardButton.jsx";
import TransactionManagementButton from "./sideBarButtons/TransactionManagementButton.jsx";
import BudgetManagementButton from "./sideBarButtons/BudgetManagementButton.jsx";
import BurgerButton from "./sideBarButtons/BurgerButton.jsx";

const SideBar = () => {
    return (
        <>
            <BurgerButton />

            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <DashboardButton />
                        <TransactionManagementButton />
                        <BudgetManagementButton />
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default SideBar;

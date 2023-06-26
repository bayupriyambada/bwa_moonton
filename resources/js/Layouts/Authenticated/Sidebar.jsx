import SubscriptionPlans from "./SubscriptionPlans";
import { userMenu, userOthers } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="#">
                    <img src="/assets/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                url={menu.url}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.url && route().current(menu.url)}
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {userOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                url={menu.url}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.url && route().current(menu.url)}
                            />
                        ))}
                    </div>
                    {auth.activePlan && (
                        <SubscriptionPlans
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                            name={auth.activePlan.name}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}

import SubscriptionPlanCard from "@/Components/SubscriptionPlanCard";
import Authenticated from "@/Layouts/Authenticated/Auth";
import { Head } from "@inertiajs/react";
export default function SubscriptionPlan() {
    return (
        <>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <Authenticated>
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {/* <!-- Basic --> */}
                        <SubscriptionPlanCard
                            name="Basic"
                            price={29000}
                            durationInMonth={3}
                            features={[
                                "features 1",
                                "features 2",
                                "features 3",
                            ]}
                        />

                        {/* <!-- For Greatest --> */}
                        <SubscriptionPlanCard
                            isPremium
                            name="Premium"
                            price={99000}
                            durationInMonth={12}
                            features={[
                                "features 1",
                                "features 2",
                                "features 3",
                                "features 4",
                            ]}
                        />
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </Authenticated>
            ;
        </>
    );
}

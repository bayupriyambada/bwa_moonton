import SubscriptionPlanCard from "@/Components/SubscriptionPlanCard";
import Authenticated from "@/Layouts/Authenticated/Auth";
import { Head, router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const onsSelectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.subscribe", {
                subscriptionPlans: id,
            })
        );
    };
    return (
        <>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <Authenticated auth={auth}>
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
                        {subscriptionPlans.map((plan) => (
                            <SubscriptionPlanCard
                                key={plan.id}
                                name={plan.name}
                                price={plan.price}
                                durationInMonth={plan.active_period_in_month}
                                features={JSON.parse(plan.features)}
                                isPremium={plan.name === "Premium"}
                                onSelectSubscription={() =>
                                    onsSelectSubscription(plan.id)
                                }
                            />
                        ))}
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </Authenticated>
            ;
        </>
    );
}

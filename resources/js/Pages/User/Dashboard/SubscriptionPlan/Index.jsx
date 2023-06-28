import SubscriptionPlanCard from "@/Components/SubscriptionPlanCard";
import Authenticated from "@/Layouts/Authenticated/Auth";
import { Head, router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
    const onsSelectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.subscribe", {
                subscriptionPlans: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function (result) {
                console.log(result);
            },
            // Optional
            onPending: function (result) {
                console.log(result);
            },
            // Optional
            onError: function (result) {
                console.log(result);
            },
        });
    };
    return (
        <>
            <Head>
                <title>Subscription Plan</title>
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
                <script type="text/javascript"></script>
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

<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\UserSubscription;
use App\Models\SubscriptionPlans;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env("MIDTRANS_SERVERKEY");
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = false;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = false;
    }
    public function index()
    {
        $subscriptionPlans = SubscriptionPlans::get();
        return inertia("User/Dashboard/SubscriptionPlan/Index", [
            'subscriptionPlans' => $subscriptionPlans,
            'userSubscription' => null


        ]);
    }
    public function subscribe(Request $request, SubscriptionPlans $subscriptionPlans)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlans->id,
            'price' => $subscriptionPlans->price,
            'payment_status' => 'paid'
        ];
        $userSubscription = UserSubscription::create($data);
        $params = [
            'transaction_details' => [
                'order_id' => $userSubscription->id . '-' . Str::random(5),
                'gross_amount' => $userSubscription->price
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        $userSubscription->update([
            'snap_token' => $snapToken
        ]);
        return inertia("User/Dashboard/SubscriptionPlan/Index", [
            'userSubscription' => $userSubscription
        ]);
    }
}

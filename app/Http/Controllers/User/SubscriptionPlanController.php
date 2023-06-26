<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlans::get();
        return inertia("User/Dashboard/SubscriptionPlan/Index", [
            'subscriptionPlans' => $subscriptionPlans
        ]);
    }
    public function subscribe(Request $request, SubscriptionPlans $subscriptionPlans)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlans->id,
            'price' => $subscriptionPlans->price,
            'expired_date' => Carbon::now()->addMonth($subscriptionPlans->active_period_in_month),
            'payment_status' => 'paid'
        ];
        $subscriptionPlans = UserSubscription::create($data);
        return redirect(route("user.dashboard.index"));
    }
}

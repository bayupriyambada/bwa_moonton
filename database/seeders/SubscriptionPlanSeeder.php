<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 30000,
                'active_period_in_month' => '3',
                'features' => json_encode(['features 1', 'features 2', 'features 3']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Premium',
                'price' => 100000,
                'active_period_in_month' => '12',
                'features' => json_encode(['features 1', 'features 2', 'features 3', 'features 4', 'features 5']),
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        SubscriptionPlans::insert($subscriptionPlans);
    }
}

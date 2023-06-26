<?php

namespace App\Models;

use App\Models\UserSubscription;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SubscriptionPlans extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'price', 'active_period_in_month', 'features'];

    /**
     * The roles that belong to the SubscriptionPlans
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userSubscription(): HasMany
    {
        return $this->hasMany(UserSubscription::class);
    }
}

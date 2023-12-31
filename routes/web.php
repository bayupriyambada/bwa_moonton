<?php

use App\Http\Controllers\Admin\MoviesController as AdminMoviesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login');

Route::get('/dashboard', function () {
    return Inertia::render('User/Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get("/", [DashboardController::class, 'index'])->name('index');
    Route::get("/movies/{movies:slug}", [MovieController::class, 'show'])->name('movies.show')->middleware("userCheckSubscription:true");

    Route::get("/subscription-plan", [SubscriptionPlanController::class, 'index'])->name('subscriptionPlan.index')->middleware("userCheckSubscription:false");
    Route::post("/subscription-plan/{subscriptionPlans}/subscribe", [SubscriptionPlanController::class, 'subscribe'])->name('subscriptionPlan.subscribe');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::put("movies/{movies}/restore", [AdminMoviesController::class, 'restore'])->name("movies.restore");
    Route::resource('movies', AdminMoviesController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('prototype')->group(function () {
    Route::get("/login", function () {
        return Inertia::render("Prototype/Login");
    })->name("prototype.login");
    Route::get("/register", function () {
        return Inertia::render("Prototype/Register");
    })->name("prototype.register");
    Route::get("/dashboard", function () {
        return Inertia::render("Prototype/Dashboard");
    })->name("prototype.dashboard");
    Route::get("/subscription-plan", function () {
        return Inertia::render("Prototype/SubscriptionPlan");
    })->name("prototype.subscriptionPlan");
    Route::get("/movie/{slug}", function () {
        return Inertia::render("Prototype/Movie/Show");
    })->name("prototype.movie.show");
});

require __DIR__.'/auth.php';

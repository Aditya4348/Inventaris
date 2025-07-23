<?php

use App\Http\Controllers\action\CategorysController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\action\ItemsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group( function() {
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // route Category
    Route::get('/category', [IndexController::class, 'indexCategory'])->name('category');
    Route::resource('category', CategorysController::class)->only(['create','store','edit','update', 'destroy'])->names(['category.create', 'category.store', 'category.edit', 'category.update', 'category.destroy']);

    // Route Product
    Route::get('/product', [IndexController::class, 'indexItems'])->name('product');
    Route::resource('product', ItemsController::class)->only(['create','store','edit','update', 'destroy'])->names(['product.create', 'product.store', 'product.edit', 'product.update', 'product.destroy']);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

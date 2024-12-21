<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IncomeController;

Route::post('add-income', [IncomeController::class, 'addIncome']);

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IncomeController;

Route::post('add-income', [IncomeController::class, 'addIncome']);
Route::get('get-incomes',[IncomeController::class, 'getIncomes']);

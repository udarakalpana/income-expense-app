<?php

namespace App\Http\Controllers;

use App\Action\Income\AddIncome;
use App\Action\Income\GetIncomes;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\IncomeFormRequest;

class IncomeController extends Controller
{
    public function addIncome(IncomeFormRequest $request, AddIncome $addIncome): JsonResponse
    {
        $validatedIncomeDetails = $request->validated();

        return response()->json($addIncome($validatedIncomeDetails));
    }

    public function getIncomes(GetIncomes $getIncomes): JsonResponse
    {
        return response()->json($getIncomes());
    }

}

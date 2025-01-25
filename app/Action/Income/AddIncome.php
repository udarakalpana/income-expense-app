<?php

namespace App\Action\Income;

use App\Models\Income;

class AddIncome
{
    public function __invoke(array $validatedIncomeDetails): array
    {
        Income::create([
            'income_amount' => $validatedIncomeDetails['income_amount'],
            'income_category' => $validatedIncomeDetails['income_category'],
        ]);

        return [
            'message' => 'Income added successfully',
        ];
    }
}

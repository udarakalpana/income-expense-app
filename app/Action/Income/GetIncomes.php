<?php

namespace App\Action\Income;

use App\Services\ResponseFactory\CommonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class GetIncomes
{
    public function __invoke(): array
    {
        $allIncomes = $this->getAllIncomes();

        if ($allIncomes->isEmpty()) {
            return CommonResponse::returnNotFoundResponse();
        }

        return CommonResponse::returnSuccessResponse($allIncomes);
    }

    private function getAllIncomes(): Collection
    {
        return DB::table('income')->select(
            'id',
            'income_amount',
            'income_category'
        )->get();
    }
}

<?php

namespace App\Services\ResponseFactory;

use App\Interface\CommonResponseInterface;
use Illuminate\Support\Collection;

class CommonResponse implements CommonResponseInterface
{
    public static function returnSuccessResponse(Collection $allIncomes): array
    {
        return[
            'status' => 200,
            'all_incomes' => $allIncomes
        ];
    }

    public static function returnNotFoundResponse(): array
    {
        return [
            'status' => 404,
            'all_incomes' => 'Incomes not found'
        ];
    }
}

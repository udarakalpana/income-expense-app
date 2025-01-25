<?php

namespace App\Interface;

use Illuminate\Support\Collection;

interface CommonResponseInterface
{
    public static function returnSuccessResponse(Collection $allIncomes): array;

    public static function returnNotFoundResponse(): array;
}

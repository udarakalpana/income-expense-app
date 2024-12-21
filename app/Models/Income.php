<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Income extends Model
{
    use HasFactory;

    protected $table = 'income';

    protected $fillable = [
        'income_amount',
        'income_category',
    ];
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Income>
 */
class IncomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'income_amount' => $this->faker->randomFloat(2, 10000, 100000),
            'income_category' => $this->faker->randomElement(['Salary', 'Side Project', 'YouTube Revenue']),
        ];
    }
}

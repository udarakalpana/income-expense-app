<?php

use Tests\TestCase;
use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class AddIncomeTest extends TestCase
{
    use RefreshDatabase;

    public function test_income_and_category_database_save()
    {
        // A - Arrange
        // dummy data that we need to do the test
        $income = Income::factory()->make()->toArray();

        // A - Act / Action
        // implement that we need to test part. (endpoint/ class/ function)
        $response = $this->post('/api/add-income', $income);

        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
        ]);
        $response->assertSimilarJson([
            'message' => 'Income added successfully',
        ]);
        $this->assertDatabaseHas('income', [
            'income_amount' => $income['income_amount'],
            'income_category' => $income['income_category'],
        ]);
    }

    public function test_return_bad_response_if_not_existing_income_amount() {
        $income = Income::factory()->make([
            'income_amount' => 0,
        ])->toArray();

        $response = $this->post('/api/add-income', $income);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'error'
        ]);
        $response->assertSimilarJson([
            'status' => 422,
            'error' => [
                'income_amount' => ['The income amount field must be at least 1.'],
            ]
        ]);

    }
}

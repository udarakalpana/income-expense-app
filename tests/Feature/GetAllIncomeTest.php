<?php


use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class GetAllIncomeTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_all_already_added_incomes()
    {
        // A - arrange
        $income1 = Income::factory()->create();
        $income2 = Income::factory()->create();
        $income3 = Income::factory()->create();


        // A - Act / action
        $response = $this->get('api/get-incomes');

        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'all_incomes'
        ]);
        $response->assertSimilarJson([
            'status' => 200,
            'all_incomes' => [
               [
                   'id' => $income1->id,
                   'income_amount' => $income1->income_amount,
                   'income_category' => $income1->income_category,
               ],
                [
                    'id' => $income2->id,
                    'income_amount' => $income2->income_amount,
                    'income_category' => $income2->income_category,
                ],
                [
                    'id' => $income3->id,
                    'income_amount' => $income3->income_amount,
                    'income_category' => $income3->income_category,
                ]
            ]
        ]);
    }

    public function test_return_not_found_if_not_existing_incomes()
    {
        // A - arrange


        // A - act / action
        $response = $this->get('api/get-incomes');


        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'all_incomes'
        ]);
        $response->assertSimilarJson([
            'status' => 404,
            'all_incomes' => 'Incomes not found'
        ]);

    }

}

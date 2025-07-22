<?php

namespace Database\Seeders;

use App\Models\Categorys;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categorys::factory()->count(30)->create();
    }
}

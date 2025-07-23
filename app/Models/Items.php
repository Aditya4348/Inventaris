<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    /** @use HasFactory<\Database\Factories\ItemsFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'qty',
        'category',
    ];

    // // satu item satu category
    public function Category()
    {
        return $this->belongsTo(Categories::class);
    }

}

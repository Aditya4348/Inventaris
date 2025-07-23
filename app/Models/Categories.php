<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    /** @use HasFactory<\Database\Factories\CategorysFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'description',
    ];


    // satu category banyak item
    public function items()
    {
        return $this->hasMany(Items::class);
    }
}

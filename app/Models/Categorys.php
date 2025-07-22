<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorys extends Model
{
    /** @use HasFactory<\Database\Factories\CategorysFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];


    // satu category banyak item
    public function items()
    {
        return $this->hasMany(Items::class);
    }
}

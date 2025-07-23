<?php

namespace App\Http\Controllers;

use App\Models\Items;
use Illuminate\Http\Request;
use App\Models\Categories;

class IndexController extends Controller
{

    public function indexDashboard(){
        
        return inertia('Dashboard', [
            'categories' => Categories::count(),
            'items' => Items::count(),
        ]);
    }
    
/**
 * Retrieve all categories and return them to the 'index' view using Inertia.
 *
 * @return \Inertia\Response
 */

    public function indexCategory(Request $request)
    {
        $query = Categories::query();

        if ($request->input('search')) {
            $query->where('name', 'like', '%' . $request->input('search') . '%');
        }

         $categories = $query->paginate(10)->withQueryString();
        return inertia('Category', [
            'categories' => $categories
        ]);
    }



    public function indexItems(Request $request)
    {
        $query = Items::with('Category');


        if ($request->input('search')) {
            $query->where('name', 'like', '%' . $request->input('search') . '%');
        }

        $items = $query->paginate(10)->withQueryString();

        return inertia('Product', [
            'items' => $items
        ]);
    }
}

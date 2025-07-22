<?php

namespace App\Http\Controllers\action;

use App\Http\Controllers\Controller;
use App\Models\categorys;
use Illuminate\Http\Request;


class CategorysController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('actions/category/storeCategory');
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validate = $request->validate([
                'name' => 'required|unique:categorys|max:255',
                'description' => 'required',
            ]);

            categorys::create($validate);

            return redirect()->route('category')->with('success', 'Kategori berhasil disimpan!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan, silakan coba lagi.' . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(categorys $categorys)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(categorys $categorys)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, categorys $categorys)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(categorys $categorys)
    {
        //
    }
}

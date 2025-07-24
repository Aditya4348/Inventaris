<?php

namespace App\Http\Controllers\action;

use App\Http\Controllers\Controller;
use App\Models\Categories;
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
                'name' => 'required|unique:categories|max:255',
                'description' => 'required',
            ]);

            Categories::create($validate);

            return redirect()->route('category')->with('success', 'Kategori berhasil disimpan!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan, silakan coba lagi.' . $th->getMessage());
        }
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $data = Categories::find($id);
        return inertia('actions/category/updateCategory', [
            'category' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $id)
    {
        try {
            $data = Categories::find($id);

            if(!$data){
                return back()->with('errors','Data kategori Tidak ditemukan');
            }

            $data->update($request->all());

            return redirect()->route('category')->with('success', 'Data kategori berhasil diupdate!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $data = Categories::find($id);

            if (!$data) {
                return redirect()->back()->with('errors', 'Data Category tidak ditemukan');
            }

            $data->delete();

            return redirect()->route('category')->with('success', 'Data kategori berhasil dihapus!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan, silakan coba lagi.' . $th->getMessage());
        }
    }
}

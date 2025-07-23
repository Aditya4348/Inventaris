<?php

namespace App\Http\Controllers\action;

use App\Models\Categories;
use App\Models\Items;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;



class ItemsController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('actions/product/storeProduct', [
            'categories' => Categories::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validate = $request->validate([
                'name' => 'required|max:255',
                'price' => 'required|numeric',
                'qty' => 'required|numeric',
                'category_id' => 'required|exists:categories,id',
            ]);

            Items::create($validate);

            return redirect()->route('product')->with('success', 'Barang berhasil disimpan!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan, silakan coba lagi.' . $th->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $data = Items::find($id);
        return inertia('actions/product/updateProduct', [
            'items' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $id)
    {
        try {
            $data = Items::find($id);

            if(!$data){
                return back()->with('errors','Data Barang Tidak ditemukan');
            }

            $data->update($request->all());

            return redirect()->route('product')->with('success', 'Data Barang berhasil diupdate!');
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
            $data = Items::find($id);

            if (!$data) {
                return redirect()->back()->with('errors', 'Data Category tidak ditemukan');
            }

            $data->delete();

            return redirect()->route('product')->with('success', 'Data Barang berhasil dihapus!');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan, silakan coba lagi.' . $th->getMessage());
        }
    }
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";

const storeProduct = () => {
    const { categories } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: 0,
        qty: 0,
        category_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("product.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Produk
                </h2>
            }
        >
            <Head title="Tambah Produk" />

            <div className="py-12">
                <div className="container mx-auto md:max-w-4xl max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-bold mb-4">
                                Tambah Produk
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Nama Produk
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Masukkan nama kategori"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Harga Produk
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData("price", parseFloat(e.target.value))
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Masukkan Harga Barang"
                                    />
                                    {errors.price && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.price}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Stok Produk
                                    </label>
                                    <input
                                        type="number"
                                        id="qty"
                                        name="qty"
                                        value={data.qty}
                                        onChange={(e) =>
                                            setData("qty", parseInt(e.target.value))
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Masukkan Jumlah Barang"
                                    />
                                    {errors.qty && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.qty}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="category_id"
                                    >
                                        Pilih Kategori
                                    </label>
                                    <select
                                        id="category_id"
                                        name="category_id"
                                        value={data.category_id}
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="">Pilih kategori</option>
                                        {categories?.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.category_id}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                                >
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default storeProduct;

import Notifikasi from "@/Components/Notifikasi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Product = () => {
    const { flash, items } = usePage().props;
    console.log(flash);
    const [search, setSearch] = useState("");

    // hamdle delete function
    const handleDelete = (id) => {
        if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
            router.delete(route("product.destroy", id));
        }
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            router.get(
                route("product"),
                { search: search },
                { preserveState: true, replace: true }
            );
        }, 500);

        return () => clearTimeout(timeOut);
    }, [search]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Product
                </h2>
            }
            message={
                <>
                    {flash?.success && (
                        <Notifikasi type="success" message={flash.success} />
                    )}
                    {flash?.error && (
                        <Notifikasi type="error" message={flash.error} />
                    )}
                </>
            }
            subHeader={
                <Link
                    href={route("product.create")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Tambah Product
                </Link>
            }
        >
            <Head title="Daftar Product" />

            <div className="py-12 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            {/* Header + Search */}
                            <div className="flex md:flex-row flex-col justify-between items-center gap-5 mb-6">
                                <h2 className="text-2xl font-bold">
                                    Daftar Product
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Cari Product..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Tabel */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border border-gray-200">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Nama
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Harga
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Stock Barang
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {/* Ganti dengan loop item */}
                                        {items.data.length > 0 ? (
                                            items.data.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {item.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {item.qty}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {item.category?.name}
                                                    </td>
                                                    <td className="flex md:flex-row flex-col justify-center items-center gap-5 px-6 py-4 text-sm text-gray-800">
                                                        <Link
                                                            href={route(
                                                                "product.edit",
                                                                item.id
                                                            )}
                                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item.id
                                                                )
                                                            }
                                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-2"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="text-center px-6 py-4 text-sm text-gray-800"
                                                >
                                                    Data Kosong
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex space-x-2">
                                    {items.links.map((link, index) => (
                                        <button
                                            key={index}
                                            className={`px-4 py-2 text-sm rounded ${
                                                link.active
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200 text-gray-700"
                                            } hover:bg-gray-300`}
                                            disabled={!link.url}
                                            onClick={() =>
                                                link.url &&
                                                router.get(
                                                    link.url,
                                                    { search },
                                                    {
                                                        preserveState: true,
                                                        replace: true,
                                                    }
                                                )
                                            }
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Product;

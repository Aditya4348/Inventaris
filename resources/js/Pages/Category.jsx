import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Category() {
    const { categories } = usePage().props;
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            router.get(
                route("category"),
                { search: search },
                { preserveState: true, replace: true }
            );
        }, 500);

        return () => clearTimeout(timeOut);
    }, [search]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kategori
                </h2>
            }
        >
            <Head title="Kategori" />

            <div className="py-12 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            {/* Header + Search */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Daftar Items
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Cari item..."
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
                                                Deskripsi
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {/* Ganti dengan loop item */}
                                        {categories.data.map(
                                            (category, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {category.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        {category.description}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800">
                                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                                            Edit
                                                        </button>
                                                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-2">
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex space-x-2">
                                    {categories.links.map((link, index) => (
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
                                                router.get(link.url, {search}, 
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
}

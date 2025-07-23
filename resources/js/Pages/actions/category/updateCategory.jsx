import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";

/**
 * Component untuk edit kategori
 *
 * Mengambil data dari props yang dikirim controller lewat inertia
 * Dan menggunakannya untuk mengisi form edit kategori
 */
const UpdateCategory = () => {
    const { category } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: category.name || "",
        description: category.description || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("category.update", category.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Kategori
                </h2>
            }
        >
            <Head title="Edit Kategori" />

            <div className="py-12">
                <div className="container mx-auto md:max-w-4xl max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-bold mb-4">
                                edit Kategori
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Nama Kategori
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
                                        htmlFor="description"
                                    >
                                        Deskripsi
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Masukkan deskripsi"
                                    ></textarea>
                                    {errors.description && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.description}
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

export default UpdateCategory;


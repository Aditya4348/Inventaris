import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { categories, items } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Total Categories */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm text-gray-500 font-medium">
                                    Total Kategori
                                </h2>
                                <p className="text-2xl font-semibold text-gray-800">
                                    {categories ?? 0}
                                </p>
                            </div>
                            <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Total Products */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm text-gray-500 font-medium">
                                    Total Produk
                                </h2>
                                <p className="text-2xl font-semibold text-gray-800">
                                    {items ?? 0}
                                </p>
                            </div>
                            <div className="text-green-600 bg-green-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 7h18M3 12h18M3 17h18"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

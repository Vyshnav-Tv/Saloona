<?php 
namespace App\Services;

use App\Models\Service;
class ServicesService
{

public function index()
    {
        $services = Service::where('is_active', true)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $services,
        ]);
    }

    public function show(Service $service)
    {
        if (!$service->is_active) {
            return response()->json([
                'success' => false,
                'message' => 'Service not available',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $service,
        ]);
    }

}
<?php

namespace App\Http\Controllers;

use App\Http\Resources\BillingAddressResource;
use App\Models\BillingAddress;
use Illuminate\Http\Request;

class BillingAddressController extends Controller
{
    public function index()
    {
        $billing = BillingAddress::where('user_id', auth()->id())->first();

        if (! $billing) {
            return response()->json(['message' => 'Billing address not found'], 404);
        }

        return new BillingAddressResource($billing);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'sometimes',
        ]);

        $userId = $request->user_id ?? auth()->id();

        $billing = BillingAddress::updateOrCreate(
            ['user_id' => $userId],
            [
                'name' => $request->name,
                'village' => $request->village,
                'sangkat' => $request->sangkat,
                'district' => $request->district,
                'state' => $request->state,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
            ]
        );

        return new BillingAddressResource($billing);
    }

    public function update(Request $request)
    {
        $billing = BillingAddress::where('user_id', auth()->id())->first();

        if (! $billing) {
            return response()->json(['message' => 'Billing address not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'village' => 'sometimes|string|max:255',
            'sangkat' => 'sometimes|string|max:255',
            'district' => 'sometimes|string|max:255',
            'state' => 'sometimes|string|max:255',
            'email' => 'sometimes|email',
            'phone_number' => 'sometimes|string|max:25',
        ]);
        $request['updated_at'] = now();

        $billing->update($request->all());

        return new BillingAddressResource($billing);
    }

    public function destroy()
    {
        $billing = BillingAddress::where('user_id', auth()->id())->first();

        if (! $billing) {
            return response()->json(['message' => 'Billing address not found'], 404);
        }

        $billing->delete();

        return response()->json(['message' => 'Billing address deleted successfully']);
    }
}

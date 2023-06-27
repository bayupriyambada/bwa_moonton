<?php

namespace App\Http\Requests\Admin\Movies;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole("admin");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:movies,name',
            'category' => 'required',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image|max:1024',
            'rating' => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index()
      {
        $images = Image::where('deleted', false)->get();
        return $images->toJson();
      }
    
    public function deleted()
      {
        $images = Image::where('deleted', true)->get();
        return $images->toJson();
      }
    
    public function toDelete(Image $image)
      {
        $image->deleted = true;
        $image->update();

        return response()->json('Image deleted!');
      }
    
    public function toRestore(Image $image)
      {
        $image->deleted = false;
        $image->update();

        return response()->json('Image restored!');
      }
}

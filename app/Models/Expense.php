<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class UserFavorite extends Model
{
    protected $fillable = [
        'user_id', 'name', 'brief',
    ];


}

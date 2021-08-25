<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'history';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'datetime',
        'info',
        's_id',
        'i_id',
    ];
}

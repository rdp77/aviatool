<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'workshop';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'name',
        'cupboard'
    ];

    public function relationTransaction()
    {
        return $this->hasOne('App\Models\Transaction', 'id', 'w_id');
    }
}

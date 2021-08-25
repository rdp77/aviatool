<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Borrow extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'borrow';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'id',
        'barcode',
        'code',
        'date',
        'info'
    ];

    public function relationTransaction()
    {
        return $this->hasOne('App\Models\Transaction', 'id', 'b_id');
    }
}

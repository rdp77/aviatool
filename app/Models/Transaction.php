<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'transaction';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'id',
        'b_id',
        'return',
        'w_id',
        'i_id',
        's_id',
    ];

    public function relationBorrow()
    {
        return $this->belongsTo('App\Models\Borrow', 'b_id', 'id');
    }

    public function relationWorkshop()
    {
        return $this->belongsTo('App\Models\Workshop', 'w_id', 'id');
    }

    public function relationStudent()
    {
        return $this->belongsTo('App\Models\Student', 's_id', 'id');
    }
}

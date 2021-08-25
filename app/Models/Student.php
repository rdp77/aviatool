<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'student';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'name',
        'c_id',
        'code'
    ];

    public function relationClass()
    {
        return $this->belongsTo('App\Models\StudentClass', 'c_id', 'id');
    }

    public function relationTransaction()
    {
        return $this->hasOne('App\Models\Transaction', 'id', 's_id');
    }
}

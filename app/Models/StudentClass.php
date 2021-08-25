<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentClass extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'class';
    public $remember_token = false;
    public $timestamps = false;

    protected $fillable = [
        'name',
        'max'
    ];

    public function relationStudent()
    {
        return $this->hasMany('App\Models\Student', 'c_id', 'id');
    }
}

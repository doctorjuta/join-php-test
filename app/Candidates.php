<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidates extends Model
{
    public function get_name()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}

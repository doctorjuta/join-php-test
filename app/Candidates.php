<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidates extends Model
{
    public static $STATE_LIST = array(
        'Submitted',
        'In review',
        'Not a fit',
        'Hired'
    );


    public function get_name()
    {
        return $this->first_name . ' ' . $this->last_name;
    }


    public function get_state()
    {
        return self::$STATE_LIST[$this->state];
    }


    public static function get_all_states() {
        return self::$STATE_LIST;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public $appends = [
        'excerpt'
    ];

    public function getExcerptAttribute() {
        return explode("\n\n", $this->body)[0];
    }
}

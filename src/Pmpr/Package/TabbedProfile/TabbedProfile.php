<?php
/*   _______________________________________
    |  Obfuscated by PMPR - Php Obfuscator  |
    |             613bb99ac92d2             |
    |_______________________________________|
*/

namespace Pmpr\Package\TabbedProfile;

use Pmpr\Common\Foundation\Manipulate\ManipulateUser;

class TabbedProfile extends Container
{
    
    public function __construct()
    {
        $this->gkieogwukagigisy(__DIR__);
        if ($this->gmiyqqaekqcsoime()) {
            parent::__construct();
        }
    }
    public function wigskegsqequoeks()
    {
        $this->qcsmikeggeemccuu('admin_init', [$this, 'kkucmcaayaieasyi']);
        parent::wigskegsqequoeks();
    }
    public function kkucmcaayaieasyi()
    {
        if (ManipulateUser::eoyueosccuoeqkee()) {
            $eygsasmqycagyayw = $this->miocmcoykayoyyau();
            $eygsasmqycagyayw->ayeieigcckcmsikq($eygsasmqycagyayw->owygwqwawqoiusis('admin', $eygsasmqycagyayw->get('admin.js')));
            $eygsasmqycagyayw->ikqyiskqaaymscgw('extra', ['id' => 'miscellaneous', 'title' => __('Miscellaneous', PR__PKG__TABBED_PROFILE)]);
        }
    }
}

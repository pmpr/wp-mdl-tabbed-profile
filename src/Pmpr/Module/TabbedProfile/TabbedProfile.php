<?php
/*   _______________________________________
    |  Obfuscated by PMPR - Php Obfuscator  |
    |             680106ae14706             |
    |_______________________________________|
*/
 namespace Pmpr\Module\TabbedProfile; use Pmpr\Common\Foundation\Container\ModuleInitiator; use Pmpr\Common\Foundation\Interfaces\Constants; class TabbedProfile extends ModuleInitiator { public function register() { $this->gkieogwukagigisy(__DIR__, [Constants::qescuiwgsyuikume => static function () { return __('Tabbed Profile', PR__MDL__TABBED_PROFILE); }, Constants::wuowaiyouwecckaw => false]); } public function wigskegsqequoeks() { $this->waqewsckuayqguos('before_enqueue_backend_assets', [$this, 'enqueue']); parent::wigskegsqequoeks(); } public function enqueue() { if ($this->caokeucsksukesyo()->issssuygyewuaswa()->eoyueosccuoeqkee()) { $meakksicouekcgoe = $this->caokeucsksukesyo()->usugyumcgeaaowsi(); $meakksicouekcgoe->qeqgammgesiwiysc($meakksicouekcgoe->owygwqwawqoiusis($this, 'admin', 'admin.js')); $meakksicouekcgoe->wwmusmkkcwsiciou($this, 'extra', [Constants::gouqcwikiiygyasc => 'miscellaneous', Constants::qescuiwgsyuikume => __('Miscellaneous', PR__MDL__TABBED_PROFILE)]); } } }

var webpackConfig = {
  mode: 'TMPL_mode',
  entry: {
    TMPL_entry_point
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@angular/common': `${process.cwd()}/TMPL_root_dir/external/angular/packages/common`,
      '@angular/core': `${process.cwd()}/TMPL_root_dir/external/angular/packages/core`,
      '@angular/platform-browser': `${process.cwd()}/TMPL_root_dir/external/angular/packages/platform-browser`,

      //Rewrite absolute workspace imports in ngfactory files
      'TMPL_workspace': `${process.cwd()}/TMPL_root_dir`
    }
  }
};

module.exports = webpackConfig;
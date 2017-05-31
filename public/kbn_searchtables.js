import 'plugins/kbn_searchtables/kbn_searchtables.less';
import 'plugins/kbn_searchtables/kbn_searchtables_controller';
import 'plugins/kbn_searchtables/kbn_searchtables_params';
import 'ui/agg_table';
import 'ui/agg_table/agg_table_group';
import VisVisTypeProvider from 'ui/vis/vis_type';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import SearchTablesVisTemplate from 'plugins/kbn_searchtables/kbn_searchtables.html';
import visTypesRegistry from 'ui/registry/vis_types';
import image from './images/icon-table.svg';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// our params are a bit complex so we will manage them with a directive

// require the directives that we use as well

// register the provider with the visTypes registry
visTypesRegistry.register(SearchTablesVisTypeProvider);

// define the SearchTablesVisType
function SearchTablesVisTypeProvider(Private) {
  const VisType = Private(VisVisTypeProvider);
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // define the SearchTablesVisController which is used in the template
  // by angular's ng-controller directive

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'search-table',
    title: 'Data Table (Searchable)',
    image,
    description: 'Display values in a table and an input for search items without applying filters',
    category: VisType.CATEGORY.DATA,
    template: SearchTablesVisTemplate,
    params: {
      defaults: {
        perPage: 10,
        showPartialRows: false,
        showMeticsAtAllLevels: false,
        sort: {
          columnIndex: null,
          direction: null
        },
        showTotal: false,
        totalFunc: 'sum'
      },
      editor: '<kbn-searchtables-params></kbn-searchtables-params>'
    },
    implementsRenderComplete: true,
    hierarchicalData: function (vis) {
      return Boolean(vis.params.showPartialRows || vis.params.showMeticsAtAllLevels);
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      },
      {
        group: 'buckets',
        name: 'bucket',
        title: 'Split Rows'
      },
      {
        group: 'buckets',
        name: 'split',
        title: 'Split Table'
      }
    ])
  });
}

export default SearchTablesVisTypeProvider;

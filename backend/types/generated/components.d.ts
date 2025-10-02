import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsFeatureCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_cards';
  info: {
    displayName: 'Feature Cards';
    icon: 'layer';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.feature-cards': SectionsFeatureCards;
    }
  }
}

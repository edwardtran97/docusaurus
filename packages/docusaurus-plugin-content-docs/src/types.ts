/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslint-disable-next-line spaced-comment
/// <reference types="@docusaurus/module-type-aliases" />

export type DocFile = {
  source: string;
  content: string;
  lastUpdate: LastUpdateData;
};

export type VersionName = string;

export type VersionMetadata = {
  versionName: VersionName; // 1.0.0
  versionLabel: string; // Version 1.0.0
  versionPath: string; // /baseUrl/docs/1.0.0
  isLast: boolean;
  docsDirPath: string; // versioned_docs/1.0.0
  sidebarFilePath: string; // versioned_sidebars/1.0.0.json
  routePriority: number | undefined; // -1 for the latest docs
};

export type MetadataOptions = {
  routeBasePath: string;
  homePageId?: string;
  editUrl?: string;
  showLastUpdateTime?: boolean;
  showLastUpdateAuthor?: boolean;
};

export type PathOptions = {
  path: string;
  sidebarPath: string;
};

export type PluginOptions = MetadataOptions &
  PathOptions & {
    id: string;
    include: string[];
    docLayoutComponent: string;
    docItemComponent: string;
    remarkPlugins: ([Function, object] | Function)[];
    rehypePlugins: string[];
    admonitions: any;
    disableVersioning: boolean;
    excludeNextVersionDocs?: boolean;
    includeCurrentVersion: boolean;
  };

export type SidebarItemDoc = {
  type: 'doc' | 'ref';
  id: string;
};

export type SidebarItemLink = {
  type: 'link';
  href: string;
  label: string;
};

export type SidebarItemCategory = {
  type: 'category';
  label: string;
  items: SidebarItem[];
  collapsed: boolean;
};

export type SidebarItemCategoryRaw = {
  type: 'category';
  label: string;
  items: SidebarItemRaw[];
  collapsed?: boolean;
};

export type SidebarItem =
  | SidebarItemDoc
  | SidebarItemLink
  | SidebarItemCategory;

export type SidebarItemRaw =
  | string
  | SidebarCategoryShorthandRaw
  | SidebarItemDoc
  | SidebarItemLink
  | SidebarItemCategoryRaw
  | {
      type: string;
      [key: string]: unknown;
    };

export type SidebarCategoryShorthandRaw = {
  [sidebarCategory: string]: SidebarItemRaw[];
};

export type Sidebars = {
  [sidebarId: string]: SidebarItem[];
};

export type OrderMetadata = {
  previous?: string;
  next?: string;
  sidebar?: string;
};

export type Order = {
  [id: string]: OrderMetadata;
};

export type LastUpdateData = {
  lastUpdatedAt?: number;
  lastUpdatedBy?: string;
};

export type DocMetadataBase = LastUpdateData & {
  version: VersionName;
  unversionedId: string;
  id: string;
  isDocsHomePage: boolean;
  title: string;
  description: string;
  source: string;
  slug: string;
  permalink: string;
  sidebar_label?: string;
  editUrl?: string | null;
};

export type DocNavLink = {
  title: string;
  permalink: string;
};

export type DocMetadata = DocMetadataBase & {
  sidebar?: string;
  previous?: DocNavLink;
  next?: DocNavLink;
};

export type DocsMetadataRaw = {
  [id: string]: DocMetadataBase;
};

export type SourceToPermalink = {
  [source: string]: string;
};

export type PermalinkToSidebar = {
  [permalink: string]: string;
};

export type LoadedVersion = VersionMetadata & {
  versionPath: string;
  mainDocId: string;
  docs: DocMetadata[];
  sidebars: Sidebars;
  permalinkToSidebar: Record<string, string>;
};

export type LoadedContent = {
  loadedVersions: LoadedVersion[];
};

export type GlobalDoc = {
  id: string;
  path: string;
};

export type GlobalVersion = {
  name: VersionName;
  label: string;
  isLast: boolean;
  path: string;
  mainDocId: string; // home doc (if docs homepage configured), or first doc
  docs: GlobalDoc[];
};

export type GlobalPluginData = {
  path: string;
  versions: GlobalVersion[];
};

export type PropVersionMetadata = {
  version: VersionName;
  docsSidebars: PropSidebars;
  permalinkToSidebar: PermalinkToSidebar;
};

export type PropSidebarItemLink = SidebarItemLink; // same

export type PropSidebarItemCategory = {
  type: 'category';
  label: string;
  items: PropSidebarItem[];
  collapsed?: boolean;
};

export type PropSidebarItem = PropSidebarItemLink | PropSidebarItemCategory;

export type PropSidebars = {
  [sidebarId: string]: PropSidebarItem[];
};

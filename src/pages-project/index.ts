/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PagesProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#account_id PagesProject#account_id}
  */
  readonly accountId: string;
  /**
  * Configs for the project build process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#build_config PagesProject#build_config}
  */
  readonly buildConfig?: PagesProjectBuildConfig;
  /**
  * Configs for deployments in a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}
  */
  readonly deploymentConfigs?: PagesProjectDeploymentConfigs;
  /**
  * Name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
  /**
  * Production branch of the project. Used to identify production deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#production_branch PagesProject#production_branch}
  */
  readonly productionBranch: string;
  /**
  * Configs for the project source control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#source PagesProject#source}
  */
  readonly source?: PagesProjectSource;
}
export interface PagesProjectBuildConfig {
  /**
  * Enable build caching for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#build_caching PagesProject#build_caching}
  */
  readonly buildCaching?: boolean | cdktn.IResolvable;
  /**
  * Command used to build project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#build_command PagesProject#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Output directory of the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}
  */
  readonly destinationDir?: string;
  /**
  * Directory to run the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#root_dir PagesProject#root_dir}
  */
  readonly rootDir?: string;
  /**
  * The classifying tag for analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}
  */
  readonly webAnalyticsTag?: string;
  /**
  * The auth token for analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}
  */
  readonly webAnalyticsToken?: string;
}

export function pagesProjectBuildConfigToTerraform(struct?: PagesProjectBuildConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_caching: cdktn.booleanToTerraform(struct!.buildCaching),
    build_command: cdktn.stringToTerraform(struct!.buildCommand),
    destination_dir: cdktn.stringToTerraform(struct!.destinationDir),
    root_dir: cdktn.stringToTerraform(struct!.rootDir),
    web_analytics_tag: cdktn.stringToTerraform(struct!.webAnalyticsTag),
    web_analytics_token: cdktn.stringToTerraform(struct!.webAnalyticsToken),
  }
}


export function pagesProjectBuildConfigToHclTerraform(struct?: PagesProjectBuildConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_caching: {
      value: cdktn.booleanToHclTerraform(struct!.buildCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_command: {
      value: cdktn.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_dir: {
      value: cdktn.stringToHclTerraform(struct!.destinationDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_dir: {
      value: cdktn.stringToHclTerraform(struct!.rootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_analytics_tag: {
      value: cdktn.stringToHclTerraform(struct!.webAnalyticsTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_analytics_token: {
      value: cdktn.stringToHclTerraform(struct!.webAnalyticsToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectBuildConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectBuildConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCaching = this._buildCaching;
    }
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._destinationDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDir = this._destinationDir;
    }
    if (this._rootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDir = this._rootDir;
    }
    if (this._webAnalyticsTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsTag = this._webAnalyticsTag;
    }
    if (this._webAnalyticsToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAnalyticsToken = this._webAnalyticsToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectBuildConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildCaching = undefined;
      this._buildCommand = undefined;
      this._destinationDir = undefined;
      this._rootDir = undefined;
      this._webAnalyticsTag = undefined;
      this._webAnalyticsToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildCaching = value.buildCaching;
      this._buildCommand = value.buildCommand;
      this._destinationDir = value.destinationDir;
      this._rootDir = value.rootDir;
      this._webAnalyticsTag = value.webAnalyticsTag;
      this._webAnalyticsToken = value.webAnalyticsToken;
    }
  }

  // build_caching - computed: true, optional: true, required: false
  private _buildCaching?: boolean | cdktn.IResolvable; 
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }
  public set buildCaching(value: boolean | cdktn.IResolvable) {
    this._buildCaching = value;
  }
  public resetBuildCaching() {
    this._buildCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCachingInput() {
    return this._buildCaching;
  }

  // build_command - computed: true, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // destination_dir - computed: true, optional: true, required: false
  private _destinationDir?: string; 
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }
  public set destinationDir(value: string) {
    this._destinationDir = value;
  }
  public resetDestinationDir() {
    this._destinationDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirInput() {
    return this._destinationDir;
  }

  // root_dir - computed: true, optional: true, required: false
  private _rootDir?: string; 
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }
  public set rootDir(value: string) {
    this._rootDir = value;
  }
  public resetRootDir() {
    this._rootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirInput() {
    return this._rootDir;
  }

  // web_analytics_tag - computed: true, optional: true, required: false
  private _webAnalyticsTag?: string; 
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }
  public set webAnalyticsTag(value: string) {
    this._webAnalyticsTag = value;
  }
  public resetWebAnalyticsTag() {
    this._webAnalyticsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTagInput() {
    return this._webAnalyticsTag;
  }

  // web_analytics_token - computed: true, optional: true, required: false
  private _webAnalyticsToken?: string; 
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
  public set webAnalyticsToken(value: string) {
    this._webAnalyticsToken = value;
  }
  public resetWebAnalyticsToken() {
    this._webAnalyticsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAnalyticsTokenInput() {
    return this._webAnalyticsToken;
  }
}
export interface PagesProjectCanonicalDeploymentBuildConfig {
}

export function pagesProjectCanonicalDeploymentBuildConfigToTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface PagesProjectCanonicalDeploymentDeploymentTriggerMetadata {
}

export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_dirty - computed: true, optional: false, required: false
  public get commitDirty() {
    return this.getBooleanAttribute('commit_dirty');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface PagesProjectCanonicalDeploymentDeploymentTrigger {
}

export function pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectCanonicalDeploymentEnvVars {
}

export function pagesProjectCanonicalDeploymentEnvVarsToTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct?: PagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PagesProjectCanonicalDeploymentEnvVarsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectCanonicalDeploymentEnvVarsOutputReference {
    return new PagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectCanonicalDeploymentLatestStage {
}

export function pagesProjectCanonicalDeploymentLatestStageToTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct?: PagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface PagesProjectCanonicalDeploymentSourceConfig {
}

export function pagesProjectCanonicalDeploymentSourceConfigToTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct?: PagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface PagesProjectCanonicalDeploymentSource {
}

export function pagesProjectCanonicalDeploymentSourceToTerraform(struct?: PagesProjectCanonicalDeploymentSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentSourceToHclTerraform(struct?: PagesProjectCanonicalDeploymentSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new PagesProjectCanonicalDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectCanonicalDeploymentStages {
}

export function pagesProjectCanonicalDeploymentStagesToTerraform(struct?: PagesProjectCanonicalDeploymentStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentStagesToHclTerraform(struct?: PagesProjectCanonicalDeploymentStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentStagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PagesProjectCanonicalDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PagesProjectCanonicalDeploymentStagesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PagesProjectCanonicalDeploymentStagesOutputReference {
    return new PagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PagesProjectCanonicalDeployment {
}

export function pagesProjectCanonicalDeploymentToTerraform(struct?: PagesProjectCanonicalDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectCanonicalDeploymentToHclTerraform(struct?: PagesProjectCanonicalDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectCanonicalDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectCanonicalDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectCanonicalDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new PagesProjectCanonicalDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new PagesProjectCanonicalDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new PagesProjectCanonicalDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new PagesProjectCanonicalDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new PagesProjectCanonicalDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }
}
export interface PagesProjectDeploymentConfigsPreviewAiBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#project_id PagesProject#project_id}
  */
  readonly projectId: string;
}

export function pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAiBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewAiBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewAiBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class PagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#dataset PagesProject#dataset}
  */
  readonly dataset: string;
}

export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktn.stringToTerraform(struct!.dataset),
  }
}


export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktn.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: true, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}

export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewBrowsers {
}

export function pagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewBrowsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewBrowsers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewBrowsers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewBrowsersOutputReference {
    return new PagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewD1Databases {
  /**
  * UUID of the D1 database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewD1Databases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewD1Databases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewD1Databases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces {
  /**
  * ID of the Durable Object namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId: string;
}

export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktn.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktn.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewEnvVars {
  /**
  * Available values: "plain_text", "secret_text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#type PagesProject#type}
  */
  readonly type: string;
  /**
  * Environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#value PagesProject#value}
  */
  readonly value: string;
}

export function pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewEnvVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewEnvVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewHyperdriveBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewHyperdriveBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewKvNamespaces {
  /**
  * ID of the KV namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId: string;
}

export function pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktn.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktn.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewKvNamespaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewLimits {
  /**
  * CPU time limit in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#cpu_ms PagesProject#cpu_ms}
  */
  readonly cpuMs: number;
}

export function pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_ms: cdktn.numberToTerraform(struct!.cpuMs),
  }
}


export function pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_ms: {
      value: cdktn.numberToHclTerraform(struct!.cpuMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMs = this._cpuMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuMs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuMs = value.cpuMs;
    }
  }

  // cpu_ms - computed: true, optional: false, required: true
  private _cpuMs?: number; 
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
  public set cpuMs(value: number) {
    this._cpuMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMsInput() {
    return this._cpuMs;
  }
}
export interface PagesProjectDeploymentConfigsPreviewMtlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
  */
  readonly certificateId: string;
}

export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktn.stringToTerraform(struct!.certificateId),
  }
}


export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktn.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewMtlsCertificates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: true, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}

export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewPlacement {
  /**
  * Placement mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#mode PagesProject#mode}
  */
  readonly mode?: string;
}

export function pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewPlacement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewPlacement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewPlacement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PagesProjectDeploymentConfigsPreviewQueueProducers {
  /**
  * Name of the Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
}

export function pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewQueueProducers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewQueueProducers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference {
    return new PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewR2Buckets {
  /**
  * Jurisdiction of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Name of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
}

export function pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jurisdiction: cdktn.stringToTerraform(struct!.jurisdiction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jurisdiction: {
      value: cdktn.stringToHclTerraform(struct!.jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewR2Buckets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewR2Buckets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jurisdiction = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jurisdiction = value.jurisdiction;
      this._name = value.name;
    }
  }

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewServices {
  /**
  * The entrypoint to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * The Service environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#environment PagesProject#environment}
  */
  readonly environment?: string;
  /**
  * The Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#service PagesProject#service}
  */
  readonly service: string;
}

export function pagesProjectDeploymentConfigsPreviewServicesToTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entrypoint: cdktn.stringToTerraform(struct!.entrypoint),
    environment: cdktn.stringToTerraform(struct!.environment),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function pagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entrypoint: {
      value: cdktn.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entrypoint = undefined;
      this._environment = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entrypoint = value.entrypoint;
      this._environment = value.environment;
      this._service = value.service;
    }
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // service - computed: true, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class PagesProjectDeploymentConfigsPreviewServicesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewServicesOutputReference {
    return new PagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreviewVectorizeBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#index_name PagesProject#index_name}
  */
  readonly indexName: string;
}

export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
  }
}


export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreviewVectorizeBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
    }
  }

  // index_name - computed: true, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }
}

export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference {
    return new PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsPreview {
  /**
  * Constellation bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
  */
  readonly aiBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktn.IResolvable;
  /**
  * Whether to always use the latest compatibility date for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}
  */
  readonly alwaysUseLatestCompatibilityDate?: boolean | cdktn.IResolvable;
  /**
  * Analytics Engine bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
  */
  readonly analyticsEngineDatasets?: { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktn.IResolvable;
  /**
  * Browser bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#browsers PagesProject#browsers}
  */
  readonly browsers?: { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktn.IResolvable;
  /**
  * The major version of the build image to use for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#build_image_major_version PagesProject#build_image_major_version}
  */
  readonly buildImageMajorVersion?: number;
  /**
  * Compatibility date used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 databases used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktn.IResolvable;
  /**
  * Durable Object namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktn.IResolvable;
  /**
  * Environment variables used for builds and Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
  */
  readonly envVars?: { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktn.IResolvable;
  /**
  * Whether to fail open when the deployment config cannot be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#fail_open PagesProject#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * Hyperdrive bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
  */
  readonly hyperdriveBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktn.IResolvable;
  /**
  * KV namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktn.IResolvable;
  /**
  * Limits for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#limits PagesProject#limits}
  */
  readonly limits?: PagesProjectDeploymentConfigsPreviewLimits;
  /**
  * mTLS bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
  */
  readonly mtlsCertificates?: { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktn.IResolvable;
  /**
  * Placement setting used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#placement PagesProject#placement}
  */
  readonly placement?: PagesProjectDeploymentConfigsPreviewPlacement;
  /**
  * Queue Producer bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
  */
  readonly queueProducers?: { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktn.IResolvable;
  /**
  * R2 buckets used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktn.IResolvable;
  /**
  * Services used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#services PagesProject#services}
  */
  readonly services?: { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktn.IResolvable;
  /**
  * The usage model for Pages Functions.
  * Available values: "standard", "bundled", "unbound".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#usage_model PagesProject#usage_model}
  */
  readonly usageModel?: string;
  /**
  * Vectorize bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
  */
  readonly vectorizeBindings?: { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktn.IResolvable;
  /**
  * Hash of the Wrangler configuration used for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#wrangler_config_hash PagesProject#wrangler_config_hash}
  */
  readonly wranglerConfigHash?: string;
}

export function pagesProjectDeploymentConfigsPreviewToTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform)(struct!.aiBindings),
    always_use_latest_compatibility_date: cdktn.booleanToTerraform(struct!.alwaysUseLatestCompatibilityDate),
    analytics_engine_datasets: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform)(struct!.analyticsEngineDatasets),
    browsers: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewBrowsersToTerraform)(struct!.browsers),
    build_image_major_version: cdktn.numberToTerraform(struct!.buildImageMajorVersion),
    compatibility_date: cdktn.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform)(struct!.durableObjectNamespaces),
    env_vars: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform)(struct!.envVars),
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    hyperdrive_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform)(struct!.hyperdriveBindings),
    kv_namespaces: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform)(struct!.kvNamespaces),
    limits: pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct!.limits),
    mtls_certificates: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform)(struct!.mtlsCertificates),
    placement: pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct!.placement),
    queue_producers: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform)(struct!.queueProducers),
    r2_buckets: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform)(struct!.r2Buckets),
    services: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewServicesToTerraform)(struct!.services),
    usage_model: cdktn.stringToTerraform(struct!.usageModel),
    vectorize_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform)(struct!.vectorizeBindings),
    wrangler_config_hash: cdktn.stringToTerraform(struct!.wranglerConfigHash),
  }
}


export function pagesProjectDeploymentConfigsPreviewToHclTerraform(struct?: PagesProjectDeploymentConfigsPreview | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform)(struct!.aiBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewAiBindingsMap",
    },
    always_use_latest_compatibility_date: {
      value: cdktn.booleanToHclTerraform(struct!.alwaysUseLatestCompatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analytics_engine_datasets: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform)(struct!.analyticsEngineDatasets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap",
    },
    browsers: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform)(struct!.browsers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewBrowsersMap",
    },
    build_image_major_version: {
      value: cdktn.numberToHclTerraform(struct!.buildImageMajorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compatibility_date: {
      value: cdktn.stringToHclTerraform(struct!.compatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compatibility_flags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.compatibilityFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    d1_databases: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform)(struct!.d1Databases),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewD1DatabasesMap",
    },
    durable_object_namespaces: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform)(struct!.durableObjectNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap",
    },
    env_vars: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform)(struct!.envVars),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewEnvVarsMap",
    },
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hyperdrive_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform)(struct!.hyperdriveBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap",
    },
    kv_namespaces: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform)(struct!.kvNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewKvNamespacesMap",
    },
    limits: {
      value: pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsPreviewLimits",
    },
    mtls_certificates: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform)(struct!.mtlsCertificates),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap",
    },
    placement: {
      value: pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsPreviewPlacement",
    },
    queue_producers: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform)(struct!.queueProducers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewQueueProducersMap",
    },
    r2_buckets: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform)(struct!.r2Buckets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewR2BucketsMap",
    },
    services: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewServicesToHclTerraform)(struct!.services),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewServicesMap",
    },
    usage_model: {
      value: cdktn.stringToHclTerraform(struct!.usageModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vectorize_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform)(struct!.vectorizeBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap",
    },
    wrangler_config_hash: {
      value: cdktn.stringToHclTerraform(struct!.wranglerConfigHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsPreviewOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsPreview | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiBindings = this._aiBindings?.internalValue;
    }
    if (this._alwaysUseLatestCompatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
    }
    if (this._analyticsEngineDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
    }
    if (this._browsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browsers = this._browsers?.internalValue;
    }
    if (this._buildImageMajorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
    }
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases?.internalValue;
    }
    if (this._durableObjectNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._hyperdriveBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
    }
    if (this._kvNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._mtlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._queueProducers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueProducers = this._queueProducers?.internalValue;
    }
    if (this._r2Buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._usageModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageModel = this._usageModel;
    }
    if (this._vectorizeBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
    }
    if (this._wranglerConfigHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsPreview | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = undefined;
      this._alwaysUseLatestCompatibilityDate = undefined;
      this._analyticsEngineDatasets.internalValue = undefined;
      this._browsers.internalValue = undefined;
      this._buildImageMajorVersion = undefined;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases.internalValue = undefined;
      this._durableObjectNamespaces.internalValue = undefined;
      this._envVars.internalValue = undefined;
      this._failOpen = undefined;
      this._hyperdriveBindings.internalValue = undefined;
      this._kvNamespaces.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._mtlsCertificates.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._queueProducers.internalValue = undefined;
      this._r2Buckets.internalValue = undefined;
      this._services.internalValue = undefined;
      this._usageModel = undefined;
      this._vectorizeBindings.internalValue = undefined;
      this._wranglerConfigHash = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = value.aiBindings;
      this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
      this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
      this._browsers.internalValue = value.browsers;
      this._buildImageMajorVersion = value.buildImageMajorVersion;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases.internalValue = value.d1Databases;
      this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
      this._envVars.internalValue = value.envVars;
      this._failOpen = value.failOpen;
      this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
      this._kvNamespaces.internalValue = value.kvNamespaces;
      this._limits.internalValue = value.limits;
      this._mtlsCertificates.internalValue = value.mtlsCertificates;
      this._placement.internalValue = value.placement;
      this._queueProducers.internalValue = value.queueProducers;
      this._r2Buckets.internalValue = value.r2Buckets;
      this._services.internalValue = value.services;
      this._usageModel = value.usageModel;
      this._vectorizeBindings.internalValue = value.vectorizeBindings;
      this._wranglerConfigHash = value.wranglerConfigHash;
    }
  }

  // ai_bindings - computed: true, optional: true, required: false
  private _aiBindings = new PagesProjectDeploymentConfigsPreviewAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }
  public putAiBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewAiBindings } | cdktn.IResolvable) {
    this._aiBindings.internalValue = value;
  }
  public resetAiBindings() {
    this._aiBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBindingsInput() {
    return this._aiBindings.internalValue;
  }

  // always_use_latest_compatibility_date - computed: true, optional: true, required: false
  private _alwaysUseLatestCompatibilityDate?: boolean | cdktn.IResolvable; 
  public get alwaysUseLatestCompatibilityDate() {
    return this.getBooleanAttribute('always_use_latest_compatibility_date');
  }
  public set alwaysUseLatestCompatibilityDate(value: boolean | cdktn.IResolvable) {
    this._alwaysUseLatestCompatibilityDate = value;
  }
  public resetAlwaysUseLatestCompatibilityDate() {
    this._alwaysUseLatestCompatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseLatestCompatibilityDateInput() {
    return this._alwaysUseLatestCompatibilityDate;
  }

  // analytics_engine_datasets - computed: true, optional: true, required: false
  private _analyticsEngineDatasets = new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }
  public putAnalyticsEngineDatasets(value: { [key: string]: PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets } | cdktn.IResolvable) {
    this._analyticsEngineDatasets.internalValue = value;
  }
  public resetAnalyticsEngineDatasets() {
    this._analyticsEngineDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineDatasetsInput() {
    return this._analyticsEngineDatasets.internalValue;
  }

  // browsers - computed: true, optional: true, required: false
  private _browsers = new PagesProjectDeploymentConfigsPreviewBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }
  public putBrowsers(value: { [key: string]: PagesProjectDeploymentConfigsPreviewBrowsers } | cdktn.IResolvable) {
    this._browsers.internalValue = value;
  }
  public resetBrowsers() {
    this._browsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers.internalValue;
  }

  // build_image_major_version - computed: true, optional: true, required: false
  private _buildImageMajorVersion?: number; 
  public get buildImageMajorVersion() {
    return this.getNumberAttribute('build_image_major_version');
  }
  public set buildImageMajorVersion(value: number) {
    this._buildImageMajorVersion = value;
  }
  public resetBuildImageMajorVersion() {
    this._buildImageMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageMajorVersionInput() {
    return this._buildImageMajorVersion;
  }

  // compatibility_date - computed: true, optional: true, required: false
  private _compatibilityDate?: string; 
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }
  public set compatibilityDate(value: string) {
    this._compatibilityDate = value;
  }
  public resetCompatibilityDate() {
    this._compatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityDateInput() {
    return this._compatibilityDate;
  }

  // compatibility_flags - computed: true, optional: true, required: false
  private _compatibilityFlags?: string[]; 
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }
  public set compatibilityFlags(value: string[]) {
    this._compatibilityFlags = value;
  }
  public resetCompatibilityFlags() {
    this._compatibilityFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityFlagsInput() {
    return this._compatibilityFlags;
  }

  // d1_databases - computed: true, optional: true, required: false
  private _d1Databases = new PagesProjectDeploymentConfigsPreviewD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }
  public putD1Databases(value: { [key: string]: PagesProjectDeploymentConfigsPreviewD1Databases } | cdktn.IResolvable) {
    this._d1Databases.internalValue = value;
  }
  public resetD1Databases() {
    this._d1Databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases.internalValue;
  }

  // durable_object_namespaces - computed: true, optional: true, required: false
  private _durableObjectNamespaces = new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }
  public putDurableObjectNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsPreviewDurableObjectNamespaces } | cdktn.IResolvable) {
    this._durableObjectNamespaces.internalValue = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces.internalValue;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new PagesProjectDeploymentConfigsPreviewEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: PagesProjectDeploymentConfigsPreviewEnvVars } | cdktn.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // hyperdrive_bindings - computed: true, optional: true, required: false
  private _hyperdriveBindings = new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }
  public putHyperdriveBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewHyperdriveBindings } | cdktn.IResolvable) {
    this._hyperdriveBindings.internalValue = value;
  }
  public resetHyperdriveBindings() {
    this._hyperdriveBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperdriveBindingsInput() {
    return this._hyperdriveBindings.internalValue;
  }

  // kv_namespaces - computed: true, optional: true, required: false
  private _kvNamespaces = new PagesProjectDeploymentConfigsPreviewKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }
  public putKvNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsPreviewKvNamespaces } | cdktn.IResolvable) {
    this._kvNamespaces.internalValue = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces.internalValue;
  }

  // limits - computed: true, optional: true, required: false
  private _limits = new PagesProjectDeploymentConfigsPreviewLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: PagesProjectDeploymentConfigsPreviewLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // mtls_certificates - computed: true, optional: true, required: false
  private _mtlsCertificates = new PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }
  public putMtlsCertificates(value: { [key: string]: PagesProjectDeploymentConfigsPreviewMtlsCertificates } | cdktn.IResolvable) {
    this._mtlsCertificates.internalValue = value;
  }
  public resetMtlsCertificates() {
    this._mtlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificatesInput() {
    return this._mtlsCertificates.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new PagesProjectDeploymentConfigsPreviewPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: PagesProjectDeploymentConfigsPreviewPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // queue_producers - computed: true, optional: true, required: false
  private _queueProducers = new PagesProjectDeploymentConfigsPreviewQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }
  public putQueueProducers(value: { [key: string]: PagesProjectDeploymentConfigsPreviewQueueProducers } | cdktn.IResolvable) {
    this._queueProducers.internalValue = value;
  }
  public resetQueueProducers() {
    this._queueProducers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueProducersInput() {
    return this._queueProducers.internalValue;
  }

  // r2_buckets - computed: true, optional: true, required: false
  private _r2Buckets = new PagesProjectDeploymentConfigsPreviewR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }
  public putR2Buckets(value: { [key: string]: PagesProjectDeploymentConfigsPreviewR2Buckets } | cdktn.IResolvable) {
    this._r2Buckets.internalValue = value;
  }
  public resetR2Buckets() {
    this._r2Buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services = new PagesProjectDeploymentConfigsPreviewServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: PagesProjectDeploymentConfigsPreviewServices } | cdktn.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // usage_model - computed: true, optional: true, required: false
  private _usageModel?: string; 
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  public resetUsageModel() {
    this._usageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel;
  }

  // vectorize_bindings - computed: true, optional: true, required: false
  private _vectorizeBindings = new PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
  public putVectorizeBindings(value: { [key: string]: PagesProjectDeploymentConfigsPreviewVectorizeBindings } | cdktn.IResolvable) {
    this._vectorizeBindings.internalValue = value;
  }
  public resetVectorizeBindings() {
    this._vectorizeBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorizeBindingsInput() {
    return this._vectorizeBindings.internalValue;
  }

  // wrangler_config_hash - computed: true, optional: true, required: false
  private _wranglerConfigHash?: string; 
  public get wranglerConfigHash() {
    return this.getStringAttribute('wrangler_config_hash');
  }
  public set wranglerConfigHash(value: string) {
    this._wranglerConfigHash = value;
  }
  public resetWranglerConfigHash() {
    this._wranglerConfigHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wranglerConfigHashInput() {
    return this._wranglerConfigHash;
  }
}
export interface PagesProjectDeploymentConfigsProductionAiBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#project_id PagesProject#project_id}
  */
  readonly projectId: string;
}

export function pagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAiBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionAiBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionAiBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class PagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionAiBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets {
  /**
  * Name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#dataset PagesProject#dataset}
  */
  readonly dataset: string;
}

export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktn.stringToTerraform(struct!.dataset),
  }
}


export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktn.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: true, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}

export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference {
    return new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionBrowsers {
}

export function pagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionBrowsers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionBrowsers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionBrowsers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class PagesProjectDeploymentConfigsProductionBrowsersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionBrowsersOutputReference {
    return new PagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionD1Databases {
  /**
  * UUID of the D1 database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionD1Databases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionD1Databases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionD1Databases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference {
    return new PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionDurableObjectNamespaces {
  /**
  * ID of the Durable Object namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId: string;
}

export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktn.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktn.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionEnvVars {
  /**
  * Available values: "plain_text", "secret_text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#type PagesProject#type}
  */
  readonly type: string;
  /**
  * Environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#value PagesProject#value}
  */
  readonly value: string;
}

export function pagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionEnvVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionEnvVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionEnvVarsOutputReference {
    return new PagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionHyperdriveBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#id PagesProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionHyperdriveBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionKvNamespaces {
  /**
  * ID of the KV namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#namespace_id PagesProject#namespace_id}
  */
  readonly namespaceId: string;
}

export function pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktn.stringToTerraform(struct!.namespaceId),
  }
}


export function pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktn.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionKvNamespaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionKvNamespaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
    }
  }

  // namespace_id - computed: true, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }
}

export class PagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference {
    return new PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionLimits {
  /**
  * CPU time limit in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#cpu_ms PagesProject#cpu_ms}
  */
  readonly cpuMs: number;
}

export function pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct?: PagesProjectDeploymentConfigsProductionLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_ms: cdktn.numberToTerraform(struct!.cpuMs),
  }
}


export function pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_ms: {
      value: cdktn.numberToHclTerraform(struct!.cpuMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMs = this._cpuMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuMs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuMs = value.cpuMs;
    }
  }

  // cpu_ms - computed: true, optional: false, required: true
  private _cpuMs?: number; 
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
  public set cpuMs(value: number) {
    this._cpuMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMsInput() {
    return this._cpuMs;
  }
}
export interface PagesProjectDeploymentConfigsProductionMtlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#certificate_id PagesProject#certificate_id}
  */
  readonly certificateId: string;
}

export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktn.stringToTerraform(struct!.certificateId),
  }
}


export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktn.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionMtlsCertificates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: true, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}

export class PagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference {
    return new PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionPlacement {
  /**
  * Placement mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#mode PagesProject#mode}
  */
  readonly mode?: string;
}

export function pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionPlacement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionPlacement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionPlacement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PagesProjectDeploymentConfigsProductionQueueProducers {
  /**
  * Name of the Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
}

export function pagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionQueueProducers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionQueueProducers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionQueueProducers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionQueueProducersOutputReference {
    return new PagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionR2Buckets {
  /**
  * Jurisdiction of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#jurisdiction PagesProject#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Name of the R2 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#name PagesProject#name}
  */
  readonly name: string;
}

export function pagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jurisdiction: cdktn.stringToTerraform(struct!.jurisdiction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionR2Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jurisdiction: {
      value: cdktn.stringToHclTerraform(struct!.jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionR2Buckets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionR2Buckets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jurisdiction = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jurisdiction = value.jurisdiction;
      this._name = value.name;
    }
  }

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionR2BucketsOutputReference {
    return new PagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionServices {
  /**
  * The entrypoint to bind to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#entrypoint PagesProject#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * The Service environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#environment PagesProject#environment}
  */
  readonly environment?: string;
  /**
  * The Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#service PagesProject#service}
  */
  readonly service: string;
}

export function pagesProjectDeploymentConfigsProductionServicesToTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entrypoint: cdktn.stringToTerraform(struct!.entrypoint),
    environment: cdktn.stringToTerraform(struct!.environment),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function pagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entrypoint: {
      value: cdktn.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entrypoint = undefined;
      this._environment = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entrypoint = value.entrypoint;
      this._environment = value.environment;
      this._service = value.service;
    }
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // service - computed: true, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class PagesProjectDeploymentConfigsProductionServicesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionServicesOutputReference {
    return new PagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProductionVectorizeBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#index_name PagesProject#index_name}
  */
  readonly indexName: string;
}

export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
  }
}


export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProductionVectorizeBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
    }
  }

  // index_name - computed: true, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }
}

export class PagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference {
    return new PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectDeploymentConfigsProduction {
  /**
  * Constellation bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#ai_bindings PagesProject#ai_bindings}
  */
  readonly aiBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktn.IResolvable;
  /**
  * Whether to always use the latest compatibility date for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}
  */
  readonly alwaysUseLatestCompatibilityDate?: boolean | cdktn.IResolvable;
  /**
  * Analytics Engine bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#analytics_engine_datasets PagesProject#analytics_engine_datasets}
  */
  readonly analyticsEngineDatasets?: { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktn.IResolvable;
  /**
  * Browser bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#browsers PagesProject#browsers}
  */
  readonly browsers?: { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktn.IResolvable;
  /**
  * The major version of the build image to use for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#build_image_major_version PagesProject#build_image_major_version}
  */
  readonly buildImageMajorVersion?: number;
  /**
  * Compatibility date used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}
  */
  readonly compatibilityDate?: string;
  /**
  * Compatibility flags used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}
  */
  readonly compatibilityFlags?: string[];
  /**
  * D1 databases used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}
  */
  readonly d1Databases?: { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktn.IResolvable;
  /**
  * Durable Object namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}
  */
  readonly durableObjectNamespaces?: { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktn.IResolvable;
  /**
  * Environment variables used for builds and Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#env_vars PagesProject#env_vars}
  */
  readonly envVars?: { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktn.IResolvable;
  /**
  * Whether to fail open when the deployment config cannot be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#fail_open PagesProject#fail_open}
  */
  readonly failOpen?: boolean | cdktn.IResolvable;
  /**
  * Hyperdrive bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#hyperdrive_bindings PagesProject#hyperdrive_bindings}
  */
  readonly hyperdriveBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktn.IResolvable;
  /**
  * KV namespaces used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}
  */
  readonly kvNamespaces?: { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktn.IResolvable;
  /**
  * Limits for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#limits PagesProject#limits}
  */
  readonly limits?: PagesProjectDeploymentConfigsProductionLimits;
  /**
  * mTLS bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#mtls_certificates PagesProject#mtls_certificates}
  */
  readonly mtlsCertificates?: { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktn.IResolvable;
  /**
  * Placement setting used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#placement PagesProject#placement}
  */
  readonly placement?: PagesProjectDeploymentConfigsProductionPlacement;
  /**
  * Queue Producer bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#queue_producers PagesProject#queue_producers}
  */
  readonly queueProducers?: { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktn.IResolvable;
  /**
  * R2 buckets used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}
  */
  readonly r2Buckets?: { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktn.IResolvable;
  /**
  * Services used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#services PagesProject#services}
  */
  readonly services?: { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktn.IResolvable;
  /**
  * The usage model for Pages Functions.
  * Available values: "standard", "bundled", "unbound".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#usage_model PagesProject#usage_model}
  */
  readonly usageModel?: string;
  /**
  * Vectorize bindings used for Pages Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#vectorize_bindings PagesProject#vectorize_bindings}
  */
  readonly vectorizeBindings?: { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktn.IResolvable;
  /**
  * Hash of the Wrangler configuration used for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#wrangler_config_hash PagesProject#wrangler_config_hash}
  */
  readonly wranglerConfigHash?: string;
}

export function pagesProjectDeploymentConfigsProductionToTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionAiBindingsToTerraform)(struct!.aiBindings),
    always_use_latest_compatibility_date: cdktn.booleanToTerraform(struct!.alwaysUseLatestCompatibilityDate),
    analytics_engine_datasets: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform)(struct!.analyticsEngineDatasets),
    browsers: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionBrowsersToTerraform)(struct!.browsers),
    build_image_major_version: cdktn.numberToTerraform(struct!.buildImageMajorVersion),
    compatibility_date: cdktn.stringToTerraform(struct!.compatibilityDate),
    compatibility_flags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.compatibilityFlags),
    d1_databases: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform)(struct!.d1Databases),
    durable_object_namespaces: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform)(struct!.durableObjectNamespaces),
    env_vars: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionEnvVarsToTerraform)(struct!.envVars),
    fail_open: cdktn.booleanToTerraform(struct!.failOpen),
    hyperdrive_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform)(struct!.hyperdriveBindings),
    kv_namespaces: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform)(struct!.kvNamespaces),
    limits: pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct!.limits),
    mtls_certificates: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform)(struct!.mtlsCertificates),
    placement: pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct!.placement),
    queue_producers: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionQueueProducersToTerraform)(struct!.queueProducers),
    r2_buckets: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionR2BucketsToTerraform)(struct!.r2Buckets),
    services: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionServicesToTerraform)(struct!.services),
    usage_model: cdktn.stringToTerraform(struct!.usageModel),
    vectorize_bindings: cdktn.hashMapper(pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform)(struct!.vectorizeBindings),
    wrangler_config_hash: cdktn.stringToTerraform(struct!.wranglerConfigHash),
  }
}


export function pagesProjectDeploymentConfigsProductionToHclTerraform(struct?: PagesProjectDeploymentConfigsProduction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform)(struct!.aiBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionAiBindingsMap",
    },
    always_use_latest_compatibility_date: {
      value: cdktn.booleanToHclTerraform(struct!.alwaysUseLatestCompatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    analytics_engine_datasets: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform)(struct!.analyticsEngineDatasets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap",
    },
    browsers: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform)(struct!.browsers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionBrowsersMap",
    },
    build_image_major_version: {
      value: cdktn.numberToHclTerraform(struct!.buildImageMajorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compatibility_date: {
      value: cdktn.stringToHclTerraform(struct!.compatibilityDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compatibility_flags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.compatibilityFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    d1_databases: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform)(struct!.d1Databases),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionD1DatabasesMap",
    },
    durable_object_namespaces: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform)(struct!.durableObjectNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap",
    },
    env_vars: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform)(struct!.envVars),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionEnvVarsMap",
    },
    fail_open: {
      value: cdktn.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hyperdrive_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform)(struct!.hyperdriveBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap",
    },
    kv_namespaces: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform)(struct!.kvNamespaces),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionKvNamespacesMap",
    },
    limits: {
      value: pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsProductionLimits",
    },
    mtls_certificates: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform)(struct!.mtlsCertificates),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionMtlsCertificatesMap",
    },
    placement: {
      value: pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsProductionPlacement",
    },
    queue_producers: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform)(struct!.queueProducers),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionQueueProducersMap",
    },
    r2_buckets: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform)(struct!.r2Buckets),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionR2BucketsMap",
    },
    services: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionServicesToHclTerraform)(struct!.services),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionServicesMap",
    },
    usage_model: {
      value: cdktn.stringToHclTerraform(struct!.usageModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vectorize_bindings: {
      value: cdktn.hashMapperHcl(pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform)(struct!.vectorizeBindings),
      isBlock: true,
      type: "map",
      storageClassType: "PagesProjectDeploymentConfigsProductionVectorizeBindingsMap",
    },
    wrangler_config_hash: {
      value: cdktn.stringToHclTerraform(struct!.wranglerConfigHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsProductionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigsProduction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiBindings = this._aiBindings?.internalValue;
    }
    if (this._alwaysUseLatestCompatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
    }
    if (this._analyticsEngineDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
    }
    if (this._browsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browsers = this._browsers?.internalValue;
    }
    if (this._buildImageMajorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
    }
    if (this._compatibilityDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityDate = this._compatibilityDate;
    }
    if (this._compatibilityFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityFlags = this._compatibilityFlags;
    }
    if (this._d1Databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.d1Databases = this._d1Databases?.internalValue;
    }
    if (this._durableObjectNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._hyperdriveBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
    }
    if (this._kvNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._mtlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._queueProducers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueProducers = this._queueProducers?.internalValue;
    }
    if (this._r2Buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._usageModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageModel = this._usageModel;
    }
    if (this._vectorizeBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
    }
    if (this._wranglerConfigHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigsProduction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = undefined;
      this._alwaysUseLatestCompatibilityDate = undefined;
      this._analyticsEngineDatasets.internalValue = undefined;
      this._browsers.internalValue = undefined;
      this._buildImageMajorVersion = undefined;
      this._compatibilityDate = undefined;
      this._compatibilityFlags = undefined;
      this._d1Databases.internalValue = undefined;
      this._durableObjectNamespaces.internalValue = undefined;
      this._envVars.internalValue = undefined;
      this._failOpen = undefined;
      this._hyperdriveBindings.internalValue = undefined;
      this._kvNamespaces.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._mtlsCertificates.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._queueProducers.internalValue = undefined;
      this._r2Buckets.internalValue = undefined;
      this._services.internalValue = undefined;
      this._usageModel = undefined;
      this._vectorizeBindings.internalValue = undefined;
      this._wranglerConfigHash = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiBindings.internalValue = value.aiBindings;
      this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
      this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
      this._browsers.internalValue = value.browsers;
      this._buildImageMajorVersion = value.buildImageMajorVersion;
      this._compatibilityDate = value.compatibilityDate;
      this._compatibilityFlags = value.compatibilityFlags;
      this._d1Databases.internalValue = value.d1Databases;
      this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
      this._envVars.internalValue = value.envVars;
      this._failOpen = value.failOpen;
      this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
      this._kvNamespaces.internalValue = value.kvNamespaces;
      this._limits.internalValue = value.limits;
      this._mtlsCertificates.internalValue = value.mtlsCertificates;
      this._placement.internalValue = value.placement;
      this._queueProducers.internalValue = value.queueProducers;
      this._r2Buckets.internalValue = value.r2Buckets;
      this._services.internalValue = value.services;
      this._usageModel = value.usageModel;
      this._vectorizeBindings.internalValue = value.vectorizeBindings;
      this._wranglerConfigHash = value.wranglerConfigHash;
    }
  }

  // ai_bindings - computed: true, optional: true, required: false
  private _aiBindings = new PagesProjectDeploymentConfigsProductionAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }
  public putAiBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionAiBindings } | cdktn.IResolvable) {
    this._aiBindings.internalValue = value;
  }
  public resetAiBindings() {
    this._aiBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBindingsInput() {
    return this._aiBindings.internalValue;
  }

  // always_use_latest_compatibility_date - computed: true, optional: true, required: false
  private _alwaysUseLatestCompatibilityDate?: boolean | cdktn.IResolvable; 
  public get alwaysUseLatestCompatibilityDate() {
    return this.getBooleanAttribute('always_use_latest_compatibility_date');
  }
  public set alwaysUseLatestCompatibilityDate(value: boolean | cdktn.IResolvable) {
    this._alwaysUseLatestCompatibilityDate = value;
  }
  public resetAlwaysUseLatestCompatibilityDate() {
    this._alwaysUseLatestCompatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseLatestCompatibilityDateInput() {
    return this._alwaysUseLatestCompatibilityDate;
  }

  // analytics_engine_datasets - computed: true, optional: true, required: false
  private _analyticsEngineDatasets = new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }
  public putAnalyticsEngineDatasets(value: { [key: string]: PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets } | cdktn.IResolvable) {
    this._analyticsEngineDatasets.internalValue = value;
  }
  public resetAnalyticsEngineDatasets() {
    this._analyticsEngineDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineDatasetsInput() {
    return this._analyticsEngineDatasets.internalValue;
  }

  // browsers - computed: true, optional: true, required: false
  private _browsers = new PagesProjectDeploymentConfigsProductionBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }
  public putBrowsers(value: { [key: string]: PagesProjectDeploymentConfigsProductionBrowsers } | cdktn.IResolvable) {
    this._browsers.internalValue = value;
  }
  public resetBrowsers() {
    this._browsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browsersInput() {
    return this._browsers.internalValue;
  }

  // build_image_major_version - computed: true, optional: true, required: false
  private _buildImageMajorVersion?: number; 
  public get buildImageMajorVersion() {
    return this.getNumberAttribute('build_image_major_version');
  }
  public set buildImageMajorVersion(value: number) {
    this._buildImageMajorVersion = value;
  }
  public resetBuildImageMajorVersion() {
    this._buildImageMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageMajorVersionInput() {
    return this._buildImageMajorVersion;
  }

  // compatibility_date - computed: true, optional: true, required: false
  private _compatibilityDate?: string; 
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }
  public set compatibilityDate(value: string) {
    this._compatibilityDate = value;
  }
  public resetCompatibilityDate() {
    this._compatibilityDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityDateInput() {
    return this._compatibilityDate;
  }

  // compatibility_flags - computed: true, optional: true, required: false
  private _compatibilityFlags?: string[]; 
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }
  public set compatibilityFlags(value: string[]) {
    this._compatibilityFlags = value;
  }
  public resetCompatibilityFlags() {
    this._compatibilityFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityFlagsInput() {
    return this._compatibilityFlags;
  }

  // d1_databases - computed: true, optional: true, required: false
  private _d1Databases = new PagesProjectDeploymentConfigsProductionD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }
  public putD1Databases(value: { [key: string]: PagesProjectDeploymentConfigsProductionD1Databases } | cdktn.IResolvable) {
    this._d1Databases.internalValue = value;
  }
  public resetD1Databases() {
    this._d1Databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get d1DatabasesInput() {
    return this._d1Databases.internalValue;
  }

  // durable_object_namespaces - computed: true, optional: true, required: false
  private _durableObjectNamespaces = new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }
  public putDurableObjectNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsProductionDurableObjectNamespaces } | cdktn.IResolvable) {
    this._durableObjectNamespaces.internalValue = value;
  }
  public resetDurableObjectNamespaces() {
    this._durableObjectNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableObjectNamespacesInput() {
    return this._durableObjectNamespaces.internalValue;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new PagesProjectDeploymentConfigsProductionEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: PagesProjectDeploymentConfigsProductionEnvVars } | cdktn.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: boolean | cdktn.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktn.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // hyperdrive_bindings - computed: true, optional: true, required: false
  private _hyperdriveBindings = new PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }
  public putHyperdriveBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionHyperdriveBindings } | cdktn.IResolvable) {
    this._hyperdriveBindings.internalValue = value;
  }
  public resetHyperdriveBindings() {
    this._hyperdriveBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperdriveBindingsInput() {
    return this._hyperdriveBindings.internalValue;
  }

  // kv_namespaces - computed: true, optional: true, required: false
  private _kvNamespaces = new PagesProjectDeploymentConfigsProductionKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }
  public putKvNamespaces(value: { [key: string]: PagesProjectDeploymentConfigsProductionKvNamespaces } | cdktn.IResolvable) {
    this._kvNamespaces.internalValue = value;
  }
  public resetKvNamespaces() {
    this._kvNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespacesInput() {
    return this._kvNamespaces.internalValue;
  }

  // limits - computed: true, optional: true, required: false
  private _limits = new PagesProjectDeploymentConfigsProductionLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: PagesProjectDeploymentConfigsProductionLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // mtls_certificates - computed: true, optional: true, required: false
  private _mtlsCertificates = new PagesProjectDeploymentConfigsProductionMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }
  public putMtlsCertificates(value: { [key: string]: PagesProjectDeploymentConfigsProductionMtlsCertificates } | cdktn.IResolvable) {
    this._mtlsCertificates.internalValue = value;
  }
  public resetMtlsCertificates() {
    this._mtlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsCertificatesInput() {
    return this._mtlsCertificates.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new PagesProjectDeploymentConfigsProductionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: PagesProjectDeploymentConfigsProductionPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // queue_producers - computed: true, optional: true, required: false
  private _queueProducers = new PagesProjectDeploymentConfigsProductionQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }
  public putQueueProducers(value: { [key: string]: PagesProjectDeploymentConfigsProductionQueueProducers } | cdktn.IResolvable) {
    this._queueProducers.internalValue = value;
  }
  public resetQueueProducers() {
    this._queueProducers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueProducersInput() {
    return this._queueProducers.internalValue;
  }

  // r2_buckets - computed: true, optional: true, required: false
  private _r2Buckets = new PagesProjectDeploymentConfigsProductionR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }
  public putR2Buckets(value: { [key: string]: PagesProjectDeploymentConfigsProductionR2Buckets } | cdktn.IResolvable) {
    this._r2Buckets.internalValue = value;
  }
  public resetR2Buckets() {
    this._r2Buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2BucketsInput() {
    return this._r2Buckets.internalValue;
  }

  // services - computed: true, optional: true, required: false
  private _services = new PagesProjectDeploymentConfigsProductionServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: PagesProjectDeploymentConfigsProductionServices } | cdktn.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // usage_model - computed: true, optional: true, required: false
  private _usageModel?: string; 
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }
  public set usageModel(value: string) {
    this._usageModel = value;
  }
  public resetUsageModel() {
    this._usageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModelInput() {
    return this._usageModel;
  }

  // vectorize_bindings - computed: true, optional: true, required: false
  private _vectorizeBindings = new PagesProjectDeploymentConfigsProductionVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
  public putVectorizeBindings(value: { [key: string]: PagesProjectDeploymentConfigsProductionVectorizeBindings } | cdktn.IResolvable) {
    this._vectorizeBindings.internalValue = value;
  }
  public resetVectorizeBindings() {
    this._vectorizeBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorizeBindingsInput() {
    return this._vectorizeBindings.internalValue;
  }

  // wrangler_config_hash - computed: true, optional: true, required: false
  private _wranglerConfigHash?: string; 
  public get wranglerConfigHash() {
    return this.getStringAttribute('wrangler_config_hash');
  }
  public set wranglerConfigHash(value: string) {
    this._wranglerConfigHash = value;
  }
  public resetWranglerConfigHash() {
    this._wranglerConfigHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wranglerConfigHashInput() {
    return this._wranglerConfigHash;
  }
}
export interface PagesProjectDeploymentConfigs {
  /**
  * Configs for preview deploys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#preview PagesProject#preview}
  */
  readonly preview?: PagesProjectDeploymentConfigsPreview;
  /**
  * Configs for production deploys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#production PagesProject#production}
  */
  readonly production?: PagesProjectDeploymentConfigsProduction;
}

export function pagesProjectDeploymentConfigsToTerraform(struct?: PagesProjectDeploymentConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preview: pagesProjectDeploymentConfigsPreviewToTerraform(struct!.preview),
    production: pagesProjectDeploymentConfigsProductionToTerraform(struct!.production),
  }
}


export function pagesProjectDeploymentConfigsToHclTerraform(struct?: PagesProjectDeploymentConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preview: {
      value: pagesProjectDeploymentConfigsPreviewToHclTerraform(struct!.preview),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsPreview",
    },
    production: {
      value: pagesProjectDeploymentConfigsProductionToHclTerraform(struct!.production),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectDeploymentConfigsProduction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectDeploymentConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectDeploymentConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preview = this._preview?.internalValue;
    }
    if (this._production?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.production = this._production?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectDeploymentConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preview.internalValue = undefined;
      this._production.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preview.internalValue = value.preview;
      this._production.internalValue = value.production;
    }
  }

  // preview - computed: true, optional: true, required: false
  private _preview = new PagesProjectDeploymentConfigsPreviewOutputReference(this, "preview");
  public get preview() {
    return this._preview;
  }
  public putPreview(value: PagesProjectDeploymentConfigsPreview) {
    this._preview.internalValue = value;
  }
  public resetPreview() {
    this._preview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview.internalValue;
  }

  // production - computed: true, optional: true, required: false
  private _production = new PagesProjectDeploymentConfigsProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: PagesProjectDeploymentConfigsProduction) {
    this._production.internalValue = value;
  }
  public resetProduction() {
    this._production.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }
}
export interface PagesProjectLatestDeploymentBuildConfig {
}

export function pagesProjectLatestDeploymentBuildConfigToTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentBuildConfigToHclTerraform(struct?: PagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentBuildConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface PagesProjectLatestDeploymentDeploymentTriggerMetadata {
}

export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_dirty - computed: true, optional: false, required: false
  public get commitDirty() {
    return this.getBooleanAttribute('commit_dirty');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface PagesProjectLatestDeploymentDeploymentTrigger {
}

export function pagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct?: PagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectLatestDeploymentEnvVars {
}

export function pagesProjectLatestDeploymentEnvVarsToTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentEnvVarsToHclTerraform(struct?: PagesProjectLatestDeploymentEnvVars): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PagesProjectLatestDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PagesProjectLatestDeploymentEnvVarsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PagesProjectLatestDeploymentEnvVarsOutputReference {
    return new PagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PagesProjectLatestDeploymentLatestStage {
}

export function pagesProjectLatestDeploymentLatestStageToTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentLatestStageToHclTerraform(struct?: PagesProjectLatestDeploymentLatestStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentLatestStageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface PagesProjectLatestDeploymentSourceConfig {
}

export function pagesProjectLatestDeploymentSourceConfigToTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentSourceConfigToHclTerraform(struct?: PagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface PagesProjectLatestDeploymentSource {
}

export function pagesProjectLatestDeploymentSourceToTerraform(struct?: PagesProjectLatestDeploymentSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentSourceToHclTerraform(struct?: PagesProjectLatestDeploymentSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new PagesProjectLatestDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface PagesProjectLatestDeploymentStages {
}

export function pagesProjectLatestDeploymentStagesToTerraform(struct?: PagesProjectLatestDeploymentStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentStagesToHclTerraform(struct?: PagesProjectLatestDeploymentStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentStagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PagesProjectLatestDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PagesProjectLatestDeploymentStagesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PagesProjectLatestDeploymentStagesOutputReference {
    return new PagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PagesProjectLatestDeployment {
}

export function pagesProjectLatestDeploymentToTerraform(struct?: PagesProjectLatestDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pagesProjectLatestDeploymentToHclTerraform(struct?: PagesProjectLatestDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PagesProjectLatestDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectLatestDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectLatestDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new PagesProjectLatestDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new PagesProjectLatestDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new PagesProjectLatestDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new PagesProjectLatestDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new PagesProjectLatestDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new PagesProjectLatestDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }
}
export interface PagesProjectSourceConfig {
  /**
  * Whether to enable automatic deployments when pushing to the source repository.
  * When disabled, no deployments (production or preview) will be triggered automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}
  */
  readonly deploymentsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The owner of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#owner PagesProject#owner}
  */
  readonly owner?: string;
  /**
  * The owner ID of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#owner_id PagesProject#owner_id}
  */
  readonly ownerId?: string;
  /**
  * A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (`*`) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#path_excludes PagesProject#path_excludes}
  */
  readonly pathExcludes?: string[];
  /**
  * A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (`*`) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#path_includes PagesProject#path_includes}
  */
  readonly pathIncludes?: string[];
  /**
  * Whether to enable PR comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}
  */
  readonly prCommentsEnabled?: boolean | cdktn.IResolvable;
  /**
  * A list of branches that should not trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}
  */
  readonly previewBranchExcludes?: string[];
  /**
  * A list of branches that should trigger a preview deployment. Wildcard syntax (`*`) is supported. Must be used with `preview_deployment_setting` set to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}
  */
  readonly previewBranchIncludes?: string[];
  /**
  * Controls whether commits to preview branches trigger a preview deployment.
  * Available values: "all", "none", "custom".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}
  */
  readonly previewDeploymentSetting?: string;
  /**
  * The production branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#production_branch PagesProject#production_branch}
  */
  readonly productionBranch?: string;
  /**
  * Whether to trigger a production deployment on commits to the production branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#production_deployments_enabled PagesProject#production_deployments_enabled}
  */
  readonly productionDeploymentsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The ID of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#repo_id PagesProject#repo_id}
  */
  readonly repoId?: string;
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#repo_name PagesProject#repo_name}
  */
  readonly repoName?: string;
}

export function pagesProjectSourceConfigToTerraform(struct?: PagesProjectSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployments_enabled: cdktn.booleanToTerraform(struct!.deploymentsEnabled),
    owner: cdktn.stringToTerraform(struct!.owner),
    owner_id: cdktn.stringToTerraform(struct!.ownerId),
    path_excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathExcludes),
    path_includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathIncludes),
    pr_comments_enabled: cdktn.booleanToTerraform(struct!.prCommentsEnabled),
    preview_branch_excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.previewBranchExcludes),
    preview_branch_includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.previewBranchIncludes),
    preview_deployment_setting: cdktn.stringToTerraform(struct!.previewDeploymentSetting),
    production_branch: cdktn.stringToTerraform(struct!.productionBranch),
    production_deployments_enabled: cdktn.booleanToTerraform(struct!.productionDeploymentsEnabled),
    repo_id: cdktn.stringToTerraform(struct!.repoId),
    repo_name: cdktn.stringToTerraform(struct!.repoName),
  }
}


export function pagesProjectSourceConfigToHclTerraform(struct?: PagesProjectSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployments_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.deploymentsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathExcludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathIncludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pr_comments_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.prCommentsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preview_branch_excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.previewBranchExcludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preview_branch_includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.previewBranchIncludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preview_deployment_setting: {
      value: cdktn.stringToHclTerraform(struct!.previewDeploymentSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    production_branch: {
      value: cdktn.stringToHclTerraform(struct!.productionBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    production_deployments_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.productionDeploymentsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo_id: {
      value: cdktn.stringToHclTerraform(struct!.repoId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktn.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentsEnabled = this._deploymentsEnabled;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._pathExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExcludes = this._pathExcludes;
    }
    if (this._pathIncludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathIncludes = this._pathIncludes;
    }
    if (this._prCommentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prCommentsEnabled = this._prCommentsEnabled;
    }
    if (this._previewBranchExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewBranchExcludes = this._previewBranchExcludes;
    }
    if (this._previewBranchIncludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewBranchIncludes = this._previewBranchIncludes;
    }
    if (this._previewDeploymentSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewDeploymentSetting = this._previewDeploymentSetting;
    }
    if (this._productionBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionBranch = this._productionBranch;
    }
    if (this._productionDeploymentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionDeploymentsEnabled = this._productionDeploymentsEnabled;
    }
    if (this._repoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoId = this._repoId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentsEnabled = undefined;
      this._owner = undefined;
      this._ownerId = undefined;
      this._pathExcludes = undefined;
      this._pathIncludes = undefined;
      this._prCommentsEnabled = undefined;
      this._previewBranchExcludes = undefined;
      this._previewBranchIncludes = undefined;
      this._previewDeploymentSetting = undefined;
      this._productionBranch = undefined;
      this._productionDeploymentsEnabled = undefined;
      this._repoId = undefined;
      this._repoName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentsEnabled = value.deploymentsEnabled;
      this._owner = value.owner;
      this._ownerId = value.ownerId;
      this._pathExcludes = value.pathExcludes;
      this._pathIncludes = value.pathIncludes;
      this._prCommentsEnabled = value.prCommentsEnabled;
      this._previewBranchExcludes = value.previewBranchExcludes;
      this._previewBranchIncludes = value.previewBranchIncludes;
      this._previewDeploymentSetting = value.previewDeploymentSetting;
      this._productionBranch = value.productionBranch;
      this._productionDeploymentsEnabled = value.productionDeploymentsEnabled;
      this._repoId = value.repoId;
      this._repoName = value.repoName;
    }
  }

  // deployments_enabled - computed: true, optional: true, required: false
  private _deploymentsEnabled?: boolean | cdktn.IResolvable; 
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }
  public set deploymentsEnabled(value: boolean | cdktn.IResolvable) {
    this._deploymentsEnabled = value;
  }
  public resetDeploymentsEnabled() {
    this._deploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentsEnabledInput() {
    return this._deploymentsEnabled;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // path_excludes - computed: true, optional: true, required: false
  private _pathExcludes?: string[]; 
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }
  public set pathExcludes(value: string[]) {
    this._pathExcludes = value;
  }
  public resetPathExcludes() {
    this._pathExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExcludesInput() {
    return this._pathExcludes;
  }

  // path_includes - computed: true, optional: true, required: false
  private _pathIncludes?: string[]; 
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }
  public set pathIncludes(value: string[]) {
    this._pathIncludes = value;
  }
  public resetPathIncludes() {
    this._pathIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIncludesInput() {
    return this._pathIncludes;
  }

  // pr_comments_enabled - computed: true, optional: true, required: false
  private _prCommentsEnabled?: boolean | cdktn.IResolvable; 
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }
  public set prCommentsEnabled(value: boolean | cdktn.IResolvable) {
    this._prCommentsEnabled = value;
  }
  public resetPrCommentsEnabled() {
    this._prCommentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prCommentsEnabledInput() {
    return this._prCommentsEnabled;
  }

  // preview_branch_excludes - computed: true, optional: true, required: false
  private _previewBranchExcludes?: string[]; 
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }
  public set previewBranchExcludes(value: string[]) {
    this._previewBranchExcludes = value;
  }
  public resetPreviewBranchExcludes() {
    this._previewBranchExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewBranchExcludesInput() {
    return this._previewBranchExcludes;
  }

  // preview_branch_includes - computed: true, optional: true, required: false
  private _previewBranchIncludes?: string[]; 
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }
  public set previewBranchIncludes(value: string[]) {
    this._previewBranchIncludes = value;
  }
  public resetPreviewBranchIncludes() {
    this._previewBranchIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewBranchIncludesInput() {
    return this._previewBranchIncludes;
  }

  // preview_deployment_setting - computed: true, optional: true, required: false
  private _previewDeploymentSetting?: string; 
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }
  public set previewDeploymentSetting(value: string) {
    this._previewDeploymentSetting = value;
  }
  public resetPreviewDeploymentSetting() {
    this._previewDeploymentSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewDeploymentSettingInput() {
    return this._previewDeploymentSetting;
  }

  // production_branch - computed: true, optional: true, required: false
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  public resetProductionBranch() {
    this._productionBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // production_deployments_enabled - computed: true, optional: true, required: false
  private _productionDeploymentsEnabled?: boolean | cdktn.IResolvable; 
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }
  public set productionDeploymentsEnabled(value: boolean | cdktn.IResolvable) {
    this._productionDeploymentsEnabled = value;
  }
  public resetProductionDeploymentsEnabled() {
    this._productionDeploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionDeploymentsEnabledInput() {
    return this._productionDeploymentsEnabled;
  }

  // repo_id - computed: true, optional: true, required: false
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  public resetRepoId() {
    this._repoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface PagesProjectSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#config PagesProject#config}
  */
  readonly config: PagesProjectSourceConfig;
  /**
  * The source control management provider.
  * Available values: "github", "gitlab".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#type PagesProject#type}
  */
  readonly type: string;
}

export function pagesProjectSourceToTerraform(struct?: PagesProjectSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: pagesProjectSourceConfigToTerraform(struct!.config),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function pagesProjectSourceToHclTerraform(struct?: PagesProjectSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: pagesProjectSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "PagesProjectSourceConfig",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesProjectSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PagesProjectSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesProjectSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new PagesProjectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PagesProjectSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project cloudflare_pages_project}
*/
export class PagesProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pages_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PagesProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagesProject to import
  * @param importFromId The id of the existing PagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagesProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/pages_project cloudflare_pages_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagesProjectConfig
  */
  public constructor(scope: Construct, id: string, config: PagesProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pages_project',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.18.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._buildConfig.internalValue = config.buildConfig;
    this._deploymentConfigs.internalValue = config.deploymentConfigs;
    this._name = config.name;
    this._productionBranch = config.productionBranch;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // build_config - computed: true, optional: true, required: false
  private _buildConfig = new PagesProjectBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: PagesProjectBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // canonical_deployment - computed: true, optional: false, required: false
  private _canonicalDeployment = new PagesProjectCanonicalDeploymentOutputReference(this, "canonical_deployment");
  public get canonicalDeployment() {
    return this._canonicalDeployment;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_configs - computed: true, optional: true, required: false
  private _deploymentConfigs = new PagesProjectDeploymentConfigsOutputReference(this, "deployment_configs");
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }
  public putDeploymentConfigs(value: PagesProjectDeploymentConfigs) {
    this._deploymentConfigs.internalValue = value;
  }
  public resetDeploymentConfigs() {
    this._deploymentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigsInput() {
    return this._deploymentConfigs.internalValue;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // framework_version - computed: true, optional: false, required: false
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_deployment - computed: true, optional: false, required: false
  private _latestDeployment = new PagesProjectLatestDeploymentOutputReference(this, "latest_deployment");
  public get latestDeployment() {
    return this._latestDeployment;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preview_script_name - computed: true, optional: false, required: false
  public get previewScriptName() {
    return this.getStringAttribute('preview_script_name');
  }

  // production_branch - computed: false, optional: false, required: true
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // production_script_name - computed: true, optional: false, required: false
  public get productionScriptName() {
    return this.getStringAttribute('production_script_name');
  }

  // source - computed: false, optional: true, required: false
  private _source = new PagesProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PagesProjectSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      build_config: pagesProjectBuildConfigToTerraform(this._buildConfig.internalValue),
      deployment_configs: pagesProjectDeploymentConfigsToTerraform(this._deploymentConfigs.internalValue),
      name: cdktn.stringToTerraform(this._name),
      production_branch: cdktn.stringToTerraform(this._productionBranch),
      source: pagesProjectSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_config: {
        value: pagesProjectBuildConfigToHclTerraform(this._buildConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PagesProjectBuildConfig",
      },
      deployment_configs: {
        value: pagesProjectDeploymentConfigsToHclTerraform(this._deploymentConfigs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PagesProjectDeploymentConfigs",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      production_branch: {
        value: cdktn.stringToHclTerraform(this._productionBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: pagesProjectSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PagesProjectSource",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PipelineSinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the public ID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}
  */
  readonly accountId?: string;
  /**
  * Defines the configuration of the R2 Sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#config PipelineSink#config}
  */
  readonly config?: PipelineSinkConfigA;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}
  */
  readonly format?: PipelineSinkFormat;
  /**
  * Defines the name of the Sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#schema PipelineSink#schema}
  */
  readonly schema?: PipelineSinkSchema;
  /**
  * Specifies the type of sink.
  * Available values: "r2", "r2_data_catalog".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}
  */
  readonly type: string;
}
export interface PipelineSinkConfigCredentials {
  /**
  * Cloudflare Account ID for the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Cloudflare Account ID for the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function pipelineSinkConfigCredentialsToTerraform(struct?: PipelineSinkConfigCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
  }
}


export function pipelineSinkConfigCredentialsToHclTerraform(struct?: PipelineSinkConfigCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkConfigCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkConfigCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkConfigCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface PipelineSinkConfigFileNaming {
  /**
  * The prefix to use in file name. i.e prefix-<uuid>.parquet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}
  */
  readonly prefix?: string;
  /**
  * Filename generation strategy.
  * Available values: "serial", "uuid", "uuid_v7", "ulid".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}
  */
  readonly strategy?: string;
  /**
  * This will overwrite the default file suffix. i.e .parquet, use with caution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}
  */
  readonly suffix?: string;
}

export function pipelineSinkConfigFileNamingToTerraform(struct?: PipelineSinkConfigFileNaming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function pipelineSinkConfigFileNamingToHclTerraform(struct?: PipelineSinkConfigFileNaming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkConfigFileNamingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkConfigFileNaming | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkConfigFileNaming | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._strategy = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._strategy = value.strategy;
      this._suffix = value.suffix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface PipelineSinkConfigPartitioning {
  /**
  * The pattern of the date string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}
  */
  readonly timePattern?: string;
}

export function pipelineSinkConfigPartitioningToTerraform(struct?: PipelineSinkConfigPartitioning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_pattern: cdktn.stringToTerraform(struct!.timePattern),
  }
}


export function pipelineSinkConfigPartitioningToHclTerraform(struct?: PipelineSinkConfigPartitioning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_pattern: {
      value: cdktn.stringToHclTerraform(struct!.timePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkConfigPartitioningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkConfigPartitioning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePattern = this._timePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkConfigPartitioning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timePattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timePattern = value.timePattern;
    }
  }

  // time_pattern - computed: false, optional: true, required: false
  private _timePattern?: string; 
  public get timePattern() {
    return this.getStringAttribute('time_pattern');
  }
  public set timePattern(value: string) {
    this._timePattern = value;
  }
  public resetTimePattern() {
    this._timePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePatternInput() {
    return this._timePattern;
  }
}
export interface PipelineSinkConfigRollingPolicy {
  /**
  * Files will be rolled after reaching this number of bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}
  */
  readonly fileSizeBytes?: number;
  /**
  * Number of seconds of inactivity to wait before rolling over to a new file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}
  */
  readonly inactivitySeconds?: number;
  /**
  * Number of seconds to wait before rolling over to a new file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}
  */
  readonly intervalSeconds?: number;
}

export function pipelineSinkConfigRollingPolicyToTerraform(struct?: PipelineSinkConfigRollingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_size_bytes: cdktn.numberToTerraform(struct!.fileSizeBytes),
    inactivity_seconds: cdktn.numberToTerraform(struct!.inactivitySeconds),
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
  }
}


export function pipelineSinkConfigRollingPolicyToHclTerraform(struct?: PipelineSinkConfigRollingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.fileSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_seconds: {
      value: cdktn.numberToHclTerraform(struct!.inactivitySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkConfigRollingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkConfigRollingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSizeBytes = this._fileSizeBytes;
    }
    if (this._inactivitySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivitySeconds = this._inactivitySeconds;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkConfigRollingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSizeBytes = undefined;
      this._inactivitySeconds = undefined;
      this._intervalSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSizeBytes = value.fileSizeBytes;
      this._inactivitySeconds = value.inactivitySeconds;
      this._intervalSeconds = value.intervalSeconds;
    }
  }

  // file_size_bytes - computed: false, optional: true, required: false
  private _fileSizeBytes?: number; 
  public get fileSizeBytes() {
    return this.getNumberAttribute('file_size_bytes');
  }
  public set fileSizeBytes(value: number) {
    this._fileSizeBytes = value;
  }
  public resetFileSizeBytes() {
    this._fileSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeBytesInput() {
    return this._fileSizeBytes;
  }

  // inactivity_seconds - computed: false, optional: true, required: false
  private _inactivitySeconds?: number; 
  public get inactivitySeconds() {
    return this.getNumberAttribute('inactivity_seconds');
  }
  public set inactivitySeconds(value: number) {
    this._inactivitySeconds = value;
  }
  public resetInactivitySeconds() {
    this._inactivitySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivitySecondsInput() {
    return this._inactivitySeconds;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }
}
export interface PipelineSinkConfigA {
  /**
  * Cloudflare Account ID for the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}
  */
  readonly accountId: string;
  /**
  * R2 Bucket to write to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}
  */
  readonly credentials?: PipelineSinkConfigCredentials;
  /**
  * Controls filename prefix/suffix and strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}
  */
  readonly fileNaming?: PipelineSinkConfigFileNaming;
  /**
  * Jurisdiction this bucket is hosted in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Table namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}
  */
  readonly namespace?: string;
  /**
  * Data-layout partitioning for sinks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}
  */
  readonly partitioning?: PipelineSinkConfigPartitioning;
  /**
  * Subpath within the bucket to write to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#path PipelineSink#path}
  */
  readonly path?: string;
  /**
  * Rolling policy for file sinks (when & why to close a file and open a new one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}
  */
  readonly rollingPolicy?: PipelineSinkConfigRollingPolicy;
  /**
  * Table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}
  */
  readonly tableName?: string;
  /**
  * Authentication token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#token PipelineSink#token}
  */
  readonly token?: string;
}

export function pipelineSinkConfigAToTerraform(struct?: PipelineSinkConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    bucket: cdktn.stringToTerraform(struct!.bucket),
    credentials: pipelineSinkConfigCredentialsToTerraform(struct!.credentials),
    file_naming: pipelineSinkConfigFileNamingToTerraform(struct!.fileNaming),
    jurisdiction: cdktn.stringToTerraform(struct!.jurisdiction),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    partitioning: pipelineSinkConfigPartitioningToTerraform(struct!.partitioning),
    path: cdktn.stringToTerraform(struct!.path),
    rolling_policy: pipelineSinkConfigRollingPolicyToTerraform(struct!.rollingPolicy),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function pipelineSinkConfigAToHclTerraform(struct?: PipelineSinkConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pipelineSinkConfigCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineSinkConfigCredentials",
    },
    file_naming: {
      value: pipelineSinkConfigFileNamingToHclTerraform(struct!.fileNaming),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineSinkConfigFileNaming",
    },
    jurisdiction: {
      value: cdktn.stringToHclTerraform(struct!.jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitioning: {
      value: pipelineSinkConfigPartitioningToHclTerraform(struct!.partitioning),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineSinkConfigPartitioning",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_policy: {
      value: pipelineSinkConfigRollingPolicyToHclTerraform(struct!.rollingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineSinkConfigRollingPolicy",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._fileNaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNaming = this._fileNaming?.internalValue;
    }
    if (this._jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.jurisdiction = this._jurisdiction;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._partitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioning = this._partitioning?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._rollingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingPolicy = this._rollingPolicy?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._bucket = undefined;
      this._credentials.internalValue = undefined;
      this._fileNaming.internalValue = undefined;
      this._jurisdiction = undefined;
      this._namespace = undefined;
      this._partitioning.internalValue = undefined;
      this._path = undefined;
      this._rollingPolicy.internalValue = undefined;
      this._tableName = undefined;
      this._token = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._bucket = value.bucket;
      this._credentials.internalValue = value.credentials;
      this._fileNaming.internalValue = value.fileNaming;
      this._jurisdiction = value.jurisdiction;
      this._namespace = value.namespace;
      this._partitioning.internalValue = value.partitioning;
      this._path = value.path;
      this._rollingPolicy.internalValue = value.rollingPolicy;
      this._tableName = value.tableName;
      this._token = value.token;
    }
  }

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

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PipelineSinkConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PipelineSinkConfigCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // file_naming - computed: false, optional: true, required: false
  private _fileNaming = new PipelineSinkConfigFileNamingOutputReference(this, "file_naming");
  public get fileNaming() {
    return this._fileNaming;
  }
  public putFileNaming(value: PipelineSinkConfigFileNaming) {
    this._fileNaming.internalValue = value;
  }
  public resetFileNaming() {
    this._fileNaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNamingInput() {
    return this._fileNaming.internalValue;
  }

  // jurisdiction - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partitioning - computed: false, optional: true, required: false
  private _partitioning = new PipelineSinkConfigPartitioningOutputReference(this, "partitioning");
  public get partitioning() {
    return this._partitioning;
  }
  public putPartitioning(value: PipelineSinkConfigPartitioning) {
    this._partitioning.internalValue = value;
  }
  public resetPartitioning() {
    this._partitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningInput() {
    return this._partitioning.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rolling_policy - computed: false, optional: true, required: false
  private _rollingPolicy = new PipelineSinkConfigRollingPolicyOutputReference(this, "rolling_policy");
  public get rollingPolicy() {
    return this._rollingPolicy;
  }
  public putRollingPolicy(value: PipelineSinkConfigRollingPolicy) {
    this._rollingPolicy.internalValue = value;
  }
  public resetRollingPolicy() {
    this._rollingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingPolicyInput() {
    return this._rollingPolicy.internalValue;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface PipelineSinkFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}
  */
  readonly unstructured?: boolean | cdktn.IResolvable;
}

export function pipelineSinkFormatToTerraform(struct?: PipelineSinkFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    decimal_encoding: cdktn.stringToTerraform(struct!.decimalEncoding),
    row_group_bytes: cdktn.numberToTerraform(struct!.rowGroupBytes),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    type: cdktn.stringToTerraform(struct!.type),
    unstructured: cdktn.booleanToTerraform(struct!.unstructured),
  }
}


export function pipelineSinkFormatToHclTerraform(struct?: PipelineSinkFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_encoding: {
      value: cdktn.stringToHclTerraform(struct!.decimalEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_group_bytes: {
      value: cdktn.numberToHclTerraform(struct!.rowGroupBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unstructured: {
      value: cdktn.booleanToHclTerraform(struct!.unstructured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._decimalEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalEncoding = this._decimalEncoding;
    }
    if (this._rowGroupBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupBytes = this._rowGroupBytes;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unstructured !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._decimalEncoding = undefined;
      this._rowGroupBytes = undefined;
      this._timestampFormat = undefined;
      this._type = undefined;
      this._unstructured = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._decimalEncoding = value.decimalEncoding;
      this._rowGroupBytes = value.rowGroupBytes;
      this._timestampFormat = value.timestampFormat;
      this._type = value.type;
      this._unstructured = value.unstructured;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // decimal_encoding - computed: false, optional: true, required: false
  private _decimalEncoding?: string; 
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }
  public set decimalEncoding(value: string) {
    this._decimalEncoding = value;
  }
  public resetDecimalEncoding() {
    this._decimalEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalEncodingInput() {
    return this._decimalEncoding;
  }

  // row_group_bytes - computed: false, optional: true, required: false
  private _rowGroupBytes?: number; 
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }
  public set rowGroupBytes(value: number) {
    this._rowGroupBytes = value;
  }
  public resetRowGroupBytes() {
    this._rowGroupBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupBytesInput() {
    return this._rowGroupBytes;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
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

  // unstructured - computed: false, optional: true, required: false
  private _unstructured?: boolean | cdktn.IResolvable; 
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
  public set unstructured(value: boolean | cdktn.IResolvable) {
    this._unstructured = value;
  }
  public resetUnstructured() {
    this._unstructured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured;
  }
}
export interface PipelineSinkSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}
  */
  readonly metadataKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#required PipelineSink#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}
  */
  readonly sqlName?: string;
  /**
  * Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}
  */
  readonly type: string;
  /**
  * Available values: "second", "millisecond", "microsecond", "nanosecond".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unit PipelineSink#unit}
  */
  readonly unit?: string;
}

export function pipelineSinkSchemaFieldsToTerraform(struct?: PipelineSinkSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_key: cdktn.stringToTerraform(struct!.metadataKey),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    sql_name: cdktn.stringToTerraform(struct!.sqlName),
    type: cdktn.stringToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function pipelineSinkSchemaFieldsToHclTerraform(struct?: PipelineSinkSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_key: {
      value: cdktn.stringToHclTerraform(struct!.metadataKey),
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
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_name: {
      value: cdktn.stringToHclTerraform(struct!.sqlName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkSchemaFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineSinkSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sqlName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlName = this._sqlName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._name = undefined;
      this._required = undefined;
      this._sqlName = undefined;
      this._type = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._name = value.name;
      this._required = value.required;
      this._sqlName = value.sqlName;
      this._type = value.type;
      this._unit = value.unit;
    }
  }

  // metadata_key - computed: false, optional: true, required: false
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  public resetMetadataKey() {
    this._metadataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sql_name - computed: false, optional: true, required: false
  private _sqlName?: string; 
  public get sqlName() {
    return this.getStringAttribute('sql_name');
  }
  public set sqlName(value: string) {
    this._sqlName = value;
  }
  public resetSqlName() {
    this._sqlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlNameInput() {
    return this._sqlName;
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class PipelineSinkSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : PipelineSinkSchemaFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineSinkSchemaFieldsOutputReference {
    return new PipelineSinkSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSinkSchemaFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}
  */
  readonly unstructured?: boolean | cdktn.IResolvable;
}

export function pipelineSinkSchemaFormatToTerraform(struct?: PipelineSinkSchemaFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    decimal_encoding: cdktn.stringToTerraform(struct!.decimalEncoding),
    row_group_bytes: cdktn.numberToTerraform(struct!.rowGroupBytes),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    type: cdktn.stringToTerraform(struct!.type),
    unstructured: cdktn.booleanToTerraform(struct!.unstructured),
  }
}


export function pipelineSinkSchemaFormatToHclTerraform(struct?: PipelineSinkSchemaFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decimal_encoding: {
      value: cdktn.stringToHclTerraform(struct!.decimalEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_group_bytes: {
      value: cdktn.numberToHclTerraform(struct!.rowGroupBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unstructured: {
      value: cdktn.booleanToHclTerraform(struct!.unstructured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkSchemaFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkSchemaFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._decimalEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalEncoding = this._decimalEncoding;
    }
    if (this._rowGroupBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupBytes = this._rowGroupBytes;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unstructured !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkSchemaFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._decimalEncoding = undefined;
      this._rowGroupBytes = undefined;
      this._timestampFormat = undefined;
      this._type = undefined;
      this._unstructured = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._decimalEncoding = value.decimalEncoding;
      this._rowGroupBytes = value.rowGroupBytes;
      this._timestampFormat = value.timestampFormat;
      this._type = value.type;
      this._unstructured = value.unstructured;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // decimal_encoding - computed: false, optional: true, required: false
  private _decimalEncoding?: string; 
  public get decimalEncoding() {
    return this.getStringAttribute('decimal_encoding');
  }
  public set decimalEncoding(value: string) {
    this._decimalEncoding = value;
  }
  public resetDecimalEncoding() {
    this._decimalEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalEncodingInput() {
    return this._decimalEncoding;
  }

  // row_group_bytes - computed: false, optional: true, required: false
  private _rowGroupBytes?: number; 
  public get rowGroupBytes() {
    return this.getNumberAttribute('row_group_bytes');
  }
  public set rowGroupBytes(value: number) {
    this._rowGroupBytes = value;
  }
  public resetRowGroupBytes() {
    this._rowGroupBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupBytesInput() {
    return this._rowGroupBytes;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
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

  // unstructured - computed: false, optional: true, required: false
  private _unstructured?: boolean | cdktn.IResolvable; 
  public get unstructured() {
    return this.getBooleanAttribute('unstructured');
  }
  public set unstructured(value: boolean | cdktn.IResolvable) {
    this._unstructured = value;
  }
  public resetUnstructured() {
    this._unstructured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured;
  }
}
export interface PipelineSinkSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#fields PipelineSink#fields}
  */
  readonly fields?: PipelineSinkSchemaFields[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}
  */
  readonly format?: PipelineSinkSchemaFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}
  */
  readonly inferred?: boolean | cdktn.IResolvable;
}

export function pipelineSinkSchemaToTerraform(struct?: PipelineSinkSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(pipelineSinkSchemaFieldsToTerraform, false)(struct!.fields),
    format: pipelineSinkSchemaFormatToTerraform(struct!.format),
    inferred: cdktn.booleanToTerraform(struct!.inferred),
  }
}


export function pipelineSinkSchemaToHclTerraform(struct?: PipelineSinkSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(pipelineSinkSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSinkSchemaFieldsList",
    },
    format: {
      value: pipelineSinkSchemaFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineSinkSchemaFormat",
    },
    inferred: {
      value: cdktn.booleanToHclTerraform(struct!.inferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSinkSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineSinkSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._inferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferred = this._inferred;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSinkSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._format.internalValue = undefined;
      this._inferred = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._format.internalValue = value.format;
      this._inferred = value.inferred;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new PipelineSinkSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: PipelineSinkSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new PipelineSinkSchemaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineSinkSchemaFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // inferred - computed: false, optional: true, required: false
  private _inferred?: boolean | cdktn.IResolvable; 
  public get inferred() {
    return this.getBooleanAttribute('inferred');
  }
  public set inferred(value: boolean | cdktn.IResolvable) {
    this._inferred = value;
  }
  public resetInferred() {
    this._inferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredInput() {
    return this._inferred;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}
*/
export class PipelineSink extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pipeline_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineSink to import
  * @param importFromId The id of the existing PipelineSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink cloudflare_pipeline_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineSinkConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pipeline_sink',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.20.0',
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
    this._config.internalValue = config.config;
    this._format.internalValue = config.format;
    this._name = config.name;
    this._schema.internalValue = config.schema;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // config - computed: false, optional: true, required: false
  private _config = new PipelineSinkConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PipelineSinkConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // format - computed: false, optional: true, required: false
  private _format = new PipelineSinkFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineSinkFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // schema - computed: false, optional: true, required: false
  private _schema = new PipelineSinkSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: PipelineSinkSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      config: pipelineSinkConfigAToTerraform(this._config.internalValue),
      format: pipelineSinkFormatToTerraform(this._format.internalValue),
      name: cdktn.stringToTerraform(this._name),
      schema: pipelineSinkSchemaToTerraform(this._schema.internalValue),
      type: cdktn.stringToTerraform(this._type),
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
      config: {
        value: pipelineSinkConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineSinkConfigA",
      },
      format: {
        value: pipelineSinkFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineSinkFormat",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: pipelineSinkSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineSinkSchema",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

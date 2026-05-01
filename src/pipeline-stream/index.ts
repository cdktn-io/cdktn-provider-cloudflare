/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PipelineStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the public ID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#account_id PipelineStream#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}
  */
  readonly format?: PipelineStreamFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#http PipelineStream#http}
  */
  readonly http?: PipelineStreamHttp;
  /**
  * Specifies the name of the Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#name PipelineStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#schema PipelineStream#schema}
  */
  readonly schema?: PipelineStreamSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}
  */
  readonly workerBinding?: PipelineStreamWorkerBinding;
}
export interface PipelineStreamFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#compression PipelineStream#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
  */
  readonly unstructured?: boolean | cdktn.IResolvable;
}

export function pipelineStreamFormatToTerraform(struct?: PipelineStreamFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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


export function pipelineStreamFormatToHclTerraform(struct?: PipelineStreamFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class PipelineStreamFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamFormat | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipelineStreamFormat | cdktn.IResolvable | undefined) {
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
export interface PipelineStreamHttpCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#origins PipelineStream#origins}
  */
  readonly origins?: string[];
}

export function pipelineStreamHttpCorsToTerraform(struct?: PipelineStreamHttpCors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.origins),
  }
}


export function pipelineStreamHttpCorsToHclTerraform(struct?: PipelineStreamHttpCors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamHttpCorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamHttpCors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamHttpCors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origins = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._origins = value.origins;
    }
  }

  // origins - computed: true, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return this.getListAttribute('origins');
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface PipelineStreamHttp {
  /**
  * Indicates that authentication is required for the HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#authentication PipelineStream#authentication}
  */
  readonly authentication: boolean | cdktn.IResolvable;
  /**
  * Specifies the CORS options for the HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#cors PipelineStream#cors}
  */
  readonly cors?: PipelineStreamHttpCors;
  /**
  * Indicates that the HTTP endpoint is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function pipelineStreamHttpToTerraform(struct?: PipelineStreamHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktn.booleanToTerraform(struct!.authentication),
    cors: pipelineStreamHttpCorsToTerraform(struct!.cors),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function pipelineStreamHttpToHclTerraform(struct?: PipelineStreamHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktn.booleanToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cors: {
      value: pipelineStreamHttpCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineStreamHttpCors",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamHttp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamHttp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._cors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._cors.internalValue = value.cors;
      this._enabled = value.enabled;
    }
  }

  // authentication - computed: true, optional: false, required: true
  private _authentication?: boolean | cdktn.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktn.IResolvable) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // cors - computed: true, optional: true, required: false
  private _cors = new PipelineStreamHttpCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: PipelineStreamHttpCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface PipelineStreamSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}
  */
  readonly metadataKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#name PipelineStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#required PipelineStream#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}
  */
  readonly sqlName?: string;
  /**
  * Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Available values: "second", "millisecond", "microsecond", "nanosecond".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unit PipelineStream#unit}
  */
  readonly unit?: string;
}

export function pipelineStreamSchemaFieldsToTerraform(struct?: PipelineStreamSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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


export function pipelineStreamSchemaFieldsToHclTerraform(struct?: PipelineStreamSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class PipelineStreamSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipelineStreamSchemaFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipelineStreamSchemaFields | cdktn.IResolvable | undefined) {
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

export class PipelineStreamSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : PipelineStreamSchemaFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineStreamSchemaFieldsOutputReference {
    return new PipelineStreamSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineStreamSchemaFormat {
  /**
  * Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#compression PipelineStream#compression}
  */
  readonly compression?: string;
  /**
  * Available values: "number", "string", "bytes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}
  */
  readonly decimalEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}
  */
  readonly rowGroupBytes?: number;
  /**
  * Available values: "rfc3339", "unix_millis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Available values: "json", "parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}
  */
  readonly unstructured?: boolean | cdktn.IResolvable;
}

export function pipelineStreamSchemaFormatToTerraform(struct?: PipelineStreamSchemaFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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


export function pipelineStreamSchemaFormatToHclTerraform(struct?: PipelineStreamSchemaFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class PipelineStreamSchemaFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamSchemaFormat | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipelineStreamSchemaFormat | cdktn.IResolvable | undefined) {
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
export interface PipelineStreamSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#fields PipelineStream#fields}
  */
  readonly fields?: PipelineStreamSchemaFields[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}
  */
  readonly format?: PipelineStreamSchemaFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#inferred PipelineStream#inferred}
  */
  readonly inferred?: boolean | cdktn.IResolvable;
}

export function pipelineStreamSchemaToTerraform(struct?: PipelineStreamSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(pipelineStreamSchemaFieldsToTerraform, false)(struct!.fields),
    format: pipelineStreamSchemaFormatToTerraform(struct!.format),
    inferred: cdktn.booleanToTerraform(struct!.inferred),
  }
}


export function pipelineStreamSchemaToHclTerraform(struct?: PipelineStreamSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(pipelineStreamSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineStreamSchemaFieldsList",
    },
    format: {
      value: pipelineStreamSchemaFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineStreamSchemaFormat",
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

export class PipelineStreamSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamSchema | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipelineStreamSchema | cdktn.IResolvable | undefined) {
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
  private _fields = new PipelineStreamSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: PipelineStreamSchemaFields[] | cdktn.IResolvable) {
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
  private _format = new PipelineStreamSchemaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineStreamSchemaFormat) {
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
export interface PipelineStreamWorkerBinding {
  /**
  * Indicates that the worker binding is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function pipelineStreamWorkerBindingToTerraform(struct?: PipelineStreamWorkerBinding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function pipelineStreamWorkerBindingToHclTerraform(struct?: PipelineStreamWorkerBinding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineStreamWorkerBindingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineStreamWorkerBinding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineStreamWorkerBinding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream cloudflare_pipeline_stream}
*/
export class PipelineStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pipeline_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineStream to import
  * @param importFromId The id of the existing PipelineStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream cloudflare_pipeline_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineStreamConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pipeline_stream',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.19.1',
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
    this._format.internalValue = config.format;
    this._http.internalValue = config.http;
    this._name = config.name;
    this._schema.internalValue = config.schema;
    this._workerBinding.internalValue = config.workerBinding;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // format - computed: false, optional: true, required: false
  private _format = new PipelineStreamFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: PipelineStreamFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new PipelineStreamHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: PipelineStreamHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
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
  private _schema = new PipelineStreamSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: PipelineStreamSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // worker_binding - computed: true, optional: true, required: false
  private _workerBinding = new PipelineStreamWorkerBindingOutputReference(this, "worker_binding");
  public get workerBinding() {
    return this._workerBinding;
  }
  public putWorkerBinding(value: PipelineStreamWorkerBinding) {
    this._workerBinding.internalValue = value;
  }
  public resetWorkerBinding() {
    this._workerBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerBindingInput() {
    return this._workerBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      format: pipelineStreamFormatToTerraform(this._format.internalValue),
      http: pipelineStreamHttpToTerraform(this._http.internalValue),
      name: cdktn.stringToTerraform(this._name),
      schema: pipelineStreamSchemaToTerraform(this._schema.internalValue),
      worker_binding: pipelineStreamWorkerBindingToTerraform(this._workerBinding.internalValue),
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
      format: {
        value: pipelineStreamFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamFormat",
      },
      http: {
        value: pipelineStreamHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamHttp",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: pipelineStreamSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamSchema",
      },
      worker_binding: {
        value: pipelineStreamWorkerBindingToHclTerraform(this._workerBinding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineStreamWorkerBinding",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

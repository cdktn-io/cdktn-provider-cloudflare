/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TokenValidationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}
  */
  readonly credentials: TokenValidationConfigCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#description TokenValidationConfig#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#title TokenValidationConfig#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}
  */
  readonly tokenSources: string[];
  /**
  * Available values: "JWT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#token_type TokenValidationConfig#token_type}
  */
  readonly tokenType: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#zone_id TokenValidationConfig#zone_id}
  */
  readonly zoneId: string;
}
export interface TokenValidationConfigCredentialsKeys {
  /**
  * Algorithm
  * Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#alg TokenValidationConfig#alg}
  */
  readonly alg: string;
  /**
  * Curve
  * Available values: "P-256", "P-384".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#crv TokenValidationConfig#crv}
  */
  readonly crv?: string;
  /**
  * RSA exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#e TokenValidationConfig#e}
  */
  readonly e?: string;
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#kid TokenValidationConfig#kid}
  */
  readonly kid: string;
  /**
  * Key Type
  * Available values: "RSA", "EC".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#kty TokenValidationConfig#kty}
  */
  readonly kty: string;
  /**
  * RSA modulus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#n TokenValidationConfig#n}
  */
  readonly n?: string;
  /**
  * X EC coordinate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#x TokenValidationConfig#x}
  */
  readonly x?: string;
  /**
  * Y EC coordinate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#y TokenValidationConfig#y}
  */
  readonly y?: string;
}

export function tokenValidationConfigCredentialsKeysToTerraform(struct?: TokenValidationConfigCredentialsKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktn.stringToTerraform(struct!.alg),
    crv: cdktn.stringToTerraform(struct!.crv),
    e: cdktn.stringToTerraform(struct!.e),
    kid: cdktn.stringToTerraform(struct!.kid),
    kty: cdktn.stringToTerraform(struct!.kty),
    n: cdktn.stringToTerraform(struct!.n),
    x: cdktn.stringToTerraform(struct!.x),
    y: cdktn.stringToTerraform(struct!.y),
  }
}


export function tokenValidationConfigCredentialsKeysToHclTerraform(struct?: TokenValidationConfigCredentialsKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktn.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crv: {
      value: cdktn.stringToHclTerraform(struct!.crv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktn.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kid: {
      value: cdktn.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktn.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktn.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktn.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktn.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenValidationConfigCredentialsKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TokenValidationConfigCredentialsKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._crv !== undefined) {
      hasAnyValues = true;
      internalValueResult.crv = this._crv;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenValidationConfigCredentialsKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._crv = undefined;
      this._e = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._crv = value.crv;
      this._e = value.e;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // alg - computed: false, optional: false, required: true
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // crv - computed: false, optional: true, required: false
  private _crv?: string; 
  public get crv() {
    return this.getStringAttribute('crv');
  }
  public set crv(value: string) {
    this._crv = value;
  }
  public resetCrv() {
    this._crv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crvInput() {
    return this._crv;
  }

  // e - computed: false, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: false, optional: false, required: true
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: false, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class TokenValidationConfigCredentialsKeysList extends cdktn.ComplexList {
  public internalValue? : TokenValidationConfigCredentialsKeys[] | cdktn.IResolvable

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
  public get(index: number): TokenValidationConfigCredentialsKeysOutputReference {
    return new TokenValidationConfigCredentialsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TokenValidationConfigCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}
  */
  readonly keys: TokenValidationConfigCredentialsKeys[] | cdktn.IResolvable;
}

export function tokenValidationConfigCredentialsToTerraform(struct?: TokenValidationConfigCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktn.listMapper(tokenValidationConfigCredentialsKeysToTerraform, false)(struct!.keys),
  }
}


export function tokenValidationConfigCredentialsToHclTerraform(struct?: TokenValidationConfigCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktn.listMapperHcl(tokenValidationConfigCredentialsKeysToHclTerraform, false)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "TokenValidationConfigCredentialsKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenValidationConfigCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TokenValidationConfigCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenValidationConfigCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys.internalValue = value.keys;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys = new TokenValidationConfigCredentialsKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: TokenValidationConfigCredentialsKeys[] | cdktn.IResolvable) {
    this._keys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config cloudflare_token_validation_config}
*/
export class TokenValidationConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_token_validation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TokenValidationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TokenValidationConfig to import
  * @param importFromId The id of the existing TokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TokenValidationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/token_validation_config cloudflare_token_validation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenValidationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TokenValidationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_token_validation_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.17.0',
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
    this._credentials.internalValue = config.credentials;
    this._description = config.description;
    this._title = config.title;
    this._tokenSources = config.tokenSources;
    this._tokenType = config.tokenType;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new TokenValidationConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: TokenValidationConfigCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token_sources - computed: false, optional: false, required: true
  private _tokenSources?: string[]; 
  public get tokenSources() {
    return this.getListAttribute('token_sources');
  }
  public set tokenSources(value: string[]) {
    this._tokenSources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSourcesInput() {
    return this._tokenSources;
  }

  // token_type - computed: false, optional: false, required: true
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: tokenValidationConfigCredentialsToTerraform(this._credentials.internalValue),
      description: cdktn.stringToTerraform(this._description),
      title: cdktn.stringToTerraform(this._title),
      token_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenSources),
      token_type: cdktn.stringToTerraform(this._tokenType),
      zone_id: cdktn.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: tokenValidationConfigCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TokenValidationConfigCredentials",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktn.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token_type: {
        value: cdktn.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktn.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

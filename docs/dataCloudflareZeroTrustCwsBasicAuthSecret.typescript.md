# `dataCloudflareZeroTrustCwsBasicAuthSecret` Submodule <a name="`dataCloudflareZeroTrustCwsBasicAuthSecret` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecret <a name="DataCloudflareZeroTrustCwsBasicAuthSecret" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret cloudflare_zero_trust_cws_basic_auth_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsBasicAuthSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig">DataCloudflareZeroTrustCwsBasicAuthSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig">DataCloudflareZeroTrustCwsBasicAuthSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustCwsBasicAuthSecretFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsBasicAuthSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsBasicAuthSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsBasicAuthSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialIdInput">credentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference">DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `credentialIdInput`<sup>Optional</sup> <a name="credentialIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialIdInput"></a>

```typescript
public readonly credentialIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustCwsBasicAuthSecretFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretConfig <a name="DataCloudflareZeroTrustCwsBasicAuthSecretConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsBasicAuthSecretConfig: dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.credentialId">credentialId</a></code> | <code>string</code> | ID of the parent credential. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#filter DataCloudflareZeroTrustCwsBasicAuthSecret#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | ID of the secret to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#account_id DataCloudflareZeroTrustCwsBasicAuthSecret#account_id}

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

ID of the parent credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#credential_id DataCloudflareZeroTrustCwsBasicAuthSecret#credential_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsBasicAuthSecretFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#filter DataCloudflareZeroTrustCwsBasicAuthSecret#filter}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

ID of the secret to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#secret_id DataCloudflareZeroTrustCwsBasicAuthSecret#secret_id}

---

### DataCloudflareZeroTrustCwsBasicAuthSecretFilter <a name="DataCloudflareZeroTrustCwsBasicAuthSecretFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsBasicAuthSecretFilter: dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "created_at". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#direction DataCloudflareZeroTrustCwsBasicAuthSecret#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secret#order DataCloudflareZeroTrustCwsBasicAuthSecret#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference <a name="DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustCwsBasicAuthSecretFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecret.DataCloudflareZeroTrustCwsBasicAuthSecretFilter">DataCloudflareZeroTrustCwsBasicAuthSecretFilter</a>

---




# `dataCloudflareZeroTrustCwsRegoMetadata` Submodule <a name="`dataCloudflareZeroTrustCwsRegoMetadata` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsRegoMetadata <a name="DataCloudflareZeroTrustCwsRegoMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata cloudflare_zero_trust_cws_rego_metadata}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsRegoMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig">DataCloudflareZeroTrustCwsRegoMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig">DataCloudflareZeroTrustCwsRegoMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetRegoMetadataId">resetRegoMetadataId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustCwsRegoMetadataFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRegoMetadataId` <a name="resetRegoMetadataId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.resetRegoMetadataId"></a>

```typescript
public resetRegoMetadataId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoMetadata resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoMetadata resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsRegoMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference">DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.importPath">importPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.regoMetadataIdInput">regoMetadataIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.regoMetadataId">regoMetadataId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference">DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.importPath"></a>

```typescript
public readonly importPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustCwsRegoMetadataFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a>

---

##### `regoMetadataIdInput`<sup>Optional</sup> <a name="regoMetadataIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.regoMetadataIdInput"></a>

```typescript
public readonly regoMetadataIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `regoMetadataId`<sup>Required</sup> <a name="regoMetadataId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.regoMetadataId"></a>

```typescript
public readonly regoMetadataId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsRegoMetadataConfig <a name="DataCloudflareZeroTrustCwsRegoMetadataConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsRegoMetadataConfig: dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#filter DataCloudflareZeroTrustCwsRegoMetadata#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.regoMetadataId">regoMetadataId</a></code> | <code>string</code> | ID of the rego metadata document to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#account_id DataCloudflareZeroTrustCwsRegoMetadata#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsRegoMetadataFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#filter DataCloudflareZeroTrustCwsRegoMetadata#filter}.

---

##### `regoMetadataId`<sup>Optional</sup> <a name="regoMetadataId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataConfig.property.regoMetadataId"></a>

```typescript
public readonly regoMetadataId: string;
```

- *Type:* string

ID of the rego metadata document to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#rego_metadata_id DataCloudflareZeroTrustCwsRegoMetadata#rego_metadata_id}

---

### DataCloudflareZeroTrustCwsRegoMetadataFilter <a name="DataCloudflareZeroTrustCwsRegoMetadataFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsRegoMetadataFilter: dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.importPath">importPath</a></code> | <code>string</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.name">name</a></code> | <code>string</code> | Filter by rego metadata name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#direction DataCloudflareZeroTrustCwsRegoMetadata#direction}

---

##### `importPath`<sup>Optional</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.importPath"></a>

```typescript
public readonly importPath: string;
```

- *Type:* string

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#import_path DataCloudflareZeroTrustCwsRegoMetadata#import_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by rego metadata name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#name DataCloudflareZeroTrustCwsRegoMetadata#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata#order DataCloudflareZeroTrustCwsRegoMetadata#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference <a name="DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoMetadata } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetImportPath">resetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetImportPath` <a name="resetImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetImportPath"></a>

```typescript
public resetImportPath(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.importPathInput">importPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.importPath">importPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `importPathInput`<sup>Optional</sup> <a name="importPathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.importPathInput"></a>

```typescript
public readonly importPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.importPath"></a>

```typescript
public readonly importPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustCwsRegoMetadataFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadata.DataCloudflareZeroTrustCwsRegoMetadataFilter">DataCloudflareZeroTrustCwsRegoMetadataFilter</a>

---




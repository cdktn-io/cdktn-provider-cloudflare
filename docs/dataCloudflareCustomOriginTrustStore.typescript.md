# `dataCloudflareCustomOriginTrustStore` Submodule <a name="`dataCloudflareCustomOriginTrustStore` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomOriginTrustStore <a name="DataCloudflareCustomOriginTrustStore" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore(scope: Construct, id: string, config: DataCloudflareCustomOriginTrustStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig">DataCloudflareCustomOriginTrustStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig">DataCloudflareCustomOriginTrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId">resetCustomOriginTrustStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareCustomOriginTrustStoreFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---

##### `resetCustomOriginTrustStoreId` <a name="resetCustomOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId"></a>

```typescript
public resetCustomOriginTrustStoreId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCustomOriginTrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCustomOriginTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomOriginTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput">customOriginTrustStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId">customOriginTrustStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter"></a>

```typescript
public readonly filter: DataCloudflareCustomOriginTrustStoreFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `customOriginTrustStoreIdInput`<sup>Optional</sup> <a name="customOriginTrustStoreIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput"></a>

```typescript
public readonly customOriginTrustStoreIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareCustomOriginTrustStoreFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `customOriginTrustStoreId`<sup>Required</sup> <a name="customOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId"></a>

```typescript
public readonly customOriginTrustStoreId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomOriginTrustStoreConfig <a name="DataCloudflareCustomOriginTrustStoreConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.Initializer"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomOriginTrustStoreConfig: dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId">customOriginTrustStoreId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#zone_id DataCloudflareCustomOriginTrustStore#zone_id}

---

##### `customOriginTrustStoreId`<sup>Optional</sup> <a name="customOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId"></a>

```typescript
public readonly customOriginTrustStoreId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#custom_origin_trust_store_id DataCloudflareCustomOriginTrustStore#custom_origin_trust_store_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareCustomOriginTrustStoreFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}.

---

### DataCloudflareCustomOriginTrustStoreFilter <a name="DataCloudflareCustomOriginTrustStoreFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.Initializer"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

const dataCloudflareCustomOriginTrustStoreFilter: dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit">limit</a></code> | <code>number</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset">offset</a></code> | <code>number</code> | Offset the results. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#limit DataCloudflareCustomOriginTrustStore#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#offset DataCloudflareCustomOriginTrustStore#offset}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomOriginTrustStoreFilterOutputReference <a name="DataCloudflareCustomOriginTrustStoreFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomOriginTrustStore } from '@cdktn/provider-cloudflare'

new dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareCustomOriginTrustStoreFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---




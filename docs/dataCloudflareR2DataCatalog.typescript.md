# `dataCloudflareR2DataCatalog` Submodule <a name="`dataCloudflareR2DataCatalog` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2DataCatalog <a name="DataCloudflareR2DataCatalog" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/r2_data_catalog cloudflare_r2_data_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

new dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog(scope: Construct, id: string, config: DataCloudflareR2DataCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig">DataCloudflareR2DataCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig">DataCloudflareR2DataCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareR2DataCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isConstruct"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformElement"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformDataSource"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareR2DataCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareR2DataCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareR2DataCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/r2_data_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2DataCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.credentialStatus">credentialStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `credentialStatus`<sup>Required</sup> <a name="credentialStatus" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.credentialStatus"></a>

```typescript
public readonly credentialStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: DataCloudflareR2DataCatalogMaintenanceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2DataCatalogConfig <a name="DataCloudflareR2DataCatalogConfig" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

const dataCloudflareR2DataCatalogConfig: dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Specifies the R2 bucket name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.accountId">accountId</a></code> | <code>string</code> | Use this to identify the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Specifies the R2 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/r2_data_catalog#bucket_name DataCloudflareR2DataCatalog#bucket_name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Use this to identify the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/r2_data_catalog#account_id DataCloudflareR2DataCatalog#account_id}

---

### DataCloudflareR2DataCatalogMaintenanceConfig <a name="DataCloudflareR2DataCatalogMaintenanceConfig" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfig.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

const dataCloudflareR2DataCatalogMaintenanceConfig: dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfig = { ... }
```


### DataCloudflareR2DataCatalogMaintenanceConfigCompaction <a name="DataCloudflareR2DataCatalogMaintenanceConfigCompaction" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompaction.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

const dataCloudflareR2DataCatalogMaintenanceConfigCompaction: dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompaction = { ... }
```


### DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration <a name="DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

const dataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration: dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference <a name="DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

new dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.targetSizeMb">targetSizeMb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompaction">DataCloudflareR2DataCatalogMaintenanceConfigCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetSizeMb`<sup>Required</sup> <a name="targetSizeMb" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.targetSizeMb"></a>

```typescript
public readonly targetSizeMb: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareR2DataCatalogMaintenanceConfigCompaction;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompaction">DataCloudflareR2DataCatalogMaintenanceConfigCompaction</a>

---


### DataCloudflareR2DataCatalogMaintenanceConfigOutputReference <a name="DataCloudflareR2DataCatalogMaintenanceConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

new dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.compaction">compaction</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.snapshotExpiration">snapshotExpiration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfig">DataCloudflareR2DataCatalogMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.compaction"></a>

```typescript
public readonly compaction: DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigCompactionOutputReference</a>

---

##### `snapshotExpiration`<sup>Required</sup> <a name="snapshotExpiration" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.snapshotExpiration"></a>

```typescript
public readonly snapshotExpiration: DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference">DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareR2DataCatalogMaintenanceConfig;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfig">DataCloudflareR2DataCatalogMaintenanceConfig</a>

---


### DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference <a name="DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareR2DataCatalog } from '@cdktn/provider-cloudflare'

new dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.maxSnapshotAge">maxSnapshotAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.minSnapshotsToKeep">minSnapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration">DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSnapshotAge`<sup>Required</sup> <a name="maxSnapshotAge" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.maxSnapshotAge"></a>

```typescript
public readonly maxSnapshotAge: string;
```

- *Type:* string

---

##### `minSnapshotsToKeep`<sup>Required</sup> <a name="minSnapshotsToKeep" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.minSnapshotsToKeep"></a>

```typescript
public readonly minSnapshotsToKeep: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2DataCatalog.DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration">DataCloudflareR2DataCatalogMaintenanceConfigSnapshotExpiration</a>

---




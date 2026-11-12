# `dataCloudflareLogExplorerDatasets` Submodule <a name="`dataCloudflareLogExplorerDatasets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogExplorerDatasets <a name="DataCloudflareLogExplorerDatasets" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets cloudflare_log_explorer_datasets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

new dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets(scope: Construct, id: string, config?: DataCloudflareLogExplorerDatasetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig">DataCloudflareLogExplorerDatasetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones">resetIncludeZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetIncludeZones` <a name="resetIncludeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetIncludeZones"></a>

```typescript
public resetIncludeZones(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareLogExplorerDatasets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLogExplorerDatasets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLogExplorerDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogExplorerDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput">includeZonesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones">includeZones</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.result"></a>

```typescript
public readonly result: DataCloudflareLogExplorerDatasetsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList">DataCloudflareLogExplorerDatasetsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `includeZonesInput`<sup>Optional</sup> <a name="includeZonesInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZonesInput"></a>

```typescript
public readonly includeZonesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `includeZones`<sup>Required</sup> <a name="includeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.includeZones"></a>

```typescript
public readonly includeZones: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogExplorerDatasetsConfig <a name="DataCloudflareLogExplorerDatasetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.Initializer"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

const dataCloudflareLogExplorerDatasetsConfig: dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones">includeZones</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#account_id DataCloudflareLogExplorerDatasets#account_id}

---

##### `includeZones`<sup>Optional</sup> <a name="includeZones" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.includeZones"></a>

```typescript
public readonly includeZones: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to include zone-scoped datasets belonging to this account. Only supported with account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#include_zones DataCloudflareLogExplorerDatasets#include_zones}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#max_items DataCloudflareLogExplorerDatasets#max_items}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/log_explorer_datasets#zone_id DataCloudflareLogExplorerDatasets#zone_id}

---

### DataCloudflareLogExplorerDatasetsResult <a name="DataCloudflareLogExplorerDatasetsResult" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult.Initializer"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

const dataCloudflareLogExplorerDatasetsResult: dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogExplorerDatasetsResultList <a name="DataCloudflareLogExplorerDatasetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

new dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareLogExplorerDatasetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLogExplorerDatasetsResultOutputReference <a name="DataCloudflareLogExplorerDatasetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLogExplorerDatasets } from '@cdktn/provider-cloudflare'

new dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLogExplorerDatasetsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLogExplorerDatasets.DataCloudflareLogExplorerDatasetsResult">DataCloudflareLogExplorerDatasetsResult</a>

---




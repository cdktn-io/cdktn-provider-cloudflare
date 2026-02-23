# `dataCloudflareWorkerVersion` Submodule <a name="`dataCloudflareWorkerVersion` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersion <a name="DataCloudflareWorkerVersion" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersion(scope: Construct, id: string, config: DataCloudflareWorkerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig">DataCloudflareWorkerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig">DataCloudflareWorkerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.resetInclude"></a>

```typescript
public resetInclude(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareWorkerVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference">DataCloudflareWorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference">DataCloudflareWorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.bindings">bindings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList">DataCloudflareWorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference">DataCloudflareWorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainModule">mainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainScriptBase64">mainScriptBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.migrations">migrations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference">DataCloudflareWorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.modules">modules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList">DataCloudflareWorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference">DataCloudflareWorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.startupTimeMs">startupTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.usageModel">usageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.includeInput">includeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerIdInput">workerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.include">include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.annotations"></a>

```typescript
public readonly annotations: DataCloudflareWorkerVersionAnnotationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference">DataCloudflareWorkerVersionAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.assets"></a>

```typescript
public readonly assets: DataCloudflareWorkerVersionAssetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference">DataCloudflareWorkerVersionAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.bindings"></a>

```typescript
public readonly bindings: DataCloudflareWorkerVersionBindingsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList">DataCloudflareWorkerVersionBindingsList</a>

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.limits"></a>

```typescript
public readonly limits: DataCloudflareWorkerVersionLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference">DataCloudflareWorkerVersionLimitsOutputReference</a>

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainModule"></a>

```typescript
public readonly mainModule: string;
```

- *Type:* string

---

##### `mainScriptBase64`<sup>Required</sup> <a name="mainScriptBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.mainScriptBase64"></a>

```typescript
public readonly mainScriptBase64: string;
```

- *Type:* string

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.migrations"></a>

```typescript
public readonly migrations: DataCloudflareWorkerVersionMigrationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference">DataCloudflareWorkerVersionMigrationsOutputReference</a>

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.modules"></a>

```typescript
public readonly modules: DataCloudflareWorkerVersionModulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList">DataCloudflareWorkerVersionModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.placement"></a>

```typescript
public readonly placement: DataCloudflareWorkerVersionPlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference">DataCloudflareWorkerVersionPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `startupTimeMs`<sup>Required</sup> <a name="startupTimeMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.startupTimeMs"></a>

```typescript
public readonly startupTimeMs: number;
```

- *Type:* number

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.includeInput"></a>

```typescript
public readonly includeInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerIdInput"></a>

```typescript
public readonly workerIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.include"></a>

```typescript
public readonly include: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionAnnotations <a name="DataCloudflareWorkerVersionAnnotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionAnnotations: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations = { ... }
```


### DataCloudflareWorkerVersionAssets <a name="DataCloudflareWorkerVersionAssets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionAssets: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets = { ... }
```


### DataCloudflareWorkerVersionAssetsConfig <a name="DataCloudflareWorkerVersionAssetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionAssetsConfig: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig = { ... }
```


### DataCloudflareWorkerVersionBindings <a name="DataCloudflareWorkerVersionBindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionBindings: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings = { ... }
```


### DataCloudflareWorkerVersionBindingsOutbound <a name="DataCloudflareWorkerVersionBindingsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionBindingsOutbound: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound = { ... }
```


### DataCloudflareWorkerVersionBindingsOutboundWorker <a name="DataCloudflareWorkerVersionBindingsOutboundWorker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionBindingsOutboundWorker: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker = { ... }
```


### DataCloudflareWorkerVersionBindingsSimple <a name="DataCloudflareWorkerVersionBindingsSimple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionBindingsSimple: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple = { ... }
```


### DataCloudflareWorkerVersionConfig <a name="DataCloudflareWorkerVersionConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionConfig: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Identifier for the version, which can be ID or the literal "latest" to operate on the most recently created version. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.workerId">workerId</a></code> | <code>string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.include">include</a></code> | <code>string</code> | Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#account_id DataCloudflareWorkerVersion#account_id}

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Identifier for the version, which can be ID or the literal "latest" to operate on the most recently created version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#version_id DataCloudflareWorkerVersion#version_id}

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#worker_id DataCloudflareWorkerVersion#worker_id}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionConfig.property.include"></a>

```typescript
public readonly include: string;
```

- *Type:* string

Whether to include the `modules` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size.

Available values: "modules".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/worker_version#include DataCloudflareWorkerVersion#include}

---

### DataCloudflareWorkerVersionLimits <a name="DataCloudflareWorkerVersionLimits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionLimits: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits = { ... }
```


### DataCloudflareWorkerVersionMigrations <a name="DataCloudflareWorkerVersionMigrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrations: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations = { ... }
```


### DataCloudflareWorkerVersionMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionMigrationsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrationsRenamedClasses: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses = { ... }
```


### DataCloudflareWorkerVersionMigrationsSteps <a name="DataCloudflareWorkerVersionMigrationsSteps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrationsSteps: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps = { ... }
```


### DataCloudflareWorkerVersionMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrationsStepsRenamedClasses: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses = { ... }
```


### DataCloudflareWorkerVersionMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrationsStepsTransferredClasses: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses = { ... }
```


### DataCloudflareWorkerVersionMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionMigrationsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionMigrationsTransferredClasses: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses = { ... }
```


### DataCloudflareWorkerVersionModules <a name="DataCloudflareWorkerVersionModules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionModules: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules = { ... }
```


### DataCloudflareWorkerVersionPlacement <a name="DataCloudflareWorkerVersionPlacement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionPlacement: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement = { ... }
```


### DataCloudflareWorkerVersionPlacementTarget <a name="DataCloudflareWorkerVersionPlacementTarget" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkerVersionPlacementTarget: dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionAnnotationsOutputReference <a name="DataCloudflareWorkerVersionAnnotationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTag">workersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations">DataCloudflareWorkerVersionAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```typescript
public readonly workersMessage: string;
```

- *Type:* string

---

##### `workersTag`<sup>Required</sup> <a name="workersTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```typescript
public readonly workersTag: string;
```

- *Type:* string

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```typescript
public readonly workersTriggeredBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionAnnotations;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAnnotations">DataCloudflareWorkerVersionAnnotations</a>

---


### DataCloudflareWorkerVersionAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionAssetsConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig">DataCloudflareWorkerVersionAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```typescript
public readonly htmlHandling: string;
```

- *Type:* string

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```typescript
public readonly notFoundHandling: string;
```

- *Type:* string

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```typescript
public readonly runWorkerFirst: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionAssetsConfig;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfig">DataCloudflareWorkerVersionAssetsConfig</a>

---


### DataCloudflareWorkerVersionAssetsOutputReference <a name="DataCloudflareWorkerVersionAssetsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference">DataCloudflareWorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets">DataCloudflareWorkerVersionAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.config"></a>

```typescript
public readonly config: DataCloudflareWorkerVersionAssetsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsConfigOutputReference">DataCloudflareWorkerVersionAssetsConfigOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionAssets;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionAssets">DataCloudflareWorkerVersionAssets</a>

---


### DataCloudflareWorkerVersionBindingsList <a name="DataCloudflareWorkerVersionBindingsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionBindingsOutboundOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.params">params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound">DataCloudflareWorkerVersionBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.params"></a>

```typescript
public readonly params: string[];
```

- *Type:* string[]

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```typescript
public readonly worker: DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionBindingsOutbound;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutbound">DataCloudflareWorkerVersionBindingsOutbound</a>

---


### DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker">DataCloudflareWorkerVersionBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionBindingsOutboundWorker;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundWorker">DataCloudflareWorkerVersionBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionBindingsOutputReference <a name="DataCloudflareWorkerVersionBindingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.oldName">oldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference">DataCloudflareWorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.simple">simple</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference">DataCloudflareWorkerVersionBindingsSimpleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.storeId">storeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings">DataCloudflareWorkerVersionBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedDestinationAddresses"></a>

```typescript
public readonly allowedDestinationAddresses: string[];
```

- *Type:* string[]

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.allowedSenderAddresses"></a>

```typescript
public readonly allowedSenderAddresses: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyBase64"></a>

```typescript
public readonly keyBase64: string;
```

- *Type:* string

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.keyJwk"></a>

```typescript
public readonly keyJwk: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.oldName"></a>

```typescript
public readonly oldName: string;
```

- *Type:* string

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.outbound"></a>

```typescript
public readonly outbound: DataCloudflareWorkerVersionBindingsOutboundOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutboundOutputReference">DataCloudflareWorkerVersionBindingsOutboundOutputReference</a>

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `simple`<sup>Required</sup> <a name="simple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.simple"></a>

```typescript
public readonly simple: DataCloudflareWorkerVersionBindingsSimpleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference">DataCloudflareWorkerVersionBindingsSimpleOutputReference</a>

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionBindings;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindings">DataCloudflareWorkerVersionBindings</a>

---


### DataCloudflareWorkerVersionBindingsSimpleOutputReference <a name="DataCloudflareWorkerVersionBindingsSimpleOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple">DataCloudflareWorkerVersionBindingsSimple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimpleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionBindingsSimple;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionBindingsSimple">DataCloudflareWorkerVersionBindingsSimple</a>

---


### DataCloudflareWorkerVersionLimitsOutputReference <a name="DataCloudflareWorkerVersionLimitsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits">DataCloudflareWorkerVersionLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.cpuMs"></a>

```typescript
public readonly cpuMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionLimits;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionLimits">DataCloudflareWorkerVersionLimits</a>

---


### DataCloudflareWorkerVersionMigrationsOutputReference <a name="DataCloudflareWorkerVersionMigrationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newTag">newTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList">DataCloudflareWorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList">DataCloudflareWorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList">DataCloudflareWorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations">DataCloudflareWorkerVersionMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.newTag"></a>

```typescript
public readonly newTag: string;
```

- *Type:* string

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.oldTag"></a>

```typescript
public readonly oldTag: string;
```

- *Type:* string

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: DataCloudflareWorkerVersionMigrationsRenamedClassesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList">DataCloudflareWorkerVersionMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.steps"></a>

```typescript
public readonly steps: DataCloudflareWorkerVersionMigrationsStepsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList">DataCloudflareWorkerVersionMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: DataCloudflareWorkerVersionMigrationsTransferredClassesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList">DataCloudflareWorkerVersionMigrationsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrations;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrations">DataCloudflareWorkerVersionMigrations</a>

---


### DataCloudflareWorkerVersionMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionMigrationsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses">DataCloudflareWorkerVersionMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrationsRenamedClasses;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsRenamedClasses">DataCloudflareWorkerVersionMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionMigrationsStepsList <a name="DataCloudflareWorkerVersionMigrationsStepsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps">DataCloudflareWorkerVersionMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrationsSteps;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsSteps">DataCloudflareWorkerVersionMigrationsSteps</a>

---


### DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrationsStepsRenamedClasses;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrationsStepsTransferredClasses;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionMigrationsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses">DataCloudflareWorkerVersionMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionMigrationsTransferredClasses;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionMigrationsTransferredClasses">DataCloudflareWorkerVersionMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionModulesList <a name="DataCloudflareWorkerVersionModulesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionModulesOutputReference <a name="DataCloudflareWorkerVersionModulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules">DataCloudflareWorkerVersionModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionModules;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionModules">DataCloudflareWorkerVersionModules</a>

---


### DataCloudflareWorkerVersionPlacementOutputReference <a name="DataCloudflareWorkerVersionPlacementOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList">DataCloudflareWorkerVersionPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement">DataCloudflareWorkerVersionPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.target"></a>

```typescript
public readonly target: DataCloudflareWorkerVersionPlacementTargetList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList">DataCloudflareWorkerVersionPlacementTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionPlacement;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacement">DataCloudflareWorkerVersionPlacement</a>

---


### DataCloudflareWorkerVersionPlacementTargetList <a name="DataCloudflareWorkerVersionPlacementTargetList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionPlacementTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionPlacementTargetOutputReference <a name="DataCloudflareWorkerVersionPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersion } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget">DataCloudflareWorkerVersionPlacementTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionPlacementTarget;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersion.DataCloudflareWorkerVersionPlacementTarget">DataCloudflareWorkerVersionPlacementTarget</a>

---




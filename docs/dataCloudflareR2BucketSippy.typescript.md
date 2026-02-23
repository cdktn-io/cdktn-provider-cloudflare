# `dataCloudflareR2BucketSippy` Submodule <a name="`dataCloudflareR2BucketSippy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2BucketSippy <a name="DataCloudflareR2BucketSippy" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/r2_bucket_sippy cloudflare_r2_bucket_sippy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

new dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy(scope: Construct, id: string, config: DataCloudflareR2BucketSippyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig">DataCloudflareR2BucketSippyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig">DataCloudflareR2BucketSippyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareR2BucketSippy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isConstruct"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformElement"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformDataSource"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareR2BucketSippy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareR2BucketSippy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareR2BucketSippy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2BucketSippy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference">DataCloudflareR2BucketSippyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.source">source</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference">DataCloudflareR2BucketSippySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.destination"></a>

```typescript
public readonly destination: DataCloudflareR2BucketSippyDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference">DataCloudflareR2BucketSippyDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.source"></a>

```typescript
public readonly source: DataCloudflareR2BucketSippySourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference">DataCloudflareR2BucketSippySourceOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2BucketSippyConfig <a name="DataCloudflareR2BucketSippyConfig" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

const dataCloudflareR2BucketSippyConfig: dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.accountId">accountId</a></code> | <code>string</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Name of the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/r2_bucket_sippy#account_id DataCloudflareR2BucketSippy#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/r2_bucket_sippy#bucket_name DataCloudflareR2BucketSippy#bucket_name}

---

### DataCloudflareR2BucketSippyDestination <a name="DataCloudflareR2BucketSippyDestination" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestination.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

const dataCloudflareR2BucketSippyDestination: dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestination = { ... }
```


### DataCloudflareR2BucketSippySource <a name="DataCloudflareR2BucketSippySource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySource.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

const dataCloudflareR2BucketSippySource: dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2BucketSippyDestinationOutputReference <a name="DataCloudflareR2BucketSippyDestinationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

new dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.r2BucketSippyProvider">r2BucketSippyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestination">DataCloudflareR2BucketSippyDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `r2BucketSippyProvider`<sup>Required</sup> <a name="r2BucketSippyProvider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.r2BucketSippyProvider"></a>

```typescript
public readonly r2BucketSippyProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareR2BucketSippyDestination;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippyDestination">DataCloudflareR2BucketSippyDestination</a>

---


### DataCloudflareR2BucketSippySourceOutputReference <a name="DataCloudflareR2BucketSippySourceOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.Initializer"></a>

```typescript
import { dataCloudflareR2BucketSippy } from '@cdktn/provider-cloudflare'

new dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.bucketUrl">bucketUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.r2BucketSippyProvider">r2BucketSippyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySource">DataCloudflareR2BucketSippySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketUrl`<sup>Required</sup> <a name="bucketUrl" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.bucketUrl"></a>

```typescript
public readonly bucketUrl: string;
```

- *Type:* string

---

##### `r2BucketSippyProvider`<sup>Required</sup> <a name="r2BucketSippyProvider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.r2BucketSippyProvider"></a>

```typescript
public readonly r2BucketSippyProvider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareR2BucketSippySource;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketSippy.DataCloudflareR2BucketSippySource">DataCloudflareR2BucketSippySource</a>

---




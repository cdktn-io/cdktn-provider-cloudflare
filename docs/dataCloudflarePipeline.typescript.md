# `dataCloudflarePipeline` Submodule <a name="`dataCloudflarePipeline` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipeline <a name="DataCloudflarePipeline" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline cloudflare_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

new dataCloudflarePipeline.DataCloudflarePipeline(scope: Construct, id: string, config: DataCloudflarePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig">DataCloudflarePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig">DataCloudflarePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isConstruct"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

dataCloudflarePipeline.DataCloudflarePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformElement"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

dataCloudflarePipeline.DataCloudflarePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

dataCloudflarePipeline.DataCloudflarePipeline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflarePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList">DataCloudflarePipelineTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.tables"></a>

```typescript
public readonly tables: DataCloudflarePipelineTablesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList">DataCloudflarePipelineTablesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineConfig <a name="DataCloudflarePipelineConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.Initializer"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineConfig: dataCloudflarePipeline.DataCloudflarePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Specifies the public ID of the pipeline. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.accountId">accountId</a></code> | <code>string</code> | Specifies the public ID of the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Specifies the public ID of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#pipeline_id DataCloudflarePipeline#pipeline_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline#account_id DataCloudflarePipeline#account_id}

---

### DataCloudflarePipelineTables <a name="DataCloudflarePipelineTables" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTables.Initializer"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineTables: dataCloudflarePipeline.DataCloudflarePipelineTables = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineTablesList <a name="DataCloudflarePipelineTablesList" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

new dataCloudflarePipeline.DataCloudflarePipelineTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.get"></a>

```typescript
public get(index: number): DataCloudflarePipelineTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflarePipelineTablesOutputReference <a name="DataCloudflarePipelineTablesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipeline } from '@cdktn/provider-cloudflare'

new dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.latest">latest</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTables">DataCloudflarePipelineTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.latest"></a>

```typescript
public readonly latest: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineTables;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipeline.DataCloudflarePipelineTables">DataCloudflarePipelineTables</a>

---




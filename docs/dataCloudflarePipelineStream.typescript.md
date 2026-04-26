# `dataCloudflarePipelineStream` Submodule <a name="`dataCloudflarePipelineStream` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipelineStream <a name="DataCloudflarePipelineStream" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream cloudflare_pipeline_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStream(scope: Construct, id: string, config?: DataCloudflarePipelineStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig">DataCloudflarePipelineStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig">DataCloudflarePipelineStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter"></a>

```typescript
public putFilter(value: DataCloudflarePipelineStreamFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.resetStreamId"></a>

```typescript
public resetStreamId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePipelineStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflarePipelineStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePipelineStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePipelineStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipelineStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference">DataCloudflarePipelineStreamFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference">DataCloudflarePipelineStreamFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference">DataCloudflarePipelineStreamHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference">DataCloudflarePipelineStreamSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.workerBinding">workerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference">DataCloudflarePipelineStreamWorkerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filter"></a>

```typescript
public readonly filter: DataCloudflarePipelineStreamFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference">DataCloudflarePipelineStreamFilterOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.format"></a>

```typescript
public readonly format: DataCloudflarePipelineStreamFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference">DataCloudflarePipelineStreamFormatOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.http"></a>

```typescript
public readonly http: DataCloudflarePipelineStreamHttpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference">DataCloudflarePipelineStreamHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.schema"></a>

```typescript
public readonly schema: DataCloudflarePipelineStreamSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference">DataCloudflarePipelineStreamSchemaOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `workerBinding`<sup>Required</sup> <a name="workerBinding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.workerBinding"></a>

```typescript
public readonly workerBinding: DataCloudflarePipelineStreamWorkerBindingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference">DataCloudflarePipelineStreamWorkerBindingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflarePipelineStreamFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineStreamConfig <a name="DataCloudflarePipelineStreamConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamConfig: dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.accountId">accountId</a></code> | <code>string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.streamId">streamId</a></code> | <code>string</code> | Specifies the public ID of the stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#account_id DataCloudflarePipelineStream#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflarePipelineStreamFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#filter DataCloudflarePipelineStream#filter}.

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamConfig.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

Specifies the public ID of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#stream_id DataCloudflarePipelineStream#stream_id}

---

### DataCloudflarePipelineStreamFilter <a name="DataCloudflarePipelineStreamFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamFilter: dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.property.pipelineId">pipelineId</a></code> | <code>string</code> | Specifies the public ID of the pipeline. |

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Specifies the public ID of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_stream#pipeline_id DataCloudflarePipelineStream#pipeline_id}

---

### DataCloudflarePipelineStreamFormat <a name="DataCloudflarePipelineStreamFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamFormat: dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat = { ... }
```


### DataCloudflarePipelineStreamHttp <a name="DataCloudflarePipelineStreamHttp" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamHttp: dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp = { ... }
```


### DataCloudflarePipelineStreamHttpCors <a name="DataCloudflarePipelineStreamHttpCors" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamHttpCors: dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors = { ... }
```


### DataCloudflarePipelineStreamSchema <a name="DataCloudflarePipelineStreamSchema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamSchema: dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema = { ... }
```


### DataCloudflarePipelineStreamSchemaFields <a name="DataCloudflarePipelineStreamSchemaFields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamSchemaFields: dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields = { ... }
```


### DataCloudflarePipelineStreamSchemaFormat <a name="DataCloudflarePipelineStreamSchemaFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamSchemaFormat: dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat = { ... }
```


### DataCloudflarePipelineStreamWorkerBinding <a name="DataCloudflarePipelineStreamWorkerBinding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineStreamWorkerBinding: dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineStreamFilterOutputReference <a name="DataCloudflarePipelineStreamFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflarePipelineStreamFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFilter">DataCloudflarePipelineStreamFilter</a>

---


### DataCloudflarePipelineStreamFormatOutputReference <a name="DataCloudflarePipelineStreamFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat">DataCloudflarePipelineStreamFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamFormat">DataCloudflarePipelineStreamFormat</a>

---


### DataCloudflarePipelineStreamHttpCorsOutputReference <a name="DataCloudflarePipelineStreamHttpCorsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.origins">origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors">DataCloudflarePipelineStreamHttpCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamHttpCors;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCors">DataCloudflarePipelineStreamHttpCors</a>

---


### DataCloudflarePipelineStreamHttpOutputReference <a name="DataCloudflarePipelineStreamHttpOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.authentication">authentication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference">DataCloudflarePipelineStreamHttpCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp">DataCloudflarePipelineStreamHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.authentication"></a>

```typescript
public readonly authentication: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.cors"></a>

```typescript
public readonly cors: DataCloudflarePipelineStreamHttpCorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpCorsOutputReference">DataCloudflarePipelineStreamHttpCorsOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamHttp;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamHttp">DataCloudflarePipelineStreamHttp</a>

---


### DataCloudflarePipelineStreamSchemaFieldsList <a name="DataCloudflarePipelineStreamSchemaFieldsList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get"></a>

```typescript
public get(index: number): DataCloudflarePipelineStreamSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflarePipelineStreamSchemaFieldsOutputReference <a name="DataCloudflarePipelineStreamSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.metadataKey">metadataKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.sqlName">sqlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields">DataCloudflarePipelineStreamSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataKey`<sup>Required</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.metadataKey"></a>

```typescript
public readonly metadataKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sqlName`<sup>Required</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.sqlName"></a>

```typescript
public readonly sqlName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamSchemaFields;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFields">DataCloudflarePipelineStreamSchemaFields</a>

---


### DataCloudflarePipelineStreamSchemaFormatOutputReference <a name="DataCloudflarePipelineStreamSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat">DataCloudflarePipelineStreamSchemaFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamSchemaFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormat">DataCloudflarePipelineStreamSchemaFormat</a>

---


### DataCloudflarePipelineStreamSchemaOutputReference <a name="DataCloudflarePipelineStreamSchemaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList">DataCloudflarePipelineStreamSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference">DataCloudflarePipelineStreamSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.inferred">inferred</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema">DataCloudflarePipelineStreamSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: DataCloudflarePipelineStreamSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFieldsList">DataCloudflarePipelineStreamSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.format"></a>

```typescript
public readonly format: DataCloudflarePipelineStreamSchemaFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaFormatOutputReference">DataCloudflarePipelineStreamSchemaFormatOutputReference</a>

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.inferred"></a>

```typescript
public readonly inferred: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamSchema;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamSchema">DataCloudflarePipelineStreamSchema</a>

---


### DataCloudflarePipelineStreamWorkerBindingOutputReference <a name="DataCloudflarePipelineStreamWorkerBindingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineStream } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding">DataCloudflarePipelineStreamWorkerBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineStreamWorkerBinding;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineStream.DataCloudflarePipelineStreamWorkerBinding">DataCloudflarePipelineStreamWorkerBinding</a>

---




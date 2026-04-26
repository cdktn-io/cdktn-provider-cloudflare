# `dataCloudflarePipelineSink` Submodule <a name="`dataCloudflarePipelineSink` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePipelineSink <a name="DataCloudflarePipelineSink" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSink(scope: Construct, id: string, config?: DataCloudflarePipelineSinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig">DataCloudflarePipelineSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig">DataCloudflarePipelineSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetSinkId">resetSinkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter"></a>

```typescript
public putFilter(value: DataCloudflarePipelineSinkFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSinkId` <a name="resetSinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.resetSinkId"></a>

```typescript
public resetSinkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflarePipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePipelineSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference">DataCloudflarePipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference">DataCloudflarePipelineSinkFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference">DataCloudflarePipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference">DataCloudflarePipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkIdInput">sinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkId">sinkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.config"></a>

```typescript
public readonly config: DataCloudflarePipelineSinkConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference">DataCloudflarePipelineSinkConfigAOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filter"></a>

```typescript
public readonly filter: DataCloudflarePipelineSinkFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference">DataCloudflarePipelineSinkFilterOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.format"></a>

```typescript
public readonly format: DataCloudflarePipelineSinkFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference">DataCloudflarePipelineSinkFormatOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.schema"></a>

```typescript
public readonly schema: DataCloudflarePipelineSinkSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference">DataCloudflarePipelineSinkSchemaOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflarePipelineSinkFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

---

##### `sinkIdInput`<sup>Optional</sup> <a name="sinkIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkIdInput"></a>

```typescript
public readonly sinkIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `sinkId`<sup>Required</sup> <a name="sinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.sinkId"></a>

```typescript
public readonly sinkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePipelineSinkConfig <a name="DataCloudflarePipelineSinkConfig" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkConfig: dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.accountId">accountId</a></code> | <code>string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.sinkId">sinkId</a></code> | <code>string</code> | Specifies the publid ID of the sink. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#account_id DataCloudflarePipelineSink#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflarePipelineSinkFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#filter DataCloudflarePipelineSink#filter}.

---

##### `sinkId`<sup>Optional</sup> <a name="sinkId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfig.property.sinkId"></a>

```typescript
public readonly sinkId: string;
```

- *Type:* string

Specifies the publid ID of the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#sink_id DataCloudflarePipelineSink#sink_id}

---

### DataCloudflarePipelineSinkConfigA <a name="DataCloudflarePipelineSinkConfigA" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkConfigA: dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA = { ... }
```


### DataCloudflarePipelineSinkConfigFileNaming <a name="DataCloudflarePipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkConfigFileNaming: dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming = { ... }
```


### DataCloudflarePipelineSinkConfigPartitioning <a name="DataCloudflarePipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkConfigPartitioning: dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning = { ... }
```


### DataCloudflarePipelineSinkConfigRollingPolicy <a name="DataCloudflarePipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkConfigRollingPolicy: dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy = { ... }
```


### DataCloudflarePipelineSinkFilter <a name="DataCloudflarePipelineSinkFilter" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkFilter: dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}. |

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pipeline_sink#pipeline_id DataCloudflarePipelineSink#pipeline_id}.

---

### DataCloudflarePipelineSinkFormat <a name="DataCloudflarePipelineSinkFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkFormat: dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat = { ... }
```


### DataCloudflarePipelineSinkSchema <a name="DataCloudflarePipelineSinkSchema" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkSchema: dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema = { ... }
```


### DataCloudflarePipelineSinkSchemaFields <a name="DataCloudflarePipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkSchemaFields: dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields = { ... }
```


### DataCloudflarePipelineSinkSchemaFormat <a name="DataCloudflarePipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

const dataCloudflarePipelineSinkSchemaFormat: dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePipelineSinkConfigAOutputReference <a name="DataCloudflarePipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fileNaming">fileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference">DataCloudflarePipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference">DataCloudflarePipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.rollingPolicy">rollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference">DataCloudflarePipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA">DataCloudflarePipelineSinkConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `fileNaming`<sup>Required</sup> <a name="fileNaming" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.fileNaming"></a>

```typescript
public readonly fileNaming: DataCloudflarePipelineSinkConfigFileNamingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference">DataCloudflarePipelineSinkConfigFileNamingOutputReference</a>

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partitioning`<sup>Required</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.partitioning"></a>

```typescript
public readonly partitioning: DataCloudflarePipelineSinkConfigPartitioningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference">DataCloudflarePipelineSinkConfigPartitioningOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `rollingPolicy`<sup>Required</sup> <a name="rollingPolicy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```typescript
public readonly rollingPolicy: DataCloudflarePipelineSinkConfigRollingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference">DataCloudflarePipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkConfigA;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigA">DataCloudflarePipelineSinkConfigA</a>

---


### DataCloudflarePipelineSinkConfigFileNamingOutputReference <a name="DataCloudflarePipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming">DataCloudflarePipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkConfigFileNaming;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigFileNaming">DataCloudflarePipelineSinkConfigFileNaming</a>

---


### DataCloudflarePipelineSinkConfigPartitioningOutputReference <a name="DataCloudflarePipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.timePattern">timePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning">DataCloudflarePipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timePattern`<sup>Required</sup> <a name="timePattern" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```typescript
public readonly timePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkConfigPartitioning;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigPartitioning">DataCloudflarePipelineSinkConfigPartitioning</a>

---


### DataCloudflarePipelineSinkConfigRollingPolicyOutputReference <a name="DataCloudflarePipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">inactivitySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy">DataCloudflarePipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: number;
```

- *Type:* number

---

##### `inactivitySeconds`<sup>Required</sup> <a name="inactivitySeconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```typescript
public readonly inactivitySeconds: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkConfigRollingPolicy;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkConfigRollingPolicy">DataCloudflarePipelineSinkConfigRollingPolicy</a>

---


### DataCloudflarePipelineSinkFilterOutputReference <a name="DataCloudflarePipelineSinkFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflarePipelineSinkFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFilter">DataCloudflarePipelineSinkFilter</a>

---


### DataCloudflarePipelineSinkFormatOutputReference <a name="DataCloudflarePipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat">DataCloudflarePipelineSinkFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkFormat">DataCloudflarePipelineSinkFormat</a>

---


### DataCloudflarePipelineSinkSchemaFieldsList <a name="DataCloudflarePipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get"></a>

```typescript
public get(index: number): DataCloudflarePipelineSinkSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflarePipelineSinkSchemaFieldsOutputReference <a name="DataCloudflarePipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.metadataKey">metadataKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.sqlName">sqlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields">DataCloudflarePipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataKey`<sup>Required</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```typescript
public readonly metadataKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sqlName`<sup>Required</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```typescript
public readonly sqlName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkSchemaFields;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFields">DataCloudflarePipelineSinkSchemaFields</a>

---


### DataCloudflarePipelineSinkSchemaFormatOutputReference <a name="DataCloudflarePipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat">DataCloudflarePipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkSchemaFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormat">DataCloudflarePipelineSinkSchemaFormat</a>

---


### DataCloudflarePipelineSinkSchemaOutputReference <a name="DataCloudflarePipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePipelineSink } from '@cdktn/provider-cloudflare'

new dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList">DataCloudflarePipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference">DataCloudflarePipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.inferred">inferred</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema">DataCloudflarePipelineSinkSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: DataCloudflarePipelineSinkSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFieldsList">DataCloudflarePipelineSinkSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.format"></a>

```typescript
public readonly format: DataCloudflarePipelineSinkSchemaFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaFormatOutputReference">DataCloudflarePipelineSinkSchemaFormatOutputReference</a>

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.inferred"></a>

```typescript
public readonly inferred: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePipelineSinkSchema;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePipelineSink.DataCloudflarePipelineSinkSchema">DataCloudflarePipelineSinkSchema</a>

---




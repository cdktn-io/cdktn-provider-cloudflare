# `dataCloudflareWorkersDeployments` Submodule <a name="`dataCloudflareWorkersDeployments` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersDeployments <a name="DataCloudflareWorkersDeployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments cloudflare_workers_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments(scope: Construct, id: string, config: DataCloudflareWorkersDeploymentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig">DataCloudflareWorkersDeploymentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig">DataCloudflareWorkersDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetSince">resetSince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetUntil">resetUntil</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetSince` <a name="resetSince" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetSince"></a>

```typescript
public resetSince(): void
```

##### `resetUntil` <a name="resetUntil" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.resetUntil"></a>

```typescript
public resetUntil(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareWorkersDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkersDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkersDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList">DataCloudflareWorkersDeploymentsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.sinceInput">sinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.untilInput">untilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.since">since</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.until">until</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.result"></a>

```typescript
public readonly result: DataCloudflareWorkersDeploymentsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList">DataCloudflareWorkersDeploymentsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.sinceInput"></a>

```typescript
public readonly sinceInput: string;
```

- *Type:* string

---

##### `untilInput`<sup>Optional</sup> <a name="untilInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.untilInput"></a>

```typescript
public readonly untilInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

---

##### `until`<sup>Required</sup> <a name="until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeployments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersDeploymentsConfig <a name="DataCloudflareWorkersDeploymentsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersDeploymentsConfig: dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.scriptName">scriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.since">since</a></code> | <code>string</code> | Start of the deployment creation time range, inclusive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.until">until</a></code> | <code>string</code> | End of the deployment creation time range, inclusive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#account_id DataCloudflareWorkersDeployments#account_id}

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#script_name DataCloudflareWorkersDeployments#script_name}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#max_items DataCloudflareWorkersDeployments#max_items}

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

Start of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#since DataCloudflareWorkersDeployments#since}

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsConfig.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

End of the deployment creation time range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/workers_deployments#until DataCloudflareWorkersDeployments#until}

---

### DataCloudflareWorkersDeploymentsResult <a name="DataCloudflareWorkersDeploymentsResult" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersDeploymentsResult: dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult = { ... }
```


### DataCloudflareWorkersDeploymentsResultDeployments <a name="DataCloudflareWorkersDeploymentsResultDeployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersDeploymentsResultDeployments: dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments = { ... }
```


### DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations <a name="DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersDeploymentsResultDeploymentsAnnotations: dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations = { ... }
```


### DataCloudflareWorkersDeploymentsResultDeploymentsVersions <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersions" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersDeploymentsResultDeploymentsVersions: dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersMessage"></a>

```typescript
public readonly workersMessage: string;
```

- *Type:* string

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.workersTriggeredBy"></a>

```typescript
public readonly workersTriggeredBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotations</a>

---


### DataCloudflareWorkersDeploymentsResultDeploymentsList <a name="DataCloudflareWorkersDeploymentsResultDeploymentsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList">DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments">DataCloudflareWorkersDeploymentsResultDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.annotations"></a>

```typescript
public readonly annotations: DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference">DataCloudflareWorkersDeploymentsResultDeploymentsAnnotationsOutputReference</a>

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.versions"></a>

```typescript
public readonly versions: DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList">DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkersDeploymentsResultDeployments;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeployments">DataCloudflareWorkersDeploymentsResultDeployments</a>

---


### DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference <a name="DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions">DataCloudflareWorkersDeploymentsResultDeploymentsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkersDeploymentsResultDeploymentsVersions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsVersions">DataCloudflareWorkersDeploymentsResultDeploymentsVersions</a>

---


### DataCloudflareWorkersDeploymentsResultList <a name="DataCloudflareWorkersDeploymentsResultList" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkersDeploymentsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkersDeploymentsResultOutputReference <a name="DataCloudflareWorkersDeploymentsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersDeployments } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.deployments">deployments</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList">DataCloudflareWorkersDeploymentsResultDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult">DataCloudflareWorkersDeploymentsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployments`<sup>Required</sup> <a name="deployments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.deployments"></a>

```typescript
public readonly deployments: DataCloudflareWorkersDeploymentsResultDeploymentsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultDeploymentsList">DataCloudflareWorkersDeploymentsResultDeploymentsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkersDeploymentsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersDeployments.DataCloudflareWorkersDeploymentsResult">DataCloudflareWorkersDeploymentsResult</a>

---



